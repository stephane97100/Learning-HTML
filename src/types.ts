/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index of correct option (0-based)
  explanation: string;
}

export interface LessonSection {
  title: string;
  subtitle?: string;
  paragraphs: string[];
  tips?: string[];
  keyTakeaway?: string;
}

export interface Lesson {
  id: number;
  title: string;
  shortDescription: string;
  sections: LessonSection[];
  codeExample: string;
  codeExplanation: string;
  sandboxInstructions: string;
  quiz: QuizQuestion[];
}

export interface UserProgress {
  completedLessonIds: number[];
  quizScores: Record<number, number>; // lessonId -> score
  currentLessonId: number;
  sandboxCodes: Record<number, string>; // lessonId -> current code in sandbox
}
