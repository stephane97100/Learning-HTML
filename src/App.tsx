/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useMemo, useRef } from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  HelpCircle, 
  RefreshCw, 
  Award, 
  Sparkles, 
  Code2, 
  Eye, 
  BookOpenText,
  BookmarkCheck,
  Check,
  X,
  RotateCcw,
  Sliders,
  Laptop
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { lessonsData } from './data/lessons';
import { Lesson, UserProgress } from './types';

export default function App() {
  // Initialize user progression from localStorage
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem('html_academy_progress');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Guarantee all structured properties exist
        return {
          completedLessonIds: parsed.completedLessonIds || [],
          quizScores: parsed.quizScores || {},
          currentLessonId: parsed.currentLessonId || 1,
          sandboxCodes: parsed.sandboxCodes || {},
        };
      }
    } catch (e) {
      console.error("Erreur de décodage de la progression", e);
    }
    return {
      completedLessonIds: [],
      quizScores: {},
      currentLessonId: 1,
      sandboxCodes: {},
    };
  });

  // Current selected lesson (active teaching cursor)
  const currentLesson = useMemo(() => {
    return lessonsData.find(l => l.id === progress.currentLessonId) || lessonsData[0];
  }, [progress.currentLessonId]);

  // Save progress to localStorage anytime it updates
  useEffect(() => {
    localStorage.setItem('html_academy_progress', JSON.stringify(progress));
  }, [progress]);

  // Visual Tabs inside the workspace
  const [activeTab, setActiveTab] = useState<'cours' | 'sandbox' | 'quiz'>('cours');

  // Sandbox Code State
  const [sandboxCode, setSandboxCode] = useState<string>('');

  // Sinc the sandbox code with the selected lesson or saved state
  useEffect(() => {
    const savedCode = progress.sandboxCodes[currentLesson.id];
    setSandboxCode(savedCode !== undefined ? savedCode : currentLesson.codeExample);
    // Reset quiz state when switching lessons
    setSelectedAnswers({});
    setShowQuizResults(false);
    setQuizValidationTriggered(false);
  }, [currentLesson.id]);

  // Selected answers for the 5 quiz questions: record questionIndex -> selectedOptionIndex
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showQuizResults, setShowQuizResults] = useState<boolean>(false);
  const [quizValidationTriggered, setQuizValidationTriggered] = useState<boolean>(false);

  // Computed properties for the active quiz
  const quizPassed = useMemo(() => {
    if (!showQuizResults) return false;
    return currentLesson.quiz.every((q, index) => selectedAnswers[index] === q.correctAnswer);
  }, [selectedAnswers, showQuizResults, currentLesson]);

  // Handle answers changes
  const handleSelectAnswer = (qIndex: number, optionIndex: number) => {
    if (showQuizResults && quizPassed) return; // Disallow edits once successfully passed
    setSelectedAnswers(prev => ({
      ...prev,
      [qIndex]: optionIndex
    }));
  };

  // Submit and validate the quiz answers
  const handleValidateQuiz = () => {
    // Audit that all questions are answered
    const unansweredCount = currentLesson.quiz.filter((_, idx) => selectedAnswers[idx] === undefined).length;
    if (unansweredCount > 0) {
      alert(`Veuillez répondre à toutes les questions avant de valider. (${unansweredCount} restante${unansweredCount > 1 ? 's' : ''})`);
      return;
    }

    setQuizValidationTriggered(true);
    setShowQuizResults(true);

    const score = currentLesson.quiz.reduce((acc, q, index) => {
      return acc + (selectedAnswers[index] === q.correctAnswer ? 1 : 0);
    }, 0);

    // If score is 5/5, unlock other progression!
    if (score === 5) {
      setProgress(prev => {
        const alreadyCompleted = prev.completedLessonIds.includes(currentLesson.id);
        const newCompletions = alreadyCompleted 
          ? prev.completedLessonIds 
          : [...prev.completedLessonIds, currentLesson.id];
        
        return {
          ...prev,
          completedLessonIds: newCompletions,
          quizScores: {
            ...prev.quizScores,
            [currentLesson.id]: score
          }
        };
      });
    }
  };

  // Reset progress data
  const handleResetProgress = () => {
    if (confirm("Êtes-vous sûr de vouloir réinitialiser entièrement votre progression d'apprentissage ?")) {
      const resetState: UserProgress = {
        completedLessonIds: [],
        quizScores: {},
        currentLessonId: 1,
        sandboxCodes: {},
      };
      setProgress(resetState);
      localStorage.setItem('html_academy_progress', JSON.stringify(resetState));
      setActiveTab('cours');
      setSelectedAnswers({});
      setShowQuizResults(false);
      setQuizValidationTriggered(false);
    }
  };

  // Switch to another lesson
  const handleSelectLesson = (lessonId: number) => {
    setProgress(prev => ({
      ...prev,
      currentLessonId: lessonId
    }));
    setActiveTab('cours');
  };

  // Pagination navigation helpers
  const handlePrevLesson = () => {
    if (currentLesson.id > 1) {
      handleSelectLesson(currentLesson.id - 1);
    }
  };

  const handleNextLesson = () => {
    if (currentLesson.id < lessonsData.length) {
      handleSelectLesson(currentLesson.id + 1);
    }
  };

  // Safe check if a lesson is validated
  const isLessonCompleted = (lessonId: number) => {
    return progress.completedLessonIds.includes(lessonId);
  };

  // Calculate the completion progress percentage
  const progressPercentage = useMemo(() => {
    return Math.round((progress.completedLessonIds.length / lessonsData.length) * 100);
  }, [progress.completedLessonIds]);

  // Handle saving current code changes
  const handleCodeChange = (newVal: string) => {
    setSandboxCode(newVal);
    setProgress(prev => ({
      ...prev,
      sandboxCodes: {
        ...prev.sandboxCodes,
        [currentLesson.id]: newVal
      }
    }));
  };

  // Restore initial code example
  const handleResetCode = () => {
    if (confirm("Réinitialiser le code à l'état de départ ? Vos modifications pour cette leçon seront effacées.")) {
      handleCodeChange(currentLesson.codeExample);
    }
  };

  // Iframe compilation reference for live output sandbox
  const iframeSrcDoc = useMemo(() => {
    // Inject neutral but beautiful global font and margin properties inside the user frame
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
              color: #1e293b;
              margin: 16px;
              line-height: 1.5;
            }
            h1, h2, h3, h4, h5, h6 {
              color: #0f172a;
              margin-top: 1.25em;
              margin-bottom: 0.5em;
              font-family: inherit;
              line-height: 1.25;
            }
            h1 { font-size: 1.75rem; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; }
            h2 { font-size: 1.4rem; }
            h3 { font-size: 1.2rem; }
            p { margin-top: 0; margin-bottom: 1rem; }
            a { color: #4f46e5; text-decoration: underline; }
            a:hover { color: #3730a3; }
            code { font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace; background: #f1f5f9; padding: 2px 4px; border-radius: 4px; font-size: 0.9em; }
            ul, ol { margin-top: 0; margin-bottom: 1rem; padding-left: 2rem; }
            table { width: 100%; border-collapse: collapse; margin-bottom: 1rem; }
            th, td { padding: 8px 12px; border: 1px solid #cbd5e1; text-align: left; }
            th { background-color: #f8fafc; font-weight: 600; }
            form { display: flex; flex-direction: column; gap: 8px; max-width: 320px; }
            label { font-weight: 500; font-size: 0.9rem; }
            input, select, textarea { padding: 6px 10px; border: 1px solid #cbd5e1; border-radius: 4px; font-size: 0.9rem; }
            input:focus { outline: 2px solid #6366f1; }
            button { background-color: #4f46e5; color: white; padding: 6px 12px; border: none; border-radius: 4px; cursor: pointer; font-size: 0.9rem; font-weight: 500; }
            button:hover { background-color: #3730a3; }
          </style>
        </head>
        <body>
          ${sandboxCode}
        </body>
      </html>
    `;
  }, [sandboxCode]);

  return (
    <div id="app-root" className="min-h-screen bg-[#f5f2eb] text-[#3c3a30] font-sans flex flex-col selection:bg-[#eae8df] selection:text-[#3c3a30]">
      
      {/* Upper Navigation Header */}
      <header id="main-header" className="bg-[#eae6d8] border-b border-[#dad4be] sticky top-0 z-40 px-4 py-3 sm:px-6 natural-glow-subtle">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#dcdbc4] text-[#42503d] rounded-lg">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold font-display text-[#2d2a22] tracking-tight italic">
                HTML<span className="text-[#5c6f59] font-sans font-normal not-italic ml-0.5">Académie</span>
              </h1>
              <p className="text-xs text-[#7c796b]">
                Parcours d'apprentissage professionnel et d'évaluation rigoureuse
              </p>
            </div>
          </div>

          {/* Real-time progression bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 flex-1 max-w-xl md:justify-end">
            <div className="flex-1">
              <div className="flex items-center justify-between text-xs text-[#5c594c] mb-1">
                <span className="font-semibold flex items-center gap-1">
                  <Sliders className="w-3.5 h-3.5 text-[#5c6f59]" />
                  Progression globale
                </span>
                <span className="font-mono font-bold text-[#42503d]">{progressPercentage}% ({progress.completedLessonIds.length} / {lessonsData.length} validées)</span>
              </div>
              <div className="h-3 bg-[#e8e4d4] rounded-full overflow-hidden border border-[#d2ccb6]">
                <motion.div 
                  className="h-full bg-gradient-to-r from-[#8da18a] to-[#42503d] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
            </div>

            <button
              onClick={handleResetProgress}
              title="Réinitialiser tout le programme"
              className="flex items-center justify-center gap-1 text-xs text-[#8a8775] hover:text-[#b05a3b] transition-colors py-1.5 px-3 border border-[#d2ccb6] hover:border-[#b05a3b] rounded bg-[#faf9f5] hover:bg-[#fcf7f2] cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Réinitialiser
            </button>
          </div>
          
        </div>
      </header>

      {/* Main Container Layout */}
      <div id="workspace-container" className="flex-1 w-full max-w-7xl mx-auto flex flex-col lg:flex-row min-h-0">
        
        {/* Left Drawer/Sidebar: Chapter Navigator */}
        <aside id="sidebar-chapters" className="w-full lg:w-80 bg-[#fbf9f4] border-b lg:border-b-0 lg:border-r border-[#dad4be] flex flex-col shrink-0">
          <div className="p-4 bg-[#f2efe4] border-b border-[#dad4be]">
            <h2 className="text-xs font-bold text-[#5c594c] tracking-widest uppercase flex items-center gap-1.5">
              <BookOpenText className="w-4 h-4 text-[#5c6f59]" />
              Programme des cours
            </h2>
            <p className="text-[11px] text-[#8a8775] mt-0.5">Complétez le quiz final pour valider chaque leçon</p>
          </div>
          
          <nav className="flex-1 overflow-y-auto max-h-[280px] lg:max-h-none p-2 space-y-1">
            {lessonsData.map((lesson) => {
              const active = lesson.id === currentLesson.id;
              const completed = isLessonCompleted(lesson.id);

              return (
                <button
                  key={lesson.id}
                  onClick={() => handleSelectLesson(lesson.id)}
                  className={`w-full text-left p-3 rounded-lg flex items-start gap-3 transition-all relative ${
                    active 
                      ? 'bg-[#eae6d8] text-[#2d2a22] border-l-4 border-[#5c6f59]' 
                      : 'hover:bg-[#f2efe4]/70 text-[#4d483d]'
                  }`}
                >
                  <div className="mt-0.5">
                    {completed ? (
                      <CheckCircle2 className="w-4.5 h-4.5 text-[#5c6f59] fill-[#f2f4ee]" />
                    ) : (
                      <div className={`w-4.5 h-4.5 rounded-full border-2 flex items-center justify-center text-[9px] font-mono font-bold ${
                        active 
                          ? 'border-[#5c6f59] text-[#5c6f59]' 
                          : 'border-[#d2ccb6] text-[#8a8775]'
                      }`}>
                        {lesson.id}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className={`text-sm font-semibold truncate ${active ? 'text-[#2a2920]' : 'text-[#4d483d]'}`}>
                        {lesson.title.replace(/^\d+\.\s*/, '')}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#7d7768] line-clamp-1 mt-0.5">
                      {lesson.shortDescription}
                    </p>
                  </div>

                  {active && (
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[#5c6f59]">
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Central Workspace (Tab Interface, Lesson presentation, Editor sandbox, Quiz engine) */}
        <main id="core-workspace" className="flex-1 flex flex-col bg-[#faf8f5] min-w-0">
          
          {/* Active Lesson Header Badge */}
          <div className="p-4 sm:p-6 border-b border-[#dad4be] bg-[#f2efe4]/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 bg-[#eae6d8] text-[#4d483d] text-[10px] font-mono font-semibold rounded uppercase tracking-wider">
                  Leçon {currentLesson.id}
                </span>
                {isLessonCompleted(currentLesson.id) && (
                  <span className="px-2.5 py-0.5 bg-[#e6ebe3] text-[#3a4f36] text-[11px] font-medium rounded-full flex items-center gap-1">
                    <BookmarkCheck className="w-3.5 h-3.5" />
                    Leçon Validée !
                  </span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-[#2d2a22] tracking-tight">
                {currentLesson.title}
              </h2>
              <p className="text-sm text-[#7d7768] mt-1">
                {currentLesson.shortDescription}
              </p>
            </div>

            {/* Step navigation pagination */}
            <div className="flex items-center gap-2 justify-end">
              <button 
                onClick={handlePrevLesson}
                disabled={currentLesson.id === 1}
                className="p-1.5 rounded border border-[#dad4be] bg-[#faf9f5] hover:bg-[#f2efe4] text-[#4d483d] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
                title="Leçon précédente"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={handleNextLesson}
                disabled={currentLesson.id === lessonsData.length}
                className="p-1.5 rounded border border-[#dad4be] bg-[#faf9f5] hover:bg-[#f2efe4] text-[#4d483d] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
                title="Leçon suivante"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Workflow Tabs */}
          <div className="flex border-b border-[#dad4be] sticky top-0 bg-[#faf8f5] z-10 px-4">
            <button
              onClick={() => setActiveTab('cours')}
              className={`py-3 px-4 font-semibold text-sm border-b-2 flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeTab === 'cours' 
                  ? 'border-[#5c6f59] text-[#42503d]' 
                  : 'border-transparent text-[#7d7768] hover:text-[#2d2a22]'
              }`}
            >
              <BookOpenText className="w-4 h-4" />
              Leçon Théorique
            </button>
            
            <button
              onClick={() => setActiveTab('sandbox')}
              className={`py-3 px-4 font-semibold text-sm border-b-2 flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeTab === 'sandbox' 
                  ? 'border-[#5c6f59] text-[#42503d]' 
                  : 'border-transparent text-[#7d7768] hover:text-[#2d2a22]'
              }`}
            >
              <Code2 className="w-4 h-4" />
              Atelier Pratique (Sandbox)
            </button>
            
            <button
              onClick={() => setActiveTab('quiz')}
              className={`py-3 px-4 font-semibold text-sm border-b-2 flex items-center gap-1.5 transition-colors cursor-pointer relative ${
                activeTab === 'quiz' 
                  ? 'border-[#5c6f59] text-[#42503d]' 
                  : 'border-transparent text-[#7d7768] hover:text-[#2d2a22]'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              Quiz d'évaluation
              <span className={`absolute top-2 right-1.5 w-2 h-2 rounded-full ${
                isLessonCompleted(currentLesson.id) 
                  ? 'bg-[#5c6f59]' 
                  : 'bg-[#c36a4d]'
              }`} />
            </button>
          </div>

          {/* Panel Display Content Zone */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto min-h-0">
            <AnimatePresence mode="wait">
              {activeTab === 'cours' && (
                <motion.div
                  key="cours-tab"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  {currentLesson.sections.map((section, idx) => (
                    <article key={idx} className="bg-[#faf9f5] p-5 sm:p-6 rounded-xl border border-[#dad4be] natural-glow-card">
                      <h3 className="text-lg md:text-xl font-bold font-display text-[#2d2a22] border-l-4 border-[#5c6f59] pl-3 mb-2">
                        {section.title}
                      </h3>
                      {section.subtitle && (
                        <h4 className="text-xs font-semibold text-[#8da18a] tracking-widest uppercase mb-3 px-3">
                          {section.subtitle}
                        </h4>
                      )}
                      
                      <div className="space-y-3 px-3">
                        {section.paragraphs.map((p, pIdx) => (
                          <p key={pIdx} className="text-[#4d483d] leading-relaxed text-sm antialiased">
                            {p}
                          </p>
                        ))}
                      </div>

                      {section.tips && section.tips.length > 0 && (
                        <div className="mt-4 bg-[#f2f4ee] p-4 rounded-lg border border-[#d2d4c8] ml-3">
                          <h5 className="text-xs font-bold text-[#42503d] mb-1 flex items-center gap-1">
                            <Sparkles className="w-3.5 h-3.5 text-[#5c6f59]" /> Astuces de Senior
                          </h5>
                          <ul className="list-disc pl-4 text-xs text-[#3b4737] space-y-1">
                            {section.tips.map((tip, tIdx) => (
                              <li key={tIdx}>{tip}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {section.keyTakeaway && (
                        <div className="mt-4 bg-[#42503d] text-[#faf9f5] p-4 rounded-lg flex items-start gap-3 ml-3">
                          <Award className="w-5 h-5 text-[#ccd5ae] shrink-0 mt-0.5" />
                          <div>
                            <span className="text-[10px] uppercase font-bold text-[#ccd5ae] tracking-wider">À retenir</span>
                            <p className="text-xs text-[#eae6d8] mt-0.5 leading-relaxed">{section.keyTakeaway}</p>
                          </div>
                        </div>
                      )}
                    </article>
                  ))}

                  {/* Move to Sandbox prompt */}
                  <div className="p-4 bg-[#f2f4ee] rounded-lg border border-[#cbd2c0] flex flex-col sm:flex-row items-center justify-between gap-4 ml-3">
                    <div className="text-xs text-[#2d3829]">
                      <span className="font-bold block">💡 Prochaine étape pédagogique</span>
                      Pour tester vos acquis théoriques, expérimentez directement le code dans notre bac à sable interactif !
                    </div>
                    <button
                      onClick={() => setActiveTab('sandbox')}
                      className="px-4 py-2 bg-[#5c6f59] hover:bg-[#42503d] text-white rounded text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                    >
                      <Code2 className="w-4 h-4" />
                      Aller à l'Atelier
                    </button>
                  </div>
                </motion.div>
              )}

              {activeTab === 'sandbox' && (
                <motion.div
                  key="sandbox-tab"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[450px]"
                >
                  {/* Left Column: Code Editor */}
                  <div className="flex flex-col border border-[#dad4be] rounded-xl overflow-hidden bg-[#1d1f19]">
                    <div className="bg-[#2a2c24] px-4 py-2 flex items-center justify-between border-b border-[#1b1c16]">
                      <span className="text-xs text-[#eae6d8] font-mono font-semibold flex items-center gap-1.5">
                        <Code2 className="w-4 h-4 text-[#8da18a]" />
                        editeur.html
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#5c6f59]" title="Code synchronisé" />
                        <button
                          onClick={handleResetCode}
                          title="Réinitialiser l'exemple"
                          className="p-1 rounded text-[#c3c4bc] hover:text-white hover:bg-[#34372e] transition-all cursor-pointer"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="p-3 bg-[#2a2c24] border-b border-[#1b1c16]">
                      <span className="text-[10px] text-[#ccd5ae] font-bold uppercase tracking-wider block mb-1">🎯 Consigne pratique de l'activité</span>
                      <p className="text-xs text-[#eae6d8] leading-relaxed font-sans">{currentLesson.sandboxInstructions}</p>
                    </div>

                    <textarea
                      value={sandboxCode}
                      onChange={(e) => handleCodeChange(e.target.value)}
                      spellCheck={false}
                      className="flex-1 p-4 font-mono text-xs text-[#f5f2eb] bg-[#1d1f19] resize-none outline-none leading-relaxed border-0 min-h-[200px]"
                      placeholder="Tapez votre code HTML ici..."
                    />

                    <div className="bg-[#171813] px-4 py-1.5 border-t border-[#12130f] text-[10px] text-[#8a887a] font-mono flex items-center justify-between">
                      <span>Lignes : {sandboxCode.split('\n').length}</span>
                      <span>Enregistrement automatique</span>
                    </div>
                  </div>

                  {/* Right Column: Visual Render Preview */}
                  <div className="flex flex-col border border-[#dad4be] rounded-xl overflow-hidden bg-[#fbfbf9]">
                    <div className="bg-[#f2efe4] px-4 py-2 flex items-center justify-between border-b border-[#dad4be]">
                      <span className="text-xs text-[#4d483d] font-semibold flex items-center gap-1.5">
                        <Eye className="w-4 h-4 text-[#7d7768]" />
                        Aperçu visuel en direct (Render)
                      </span>
                      <div className="flex items-center gap-1 text-[11px] text-[#8a8775] font-mono">
                        <Laptop className="w-3 h-3" />
                        IFrame bac à sable
                      </div>
                    </div>

                    <div className="p-3 bg-[#fcfbf9] border-b border-[#dad4be] text-xs text-[#7d7768]">
                      💡 <span className="font-semibold text-[#4d483d]">Explication du code :</span> {currentLesson.codeExplanation}
                    </div>

                    <div className="flex-1 bg-[#fbfbf9] relative p-1 min-h-[200px]">
                      <iframe
                        srcDoc={iframeSrcDoc}
                        title="HTML Dynamic Preview Frame"
                        className="w-full h-full border-0"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'quiz' && (
                <motion.div
                  key="quiz-tab"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="max-w-3xl mx-auto space-y-6"
                >
                  <div className="bg-[#2d2a22] text-[#f5f2eb] p-5 rounded-xl border border-[#1b1a15] flex items-start gap-4 shadow-sm">
                    <HelpCircle className="w-8 h-8 text-[#ccd5ae] shrink-0" />
                    <div>
                      <h3 className="text-md font-bold font-display text-white">Quiz officiel d'évaluation - 5 questions</h3>
                      <p className="text-xs text-[#eae6d8] mt-1 leading-relaxed">
                        Pour valider et déverrouiller définitivement cette leçon, vous devez répondre correctement aux 5 questions ci-dessous de façon exhaustive.
                      </p>
                    </div>
                  </div>

                  {/* Questions Grid Loop */}
                  <div className="space-y-6">
                    {currentLesson.quiz.map((q, qIdx) => {
                      const selectedOpt = selectedAnswers[qIdx];
                      const isCorrect = selectedOpt === q.correctAnswer;
                      const hasValidated = showQuizResults;

                      return (
                        <div 
                          key={q.id} 
                          className={`p-5 sm:p-6 rounded-xl border transition-all natural-glow-card ${
                            hasValidated
                              ? isCorrect
                                ? 'bg-[#e2ebe0]/50 border-[#cbd2c5]'
                                : 'bg-[#fcf5f1]/60 border-[#e8d2c8]'
                              : 'bg-[#faf9f5] border-[#dad4be]'
                          }`}
                        >
                          <div className="flex items-start gap-2.5">
                            <span className="w-6 h-6 rounded-lg bg-[#f2efe4] text-[#42503d] border border-[#dad4be] flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                              Q{qIdx + 1}
                            </span>
                            <div className="flex-1">
                              <h4 className="text-sm sm:text-md font-bold text-[#2d2a22]">
                                {q.question}
                              </h4>
                            </div>
                          </div>

                          {/* Multiple Choice Options */}
                          <div className="mt-4 space-y-2 pl-8">
                            {q.options.map((option, optIdx) => {
                              const isSelected = selectedOpt === optIdx;
                              const isCurrentCorrect = q.correctAnswer === optIdx;
                              
                              let buttonStyles = "hover:bg-[#fcfbf9] border-[#e8e4d4] text-[#4d483d] bg-[#faf9f5]";
                              if (isSelected) {
                                buttonStyles = "bg-[#f2f4ee] border-[#5c6f59] text-[#242e22] font-semibold";
                              }
                              
                              if (hasValidated) {
                                if (isCurrentCorrect) {
                                  buttonStyles = "bg-[#e2ebe0] border-[#5c6f59] text-[#242e22] font-bold";
                                } else if (isSelected && !isCorrect) {
                                  buttonStyles = "bg-[#fdf3ee] border-[#c36a4d] text-[#c36a4d] line-through";
                                } else {
                                  buttonStyles = "opacity-50 border-[#e8e4d4] bg-[#faf9f5]/50 text-[#8a8775]";
                                }
                              }

                              return (
                                <button
                                  key={optIdx}
                                  onClick={() => handleSelectAnswer(qIdx, optIdx)}
                                  disabled={hasValidated && quizPassed}
                                  className={`w-full text-left px-4 py-2.5 rounded-lg border text-xs sm:text-sm transition-all flex items-center justify-between gap-3 ${buttonStyles} ${
                                    hasValidated && quizPassed ? 'cursor-default' : 'cursor-pointer'
                                  }`}
                                >
                                  <span>{option}</span>
                                  <div className="shrink-0">
                                    {hasValidated && isCurrentCorrect && (
                                      <Check className="w-4 h-4 text-[#5c6f59]" />
                                    )}
                                    {hasValidated && isSelected && !isCorrect && (
                                      <X className="w-4 h-4 text-[#c36a4d]" />
                                    )}
                                    {!hasValidated && isSelected && (
                                      <div className="w-2.5 h-2.5 rounded-full bg-[#5c6f59]" />
                                    )}
                                  </div>
                                </button>
                              );
                            })}
                          </div>

                          {/* Explanatory notes showing correct answers details upon validation failure or success */}
                          {hasValidated && (
                            <div className={`mt-3 p-3.5 rounded-lg text-xs flex items-start gap-2.5 ${
                              isCorrect ? 'bg-[#f4f7f2] text-[#34442f] border border-[#d2dccb]' : 'bg-[#fdfcfb] text-[#5c4a40] border border-[#ebdcd4]'
                            }`}>
                              <Sparkles className={`w-4 shrink-0 mt-0.5 ${isCorrect ? 'text-[#5c6f59]' : 'text-[#c36a4d]'}`} />
                              <div>
                                <span className="font-bold">{isCorrect ? 'Correct !' : 'Incorrect.'} Explication : </span>
                                {q.explanation}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Submission and results banner feedback */}
                  <div className="p-6 rounded-xl border border-[#dad4be] bg-[#faf9f5] flex flex-col items-center justify-between gap-6 natural-glow-card">
                    
                    {!showQuizResults ? (
                      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="text-xs text-[#7d7768]">
                          ⚠️ Assurez-vous d’avoir choisi une réponse pour chaque question de l’examen ci-dessus avant de soumettre.
                        </div>
                        <button
                          onClick={handleValidateQuiz}
                          className="px-6 py-3 bg-[#5c6f59] hover:bg-[#42503d] text-white rounded-lg font-semibold text-xs flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                        >
                          <BookmarkCheck className="w-4 h-4" />
                          Soumettre mes réponses
                        </button>
                      </div>
                    ) : (
                      <div className="w-full text-center space-y-4">
                        {quizPassed ? (
                          <div className="p-5 bg-[#f4f7f2] border border-[#cbd2c5] rounded-xl">
                            <h4 className="text-lg font-bold text-[#203a19] flex items-center justify-center gap-1.5 mb-1 animate-pulse">
                              <Award className="w-6 h-6 text-[#5c6f59]" />
                              Félicitations ! Score : 5 / 5
                            </h4>
                            <p className="text-xs text-[#344c2c] leading-relaxed max-w-lg mx-auto">
                              Vous avez répondu avec brio à toutes les questions d'évaluation de la leçon. Cet échelon est maintenant validé et débloqué dans votre progression globale !
                            </p>
                            {currentLesson.id < lessonsData.length ? (
                              <button
                                onClick={handleNextLesson}
                                className="mt-4 px-5 py-2.5 bg-[#5c6f59] hover:bg-[#42503d] text-white rounded-md text-xs font-semibold inline-flex items-center gap-1 cursor-pointer transition-colors"
                              >
                                Passer à la leçon suivante
                                <ChevronRight className="w-4 h-4" />
                              </button>
                            ) : (
                              <div className="mt-4 p-3 bg-[#2d2a22] text-[#f5f2eb] rounded text-xs font-bold font-display max-w-sm mx-auto">
                                🎉 Fantastique ! Vous avez validé la dernière leçon du programme !
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="p-5 bg-[#fefcfb] border border-[#e8dad2] rounded-xl">
                            <h4 className="text-md sm:text-lg font-bold text-[#73351d] flex items-center justify-center gap-1.5 mb-1">
                              ⚠️ Examen Non Validé
                            </h4>
                            <p className="text-xs text-[#8c482d] leading-relaxed max-w-lg mx-auto">
                              Certaines de vos réponses comportent des erreurs théoriques. Relisez attentivement les explications fournies pour chaque question ratée, révisez la fiche de cours et retentez votre chance !
                            </p>
                            <button
                              onClick={() => {
                                setShowQuizResults(false);
                                setQuizValidationTriggered(false);
                              }}
                              className="mt-4 px-5 py-2.5 bg-[#c36a4d] hover:bg-[#a6563c] text-white rounded-md text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer transition-colors"
                            >
                              Recommencer le quiz
                              <RefreshCw className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Persistent Simple Navigation footer */}
          <footer className="border-t border-[#dad4be] px-6 py-4 bg-[#f2efe4]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[11px] text-[#7d7768] font-mono">
              HTMLAcadémie pro-mode • Conçu avec rigueur pédagogique
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevLesson}
                disabled={currentLesson.id === 1}
                className="px-4 py-2 border border-[#dad4be] bg-[#faf9f5] hover:bg-[#f2efe4] text-[#4d483d] rounded text-xs font-medium disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-all flex items-center gap-1"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                Précédent
              </button>
              <button
                onClick={handleNextLesson}
                disabled={currentLesson.id === lessonsData.length}
                className="px-4 py-2 border border-[#dad4be] bg-[#faf9f5] hover:bg-[#f2efe4] text-[#4d483d] rounded text-xs font-medium disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-all flex items-center gap-1"
              >
                Suivant
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </footer>

        </main>
      </div>
    </div>
  );
}
