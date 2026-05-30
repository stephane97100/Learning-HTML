/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Lesson } from '../types';

export const lessonsData: Lesson[] = [
  {
    id: 1,
    title: "1. Introduction (Le programme)",
    shortDescription: "Plongez dans les fondamentaux du Web, découvrez le rôle du HTML et explorez notre parcours d'apprentissage en 14 étapes.",
    sections: [
      {
        title: "Qu’est-ce que le HTML ?",
        subtitle: "La fondation de toutes les pages web",
        paragraphs: [
          "Le HTML (HyperText Markup Language ou Langage de balisage d'hypertexte) est le langage standard utilisé pour structurer et afficher des pages web. Contrairement aux idées reçues, ce n'est pas un langage de programmation traditionnel car il ne contient pas de logique algorithmique (pas de boucles complexes ou de variables dynamiques de calcul). C'est un langage de description de contenu.",
          "Né au début des années 1990 par Tim Berners-Lee au CERN, son but est de relier des documents à travers le monde entier sous forme de toiles (le fameux World Wide Web)."
        ]
      },
      {
        title: "La triade du Web : HTML, CSS & JavaScript",
        paragraphs: [
          "Pour construire une application ou un site web moderne, trois piliers indispensables collaborent :",
          "1. Le HTML s'occupe de la structure et du sens (les fondations et les murs d'une maison). Il déclare : 'ci-gît un paragraphe, là une image, ici un bouton'.",
          "2. Le CSS (Cascading Style Sheets) gère la présentation visuelle (la peinture, la décoration et l'agencement des fenêtres).",
          "3. Le JavaScript apporte l'interactivité, le dynamisme et le comportement (l'électricité, la plomberie intelligente, la domotique)."
        ]
      },
      {
        title: "Présentation de notre programme pédagogique",
        paragraphs: [
          "Ce parcours progressif et rigoureux a été conçu pour faire de vous un développeur autonome sur la syntaxe HTML5. Voici les 14 étapes que vous allez franchir :",
          "• Les bases indispensables : de l'introduction au système des balises et à la structure minimale d'une page HTML5.",
          "• Le formatage et le contenu : l'art d'ordonner le texte, de gérer les retours à la ligne et les balises dites 'orphelines'.",
          "• L'architecture interne et le lien social : la configuration du Head (le cerveau de votre page) et la mise en place de liens hypertextes.",
          "• Médias et sémantique : l'intégration d'images, de cadres informatifs (iFrames), l'utilisation des balises sémantiques modernes (header, main, section) et des tableaux de données.",
          "• Interactivité et CSS de pointe : la création de formulaires utilisateur complets, le ciblage précis avec les Classes et Identifiants (ID), et la manipulation des caractères spéciaux.",
          "• Validation finale : un zoom sur les standards du W3C pour certifier vos projets."
        ],
        keyTakeaway: "Chaque étape comporte une explication théorique claire, un éditeur de code interactif en temps réel (Sandbox) et un quiz de 5 questions rigoureuses pour tester et valider vos nouvelles compétences."
      }
    ],
    codeExample: `<!-- Bienvenue dans l'éditeur de code HTML ! -->
<div>
  <h1>Bienvenue sur notre guide d'apprentissage HTML</h1>
  <p>Ceci est un exemple simple de code. Modifiez ce texte et observez le rendu en direct à droite !</p>
  <button style="background-color: #6366f1; color: white; border: none; padding: 10px 18px; border-radius: 6px; cursor: pointer; font-weight: 500;">
    Commencer à coder !
  </button>
</div>`,
    codeExplanation: "Cet exemple affiche un titre h1, un paragraphe explicatif p et un bouton stylisé. Cet assemblage d'éléments forme la structure de base ordonnée par votre navigateur.",
    sandboxInstructions: "Modifiez le texte à l'intérieur du paragraphe (<p>...</p>) ou du titre (<h1>...</h1>), changez la couleur du bouton en remplaçant '#6366f1' par une autre couleur (comme 'emerald' ou 'red'), puis validez le quiz pour passer à la suite !",
    quiz: [
      {
        id: 1,
        question: "Que signifie précisément le sigle HTML ?",
        options: [
          "HyperText Makeup Language",
          "HyperText Markup Language",
          "High Tech Markup Language",
          "Helix Textual Medium Link"
        ],
        correctAnswer: 1,
        explanation: "HTML signifie HyperText Markup Language. C'est un langage de balisage descriptif du contenu."
      },
      {
        id: 2,
        question: "Quel est le rôle principal du HTML au sein d'une page web ?",
        options: [
          "Gérer le design interactif, les palettes de couleurs et l'agencement graphique",
          "Créer des calculs complexes et se connecter de façon dynamique à des bases de données",
          "Définir la structure, la sémantique et la hiérarchie du contenu de la page",
          "Compiler des fichiers binaires exécutables par le système d'exploitation du client"
        ],
        correctAnswer: 2,
        explanation: "Le HTML se concentre exclusivement sur l'ossature et le sens de la page. Les styles sont délégués au CSS tandis que la logique est déléguée au JavaScript."
      },
      {
        id: 3,
        question: "Quel langage de programmation associe-t-on par défaut au HTML pour concevoir l'interactivité d'un site web ?",
        options: [
          "C++",
          "SQL",
          "CSS",
          "JavaScript"
        ],
        correctAnswer: 3,
        explanation: "Le JavaScript est le langage de script natif du web qui permet de rendre vos pages interactives, de communiquer avec des API et de modifier le DOM."
      },
      {
        id: 4,
        question: "Le HTML est-il considéré comme un langage de programmation classique ?",
        options: [
          "Oui, car il s'exécute directement sur l'ordinateur de l'utilisateur",
          "Non, c'est un langage de balisage structurel dépourvu d'instructions logiques ou d'algorithmes complexes",
          "Oui, car il possède des boucles logiques natives et des calculs arithmétiques",
          "Non, c'est une simple base de données au format texte brut"
        ],
        correctAnswer: 1,
        explanation: "Le HTML décrit des structures d'éléments visuels et sémantiques. N'ayant pas de structures conditionnelles complexes ou de typage système, c'est un langage de balisage."
      },
      {
        id: 5,
        question: "Quelle méthode pédagogique garantit la validation d'une leçon dans cette application d'apprentissage ?",
        options: [
          "Écrire au moins 100 lignes de code dans la zone d'édition d'un seul coup",
          "Envoyer un e-mail avec un code d'activation",
          "Répondre correctement aux 5 questions du quiz d'évaluation de la leçon",
          " Cliquer plusieurs fois sur le bouton d'aide"
        ],
        correctAnswer: 2,
        explanation: "Répondre correctement aux 5 questions du quiz vous permet de valider officiellement la leçon et de faire progresser votre score général."
      }
    ]
  },
  {
    id: 2,
    title: "2. Le système des balises",
    shortDescription: "Maîtrisez la syntaxe fondamentale du HTML : balises ouvrantes, balises fermantes, imbrication parents-enfants et attributs.",
    sections: [
      {
        title: "La syntaxe d'une balise standard",
        subtitle: "L'instruction de base du navigateur",
        paragraphs: [
          "En HTML, le contenu est englobé par des balises qui indiquent au navigateur de quelle façon le texte doit être interprété. Une balise standard est composée de deux éléments distincts formant une paire :",
          "• Une balise ouvrante : elle commence par le symbole inférieur '<', suivi du nom du tag (ex: 'strong'), et se termine par le symbole supérieur '>'. Exemple : <strong>.",
          "• Une balise fermante : identique à la balise ouvrante mais elle est impérativement précédée d'un caractère de barre oblique ou slash '/' avant le nom du tag. Exemple : </strong>.",
          "Le texte placé au milieu de la balise ouvrante et de la balise fermante subira l'effet ou prendra le sens sémantique défini par la balise."
        ]
      },
      {
        title: "Relation Parents-Enfants & Imbrication",
        paragraphs: [
          "Le code HTML ressemble à un arbre généalogique. On parle de relation parent-enfant lorsque des balises sont imbriquées de manière hiérarchique :",
          "Une règle d'or universelle régit l'imbrication des balises : la dernière balise ouverte doit être la première balise fermée (structure de pile LIFO - Last In, First Out).",
          "Exemple correct : <p>Lisez ce message <strong>important</strong>.</p>",
          "Exemple incorrect : <p>Lisez ce message <strong>important.</p></strong>. Ce type de décalage désoriente le parseur du navigateur et peut casser la mise en page."
        ]
      },
      {
        title: "Le rôle crucial des attributs",
        paragraphs: [
          "Les attributs fournissent des paramètres additionnels ou des configurations particulières à une balise. Ils s'écrivent exclusivement à l'intérieur de la balise ouvrante, après le nom du tag (séparés par un espace).",
          "La syntaxe standard d'un attribut s'effectue sous forme de couple clé/valeur : nom_attribut=\"valeur\".",
          "Exemple phare dans la balise lien <a> : <a href=\"https://google.com\">Aller sur Google</a>. L'attribut est 'href' et sa valeur est l'URL de destination. Nous étudierons ces attributs en détail dans les chapitres suivants."
        ],
        keyTakeaway: "Un attribut complet se positionne uniquement dans la balise ouvrante et sa valeur doit idéalement être entourée de guillemets doubles."
      }
    ],
    codeExample: `<p>
  Cet exemple montre des éléments <strong style="color: #6366f1;">imbriqués</strong> de façon correcte. 
  Le parent est la balise <strong>p</strong>, tandis que son enfant est la balise <strong>strong</strong>.
</p>`,
    codeExplanation: "Ici, 'p' est la balise parente du paragraphe de texte complet, et 'strong' est son enfant (servant à forcer la coloration du texte et l'importance sémantique de l'élément).",
    sandboxInstructions: "Essayez d'ajouter un nouvel élément enfant à l'intérieur du paragraphe. Par exemple, entourez un autre mot avec les balises <em> et </em> et regardez l'effet de mise en italique appliqué à droite !",
    quiz: [
      {
        id: 1,
        question: "À quel emplacement exact doit-on écrire un attribut de balise HTML ?",
        options: [
          "À l'intérieur de la balise fermante uniquement, juste avant le chevron '>'",
          "À l'intérieur de la balise ouvrante uniquement, après le nom du tag",
          "Il doit être écrit au milieu, entre le contenu textuel et la balise de fin",
          "Dans une balise autonome d'en-tête séparée"
        ],
        correctAnswer: 1,
        explanation: "Les attributs s'écrivent exclusivement dans la balise ouvrante du tag HTML pour configurer ses propriétés initiales."
      },
      {
        id: 2,
        question: "Quelle syntaxe d'attribut respecte parfaitement le standard HTML5 ?",
        options: [
          "href: https://google.com",
          "href = (https://google.com)",
          "href=\"https://google.com\"",
          "href == https://google.com"
        ],
        correctAnswer: 2,
        explanation: "La syntaxe officielle est clé=\"valeur\", avec les valeurs encadrées par des guillemets doubles et liées par le signe égal sans espace."
      },
      {
        id: 3,
        question: "Lequel de ces exemples respecte scrupuleusement la règle d'or de l'imbrication parents/enfants ?",
        options: [
          "<div><p>Texte et <strong>formatage</p></strong></div>",
          "<div><p>Texte et <strong>formatage</strong></p></div>",
          "<div><p>Texte et <strong>formatage</div></strong></p>",
          "<div><p>Texte et <strong>formatage</strong></div></p>"
        ],
        correctAnswer: 1,
        explanation: "L'avant-dernier tag ouvert 'strong' doit être fermé avant le tag parent 'p', qui lui-même doit être fermé avant le super-parent 'div'. C'est le principe du 'dernier ouvert, premier fermé' (LIFO)."
      },
      {
        id: 4,
        question: "Par quelle marque graphique débute toujours une balise de fermeture en HTML ?",
        options: [
          "Un point d'exclamation après le symbole inférieur, comme : '<!'",
          "Une barre oblique ou slash après le symbole inférieur, comme : '</'",
          "Une esperluette ou un antislash, comme : '<\\'",
          "Deux chevrons successifs ouvrants, comme : '<<'"
        ],
        correctAnswer: 1,
        explanation: "Une balise fermante contient toujours une barre oblique (/) avant le nom de l'élément, par exemple : </p> ou </div>."
      },
      {
        id: 5,
        question: "Est-il syntaxiquement possible de donner le même nom à un parent et son propre enfant ?",
        options: [
          "Absolument, par exemple en imbriquant un <div> dans un autre <div>",
          "Non, c'est formellement interdit et produit une erreur critique du navigateur",
          "Seulement si le parent est une balise de titre h1",
          "Uniquement pour les listes d'images spéciales"
        ],
        correctAnswer: 0,
        explanation: "Oui, il est extrêmement fréquent d'imbriquer des conteneurs de même type, comme des <div> à l'intérieur d'autres <div> pour structurer des espaces et éléments graphiques complexes."
      }
    ]
  },
  {
    id: 3,
    title: "3. La structure minimale & le Body",
    shortDescription: "Découvrez le squelette standard requis pour toute page web valide et les outils fondamentaux d'écriture : paragraphes et structures de titres.",
    sections: [
      {
        title: "Le squelette universel d'une page HTML5",
        subtitle: "L'art de configurer un document vierge",
        paragraphs: [
          "Chaque document HTML doit comporter une structure minimale pour que les navigateurs interpretent correctement le code. Voici l'explication ligne après ligne du squelette standard :",
          "1. <!DOCTYPE html> : C'est la déclaration du type de document (doctype). Elle avertit le navigateur qu'il s'agit d'une page codée en HTML5 moderne.",
          "2. <html lang=\"fr\"> : C'est la racine indispensable de l'arbre HTML. L'attribut lang définit la langue principale pour l'accessibilité (synthèses vocales) et les moteurs de recherche.",
          "3. <head> : Contient les métadonnées de configuration invisible pour l'internaute (titre de l'onglet, encodage des caractères, feuilles de style CSS). Nous y dédierons le chapitre 6.",
          "4. <body> : C'est le corps physique du site web. Tout ce qui s'y trouve s'affiche directement sur l'écran pour l'utilisateur final."
        ]
      },
      {
        title: "La sémantique des Titres (h1 à h6)",
        paragraphs: [
          "Le HTML fournit 6 niveaux de titres, de <h1> (titre principal) jusqu'à <h6> (titre de niveau le plus bas).",
          "Ces titres ne servent pas simplement à agrandir la police d'un texte ! Ils établissent l'indexation de votre document. Le titre de niveau <h1> est unique à l'échelle d'une page : il décrit le sujet central. Les <h2> représentent les sous-parties, les <h3> des sections intérieures, etc.",
          "Conseil de senior : Ne sautez jamais arbitrairement un niveau de titre (ex: passer d'un <h1> directement à un <h3> pour de simples questions de taille de texte), car cela perturbe les outils d'accessibilité et pénalise votre visibilité SEO."
        ]
      },
      {
        title: "L'élément de paragraphe : p",
        paragraphs: [
          "Pour rédiger le contenu courant (textes longs, descriptions), on utilise la balise de paragraphe <p>.",
          "Le navigateur traite par défaut l'élément paragraphe comme un bloc de texte. Il saute automatiquement une petite ligne de marge par rapport aux éléments situés avant ou après, créant une aération visuelle propre."
        ],
        keyTakeaway: "Un document HTML5 propre possède une balise html racine contenant exactement un pavé head puis un pavé body."
      }
    ],
    codeExample: `<!DOCTYPE html>
<html lang="fr">
<head>
  <title>Ma Première Page Web</title>
</head>
<body>
  <h1>Le Grand Titre Unique (H1)</h1>
  <p>Ceci est l'introduction écrite sous forme d'un paragraphe standard.</p>
  
  <h2>Un sous-titre de niveau supérieur (H2)</h2>
  <p>Une nouvelle explication s'insère ici pour aérer l'affichage.</p>
</body>
</html>`,
    codeExplanation: "Ici, nous reproduisons l'ossature d'un document réel. Le 'head' déclare le titre du document, tandis que le 'body' affiche un h1, un h2 et deux paragraphes distincts.",
    sandboxInstructions: "Essayez de modifier la hiérarchie des titres : remplacez l'un des titres par un <h3> ou ajoutez un nouveau titre <h4> à la suite d'un paragraphe pour vous familiariser avec le rendu visuel décroissant.",
    quiz: [
      {
        id: 1,
        question: "Quelle déclaration doit impérativement précéder tout le code dans un fichier HTML5 ?",
        options: [
          "<html>",
          "<!DOCTYPE html>",
          "<head>",
          "<?xml version=\"1.0\"?>"
        ],
        correctAnswer: 1,
        explanation: "La déclaration <!DOCTYPE html> placée au tout début du fichier informe le navigateur qu'il s'agit d'un document HTML5 qui doit être parsé avec le rendu de standards modernes."
      },
      {
        id: 2,
        question: "Quelle partie du document regroupe tous les éléments visibles à l'écran pour l'internaute ?",
        options: [
          "La balise <head>",
          "La balise <body>",
          "L'élément <meta>",
          "Le bloc externe <!DOCTYPE>"
        ],
        correctAnswer: 1,
        explanation: "Le corps <body> accueille l'ensemble du contenu interactif, textuel et visuel projeté aux utilisateurs du navigateur."
      },
      {
        id: 3,
        question: "Combien de niveaux de titres sémantiques normalisés le langage HTML comporte-t-il ?",
        options: [
          "3 niveaux distincts (h1 à h3)",
          "5 niveaux distincts (h1 à h5)",
          "6 niveaux distincts (h1 à h6)",
          "10 niveaux distincts (h1 à h10)"
        ],
        correctAnswer: 2,
        explanation: "Le HTML5 propose exactement six niveaux de titres, de la balise <h1> (principale) à la balise <h6> (secondaire)."
      },
      {
        id: 4,
        question: "Quelle pratique concernant la hiérarchie des titres (h1 à h6) est fortement recommandée en SEO ?",
        options: [
          "Utiliser au moins dix fois la balise h1 sur une même page pour booster le trafic",
          "Passer directement de h1 à h4 pour créer des effets de mise en forme intéressants sans utiliser de CSS",
          "Garantir une progression logique des titres (h1 suivi de h2, puis h3 si partie intérieure) de façon imbriquée",
          "Remplacer tous les titres par des balises de paragraphe simples mises en gras"
        ],
        correctAnswer: 2,
        explanation: "La cohérence sémantique impose de ne pas briser la hiérarchie : chaque niveau doit correspondre logiquement à un niveau de sous-partie de niveau immédiatement supérieur."
      },
      {
        id: 5,
        question: "Comment le navigateur met-il en page par défaut les balises de paragraphe `<p>` ?",
        options: [
          "Il met tout le texte en italique gras sur une seule ligne continue",
          "Il crée un saut de ligne automatique et applique des marges verticales d'aération",
          "Il l'affiche à l'intérieur d'un encadré rouge clignotant",
          "Il le traite comme un élément inline qui se place juste à la suite du mot précédent sans aucun saut"
        ],
        correctAnswer: 1,
        explanation: "Le tag `<p>` est un élément natif de niveau 'bloc', ce qui force un retour à la ligne automatique et l'application d'un espacement vertical standard pour aérer la lecture."
      }
    ]
  },
  {
    id: 4,
    title: "4. Le texte et son formatage",
    shortDescription: "Apprenez à structurer l'information textuelle : mettre en valeur les mots importants et organiser des données en listes ordonnées ou non.",
    sections: [
      {
        title: "Gras et Italique : Balises Visuelles vs Sémantiques",
        subtitle: "L'importance historique et l'évolution moderne",
        paragraphs: [
          "Aux balbutiements du web, on utilisait les balises <b> (bold) pour le gras et <i> (italic) pour l'italique simple. Bien que toujours acceptées par les navigateurs, elles sont aujourd'hui supplantées par des balise sémantiques plus fortes :",
          "• <strong> : remplace l'écriture <b>. Elle met le texte en gras ET surtout, elle indique aux robots d'indexation et lecteurs d'écran pour personnes malvoyantes que ce contenu revêt une importance cruciale.",
          "• <em> (emphasis) : remplace la balise <i>. Elle penche le texte en italique ET indique qu'une emphase s'applique sur le mot ou l'expression, changeant potentiellement le sens de la phrase."
        ]
      },
      {
        title: "Les Listes non-ordonnées (à puces)",
        paragraphs: [
          "Pour lister des éléments sans notion de priorité ou d'ordre chronologique, on utilise une liste non-ordonnée.",
          "La structure de liste fonctionne obligatoirement par assemblage de deux types de balises :",
          "1. La balise parente <ul> (Unordered List) : elle délimite la zone globale de la liste.",
          "2. Les balises enfants <li> (List Item) : chaque ligne ou élément de la liste s'écrit obligatoirement au sein d'une balise <li>."
        ]
      },
      {
        title: "Les Listes ordonnées (numérotées)",
        paragraphs: [
          "Si l'ordre joue un rôle déterminant (étapes d'une recette de cuisine, classement, guide étape par étape), on utilise la liste ordonnée.",
          "La structure utilise la balise parente <ol> (Ordered List), et conserve d'identiques éléments enfants <li>.",
          "Le navigateur génère par conséquent la numérotation automatique (1, 2, 3...) de manière intelligente."
        ],
        keyTakeaway: "Une balise <li> ne doit jamais être écrite de manière isolée ; elle requiert systématiquement le patronage d'un parent direct <ul> ou <ol>."
      }
    ],
    codeExample: `<div>
  <p>Ce guide est <strong>absolument indispensable</strong> pour réussir.</p>
  <p>Voici les trois étapes clés de votre progression :</p>
  
  <ol>
    <li>Assimiler la théorie</li>
    <li>Pratiquer dans l'éditeur de code</li>
    <li>Valider les <em>compétences</em></li>
  </ol>
</div>`,
    codeExplanation: "Nous combinons ici des balises sémantiques de texte fort (strong et em), de pair avec une liste ordonnée (ol / li) énumérant les étapes de travail.",
    sandboxInstructions: "Modifiez l'exemple en transformant la liste ordonnée (<ol>...</ol>) en une liste à puces simple (<ul>...</ul>) et découvrez le changement instantané des puces numériques en ronds noirs ordinaires.",
    quiz: [
      {
        id: 1,
        question: "Quelle balise est aujourd'hui préconisée pour mettre en gras un élément en lui conférant une importance sémantique ?",
        options: [
          "<b>",
          "<bold>",
          "<strong>",
          "<important>"
        ],
        correctAnswer: 2,
        explanation: "La balise <strong> définit une emphase forte du contenu pour le SEO et l'accessibilité, tout en appliquant par défaut une graisse grasse en CSS."
      },
      {
        id: 2,
        question: "Que signifie sémantiquement la balise de formatage `<em>` ?",
        options: [
          "Elle définit un texte souligné d'un trait continu",
          "Elle applique une emphase textuelle, représentée par défaut par de l'italique",
          "Elle fait défiler un mot au milieu de la ligne",
          "Elle génère une formule e-mail à cliquer"
        ],
        correctAnswer: 1,
        explanation: "La balise <em> (emphasis) applique une déviation sémantique et penche le texte en italique pour mettre en valeur un mot particulier."
      },
      {
        id: 3,
        question: "De quel terme anglais l'élément de liste `<li>` est-il le diminutif officiel ?",
        options: [
          "Link Item",
          "List Item",
          "Line Index",
          "Literal Indicator"
        ],
        correctAnswer: 1,
        explanation: "<li> signifie 'List Item' (élément de liste). Elle accueille chaque point ou ligne d'une liste structurée."
      },
      {
        id: 4,
        question: "Par quel conteneur parent doit-on délimiter une liste dont les lignes doivent comporter des numéros automatiques (1., 2., 3...) ?",
        options: [
          "La balise <ul>",
          "La balise <ol>",
          "La balise <list>",
          "La balise <dl>"
        ],
        correctAnswer: 1,
        explanation: "<ol> signifie 'Ordered List'. Elle gère automatiquement la numérotation progressive de ses éléments enfants li."
      },
      {
        id: 5,
        question: "Est-il valide de placer directement du texte libre dans un élément `<ol>` sans utiliser de balise `<li>` ?",
        options: [
          "Oui, le navigateur créera de lui-même la ligne numérotée correspondante",
          "Non, c'est syntaxiquement incorrect car seuls les éléments <li> sont autorisés directement sous <ol> ou <ul>",
          "Seulement si l'attribut type de la liste est réglé sur 'A'",
          "Oui, à condition de mettre le texte en gras fort"
        ],
        correctAnswer: 1,
        explanation: "Tous les contenus insérés dans une liste ordonnée ou non doivent obligatoirement être enfermés dans des balises enfants <li>."
      }
    ]
  },
  {
    id: 5,
    title: "5. Les balises \"Orphelines\"",
    shortDescription: "Comprenez le comportement et l'utilité des éléments autonomes n'exigeant pas de balise de fermeture.",
    sections: [
      {
        title: "Qu’est-ce qu’une balise orpheline (ou vide) ?",
        subtitle: "L'exception qui confirme la règle du binôme de tags",
        paragraphs: [
          "Jusqu'à maintenant, vous avez appris que les éléments HTML fonctionnaient par paire (ouverture et fermeture, comme <p>...</p>). Toutefois, certains concepts n'ont pas de texte intermédiaire à englober.",
          "Les balises orphelines sont des balises autonomes qui effectuent une action visuelle ou une insertion de fichier à un endroit précis. Elles s'autodéclarent en une seule instruction.",
          "En HTML5, on les écrit simplement sans balise fermante dédiée. L'ancienne norme XHTML exigeait l'ajout d'une barre oblique finale (comme <br />), ce qui reste valide et toléré, mais n'est plus requis."
        ]
      },
      {
        title: "Les Balises Orphelines Historiques de Base",
        paragraphs: [
          "• <br> (Break Line) : Provoque un retour à la ligne immédiat à l'intérieur d'un paragraphe ou d'un flux textuel sans générer un changement de paragraphe.",
          "• <hr> (Horizontal Rule) : Trace une barre horizontale de séparation pour démarquer un changement thématique du contenu.",
          "• <img> : Intègre une ressource d'image fixe ou animée (nous l'aborderons spécifiquement au chapitre 8). Elle s'appuie obligatoirement sur l'attribut d'adresse 'src' et d'alternative textuelle 'alt'."
        ]
      },
      {
        title: "Règle absolue sur les balises de fermeture",
        paragraphs: [
          "La pire erreur qu'un junior puisse réaliser est d'écrire </br> ou </img> par habitude. Ces écritures sont incorrectes.",
          "N'insérez jamais de texte directement à l'intérieur d'une balise orpheline. Par exemple, <br>Texte</br> n'a aucun sens fonctionnel."
        ],
        keyTakeaway: "Une balise vide s'insère à la manière d'un point de ponctuation au milieu de votre code."
      }
    ],
    codeExample: `<p>Premier paragraphe de texte détaillé.<br>
Un retour à la ligne forcé a été inséré immédiatement au-dessus.</p>

<hr>

<p>Voici un deuxième paragraphe à la suite d'une de séparation horizontale.</p>`,
    codeExplanation: "Ce code utilise un retour à la ligne 'br' au milieu du premier paragraphe de texte, puis insère une ligne horizontale 'hr' assurant la délimitation claire des paragraphes.",
    sandboxInstructions: "Supprimez la balise <hr> ou modifiez l'emplacement du <br>, puis observez comment la page s'agence instantanément de façon différente.",
    quiz: [
      {
        id: 1,
        question: "Qu'est-ce qu'une balise 'orpheline' ou 'vide' en HTML ?",
        options: [
          "Une balise dont le contenu a été supprimé par l'hébergement serveur",
          "Une balise autonome qui s'écrit en un seul élément et ne possède pas de tag de fermeture",
          "Une balise qui ne nécessite aucun attribut pour s'exécuter dans le navigateur",
          "Un tag réservé exclusivement à l'insertion d'images d'arrière-plan"
        ],
        correctAnswer: 1,
        explanation: "Une balise orpheline s'autodéclare et n'a pas besoin de binôme ouvrante/fermante pour fonctionner car elle n'englobe pas de texte."
      },
      {
        id: 2,
        question: "Quelle écriture de retour à la ligne forcée représente une grave erreur de syntaxe ?",
        options: [
          "<br>",
          "<br />",
          "</br>",
          "Toutes les options ci-dessus sont des erreurs sémantiques"
        ],
        correctAnswer: 2,
        explanation: "</br> est une syntaxe aberrante car le tag de rupture de ligne n'est pas un tag à paire. En revanche, <br> (HTML5) et <br /> (XHTML) sont tout à fait conformes."
      },
      {
        id: 3,
        question: "À quoi sert principalement la balise orpheline `<hr>` ?",
        options: [
          "À insérer un en-tête de page web imposant",
          "À tracer une ligne de rupture horizontale pour marquer une transition ou une séparation thématique",
          "À configurer l'arrière-plan avec un dégrade horizontal de styles",
          "À relier une feuille de style au document HTML"
        ],
        correctAnswer: 1,
        explanation: "L'élément <hr> (Horizontal Rule) matérialise une ligne fine horizontale qui sert de séparateur logique entre deux sections."
      },
      {
        id: 4,
        question: "Est-il requis d'ajouter une barre oblique de fermeture (comme `<br />`) en HTML5 ?",
        options: [
          "Oui, sans cela la page générera une interruption d'affichage critique",
          "Non, c'est purement optionnel en HTML5, la balise `<br>` simple est la norme standard recommandée",
          "Oui, uniquement sur le navigateur Google Chrome",
          "Seulement si la balise est située dans l'élément Head"
        ],
        correctAnswer: 1,
        explanation: "Bien que l'écriture fermée `<br />` soit tolérée par souci de rétrocompatibilité, les normes HTML5 recommandent la forme simplifiée `<br>`."
      },
      {
        id: 5,
        question: "Parmi ces éléments de structure, lequel est une balise orpheline ?",
        options: [
          "<p>",
          "<h1>",
          "<img>",
          "<ul>"
        ],
        correctAnswer: 2,
        explanation: "La balise `<img>` est orpheline car elle charge une ressource externe par le biais d'un attribut de source mais ne contient pas de texte propre."
      }
    ]
  },
  {
    id: 6,
    title: "6. Le Head & les Métadonnées",
    shortDescription: "Plongez dans les coulisses logiques de votre page web : l'onglet du navigateur, les encodages et le responsive mobile.",
    sections: [
      {
        title: "La notion d’en-tête (Head)",
        subtitle: "L'intelligence non-visuelle de votre code",
        paragraphs: [
          "Toute la structure visible de notre page vit dans le <body>. Mais où se configurent les paramètres internes ? C'est le rôle exclusif de l'élément <head>.",
          "Le <head> est logé tout en haut du document, entre <html> et <body>. Les informations qu'il contient ne s'affichent pas à l'écran : ce sont des instructions destinées au navigateur, aux robots de référencement de Google, ou aux plateformes de réseaux sociaux (OpenGraph)."
        ]
      },
      {
        title: "Les Balises Majeures du Head",
        paragraphs: [
          "• <title> : D’une importance monumentale, elle définit le texte inscrit sur l'onglet du navigateur web et la ligne de titre affichée dans vos résultats de recherche Google.",
          "• <meta charset=\"UTF-8\"> : Indique le codage universel des caractères. Sans elle, vos accents français (é, à, ç) s'afficheront sous forme de caractères bizarres ou corrompus.",
          "• <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> : Indique au mobile de respecter la largeur d'écran réelle et d'interdire un affichage miniature illisible. C’est la clé de voûte des sites responsives.",
          "• <link rel=\"icon\" href=\"favicon.ico\"> : Permet d'attacher un favicon, cette petite icône visible à côté du nom de l'onglet."
        ]
      },
      {
        title: "Lier des fichiers annexes",
        paragraphs: [
          "Le <head> sert également à importer des ressources distantes ou locales :",
          "• Liaison CSS : <link rel=\"stylesheet\" href=\"style.css\">.",
          "• Liaison Javascript : <script src=\"script.js\"></script> (qu'on peut aussi optionnellement placer en fin de body pour optimiser le chargement)."
        ],
        keyTakeaway: "Un document HTML5 valide ne peut posséder qu'une seule et unique zone head par fichier."
      }
    ],
    codeExample: `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Le Cerveau de la Page</title>
</head>
<body>
  <h1>Contenu affiché à l'écran</h1>
  <p>L'en-tête "head" au-dessus configure l'encodage correct pour les accents : é, œ, à !</p>
</body>
</html>`,
    codeExplanation: "Ici, on constate l'isolement entre les paramètres logiques du head (charset, viewport, title) et l'espace de projection visuelle du body.",
    sandboxInstructions: "Essayez de modifier la valeur présente dans l'élément <title> et observez à quel point cette métadonnée ne s'immisce jamais visuellement dans le corps du document blanc ci-contre.",
    quiz: [
      {
        id: 1,
        question: "À quel emplacement se positionne sémantiquement l'élément `<head>` dans un code HTML standard ?",
        options: [
          "À la toute fin du document, juste après la fermeture de la balise </html>",
          "Entre la balise ouvrante <html> et la balise ouvrante <body>",
          "À l'intérieur de la balise de paragraphe principale pour l'aérer",
          "Il remplace le body en fonction de l'affichage sur mobile"
        ],
        correctAnswer: 1,
        explanation: "L'en-tête du document, encadré par `<head>`, s'intercale exactement sous la balise racine `<html>` et avant l'ouverture du `<body>`."
      },
      {
        id: 2,
        question: "Quel rôle joue l'élément `<title>` situé dans le Head de votre document ?",
        options: [
          "Il génère le titre visible de premier niveau <h1> au centre de l'écran",
          "Il détermine l'adresse URL absolue pour héberger le projet sur le serveur",
          "Il configure le texte visible dans l'onglet du navigateur et les résultats de moteurs de recherche",
          "Il force le texte à s'afficher en caractères gras dans tous les navigateurs"
        ],
        correctAnswer: 2,
        explanation: "L'élément `<title>` donne son nom officiel à l'onglet du navigateur et constitue le titre du lien affiché par Google dans ses résultats."
      },
      {
        id: 3,
        question: "Quelle ligne de commande permet de s'assurer du bon traitement des accents français ?",
        options: [
          "<meta encoding=\"accent-french\">",
          "<meta charset=\"UTF-8\">",
          "<meta accent=\"true\">",
          "<link rel=\"charset\" href=\"utf8\">"
        ],
        correctAnswer: 1,
        explanation: "La balise d'encodage universelle `<meta charset=\"UTF-8\">` couvre la quasi-totalité des glyphes et alphabets mondiaux pour prémunir du bug d'accents."
      },
      {
        id: 4,
        question: "À quel type d'utilité répond la métadonnée viewport dans vos configurations ?",
        options: [
          "Elle permet d'insérer un tableau de données structurées directement dans l'entête",
          "Elle est indispensable pour adapter correctement les dimensions du document aux écrans mobiles (responsive)",
          "Elle permet de charger des images découpées",
          "Elle configure la connexion LDAP à la base de données"
        ],
        correctAnswer: 1,
        explanation: "Le viewport communique au navigateur mobile des métadonnées pour calibrer l'échelle de l'affichage à la largeur de l'appareil."
      },
      {
        id: 5,
        question: "Quel élément utilise-t-on traditionnellement pour lier une feuille de style CSS externe au HTML ?",
        options: [
          "<style href=\"theme.css\">",
          "<link rel=\"stylesheet\" href=\"theme.css\">",
          "<meta css=\"theme.css\">",
          "<script src=\"theme.css\">"
        ],
        correctAnswer: 1,
        explanation: "La balise d'association `<link>` configurée avec l'attribut `rel=\"stylesheet\"` raccorde proprement le canevas de style externe CSS au document."
      }
    ]
  },
  {
    id: 7,
    title: "7. Les liens hypertextes",
    shortDescription: "La fondation du World Wide Web. Apprenez à connecter vos documents entre eux et vers l'extérieur.",
    sections: [
      {
        title: "La balise a (Anchor) & l’attribut href",
        subtitle: "Comment tisser la grande toile du Web",
        paragraphs: [
          "Sans lien hypertexte, le web ne serait qu'un ensemble de fichiers texte plats et déconnectés. Le lien hypertexte permet à un utilisateur de naviguer en un clic d'une page à une autre.",
          "Pour créer un lien, on utilise la balise à paire <a> (Anchor / Ancre). Elle s'appuie obligatoirement sur l'attribut majeur 'href' (Hypertext Reference) spécifiant l'URL de la destination.",
          "Exemple : <a href=\"https://wikipedia.org\">Consulter Wikipédia</a>. Le texte entre les balises sera affiché sous forme soulignée et colorée par défaut (bleu ou violet)."
        ]
      },
      {
        title: "Liens internes, externes et cibles",
        paragraphs: [
          "Nous classons les liens hypertextes en deux grandes catégories :",
          "• Les liens externes : pointant vers une ressource située sur un autre nom de domaine (comme https://wikipedia.org).",
          "• Les liens internes : pour changer de page sur son propre serveur (ex: <a href=\"contact.html\">Contactez-nous</a>), ou pour se déplacer vers un point précis de la page courante grâce aux ancres (ex: <a href=\"#chapitre4\">Sauter au chapitre 4</a>, nécessitant un élément possédant l'attribut id=\"chapitre4\")."
        ]
      },
      {
        title: "L'attribut target et l'ouverture d'onglet",
        paragraphs: [
          "Par défaut, le navigateur remplace la page active par le nouveau document. Si vous désirez conserver votre site ouvert et ouvrir le lien dans un onglet flambant neuf, utilisez le paramètre d’attribut target :",
          "Exemple : <a href=\"https://google.com\" target=\"_blank\">Ouvrir Google à part</a>.",
          "Note de sécurité de senior : Utiliser `target=\"_blank\"` invite de bonnes pratiques de sécurité, notamment l'attribut `rel=\"noopener noreferrer\"` pour éviter que la nouvelle page externe n'accède au processus de votre propre application."
        ],
        keyTakeaway: "Un lien sans attribut href ne réagira pas aux clics de navigation."
      }
    ],
    codeExample: `<div>
  <p>Consultez les moteurs indispensables de la recherche :</p>
  <ul>
    <li><a href="https://www.google.fr" target="_blank" rel="noopener">Consulter Google (nouvel onglet)</a></li>
    <li><a href="#bas-de-page">Sauter directement au bas de cette boite</a></li>
  </ul>
  
  <div style="margin-top: 150px;" id="bas-de-page">
    <p>Vous êtes arrivé à l'ancre de destination (bas-de-page) !</p>
  </div>
</div>`,
    codeExplanation: "Nous démontrons ici la mise en œuvre d'un lien sortant configuré pour s'ouvrir dans un nouvel onglet, ainsi qu'une ancre interne pointant sur l'id id=\"bas-de-page\".",
    sandboxInstructions: "Modifiez l'URL de l'un des href ou créez un lien pointant vers l'un de vos portails d'informations favoris pour voir comment l'outil d'exécution réagit.",
    quiz: [
      {
        id: 1,
        question: "De quel terme technique la balise `<a>` est-elle l'abréviation réglementaire ?",
        options: [
          "Address (Adresse d'hébergement)",
          "Anchor (Ancre sémantique)",
          "Assembly (Assemblage de fichiers)",
          "Action (Déclenchement d'événement)"
        ],
        correctAnswer: 1,
        explanation: "La balise `<a>` représente le mot 'Anchor' (ancre), un point de raccord d'où se déploie une référence d'hypertexte."
      },
      {
        id: 2,
        question: "Quel attribut est rigoureusement indispensable pour déterminer la cible d'un lien hypertexte ?",
        options: [
          "src",
          "link",
          "href",
          "target"
        ],
        correctAnswer: 2,
        explanation: "L'attribut `href` (Hypertext Reference) reçoit la valeur d'URL ou de fichier qui cible l'action de navigation."
      },
      {
        id: 3,
        question: "Que produit concrètement l'ajout de l'attribut `target=\"_blank\"` sur une balise de lien ?",
        options: [
          "Il masque entièrement le lien pour les internautes ordinaires",
          "Il force le navigateur à ouvrir la page ciblée dans un nouvel onglet ou fenêtre à part",
          "Il efface l'historique de recherche réseau",
          "Il télécharge automatiquement le fichier sans l'ouvrir"
        ],
        correctAnswer: 1,
        explanation: "L'attribut `target=\"_blank\"` dicte au navigateur d'initier un onglet neuf indépendant pour consulter la ressource pointée."
      },
      {
        id: 4,
        question: "Comment écrit-on l'adresse href pour créer un lien interne reliant une partie de la même page possédant l'identifiant 'faq' ?",
        options: [
          "href=\"id:faq\"",
          "href=\"/faq\"",
          "href=\"#faq\"",
          "href=\"@faq\""
        ],
        correctAnswer: 2,
        explanation: "Le symbole dièse `#` préfixe l'adresse cible pour symboliser un ancrage à destination d'une balise porteuse de l'attribut id correspondant."
      },
      {
        id: 5,
        question: "Quelle valeur de relation de sécurité s'associe idéalement à un lien configuré avec target=\"_blank\" ?",
        options: [
          "rel=\"noopener noreferrer\"",
          "rel=\"securelink\"",
          "rel=\"author\"",
          "rel=\"external-no-js\""
        ],
        correctAnswer: 0,
        explanation: "`rel=\"noopener noreferrer\"` prévient d’une faille d'ingénierie inversée en empêchant l'onglet ouvert de manipuler la fenêtre d'origine."
      }
    ]
  },
  {
    id: 8,
    title: "8. Images & Multimédia",
    shortDescription: "Enrichissez l'expérience utilisateur : apprenez à insérer proprement des visuels vectoriels et à embarquer des contenus d'autres sites.",
    sections: [
      {
        title: "La balise img : Charger un fichier image",
        subtitle: "L'optimisation visuelle et l'accessibilité",
        paragraphs: [
          "L'incorporation de visuels (JPEG, PNG, SVG, WebP, GIF) s'effectue via l'élément orphelin <img>.",
          "Pour afficher une image, la balise emploie deux attributs fondamentaux de manière systématique :",
          "• src (Source) : Le lien absolu (sur le web) ou relatif (sur votre disque) qui mène au fichier graphique.",
          "• alt (Alternative Textuelle) : Une phrase synthétique décrivant ce qu'illustre l'image. Si la connexion flanche ou que l'utilisateur est malvoyant (utilisation d'un lecteur d'écran), ce texte se substitue à l'image."
        ]
      },
      {
        title: "Taille de l'image et formatage correct",
        paragraphs: [
          "Il est recommandé de renseigner les attributs width et height pour réserver l'espace visuel d'origine de l’image durant le chargement de la structure HTML, évitant ainsi des sauts brutaux (Layout Shift).",
          "Exemple : <img src=\"photo.jpg\" alt=\"Un portrait de chat blanc\" width=\"400\" height=\"300\">.",
          "Attention aux dimensions : Ne déformez jamais une image à l'aide de ces valeurs brutes ; préférez le contrôle via les styles CSS modernes (comme object-fit)."
        ]
      },
      {
        title: "Un mot sur les iFrames (<iframe>)",
        paragraphs: [
          "Une iFrame (Inline Frame) est une structure permettant d'imbriquer une autre page HTML à l'intérieur de votre page courante (un document dans un autre document).",
          "Elle est massivement plébiscitée pour afficher des cartes routières (Google Maps), intégrer des players de vidéos externes (YouTube, Vimeo) ou implanter des applications annexes.",
          "Exemple de squelette : <iframe src=\"https://example.com\" width=\"600\" height=\"400\"></iframe>."
        ],
        keyTakeaway: "Un attribut alt vide (alt=\"\") indique aux lecteurs d'écran d'ignorer l'image car elle est purement decorative."
      }
    ],
    codeExample: `<div>
  <!-- Exemple d'insertion d'une image d'illustration -->
  <img 
    src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600" 
    alt="Un écran affichant du code de programmation coloré" 
    style="border-radius: 8px; max-width: 100%; height: auto;"
  >
  <p style="font-size: 0.85rem; color: #64748b;">Illustration : Bureau d'un de nos développeurs senior</p>
</div>`,
    codeExplanation: "Ce code affiche une image provenant d'un dépôt distant stable d'Unsplash, accompagnée de son alternative textuelle alt et d'une marge arrondie stylisée.",
    sandboxInstructions: "Modifiez l'alternative textuelle alt avec votre propre description ou tentez d'agir sur la largeur de l'image pour voir comment le rendu s'aligne.",
    quiz: [
      {
        id: 1,
        question: "Quel attribut de la balise orpheline `<img>` détermine l'emplacement source du fichier ?",
        options: [
          "href",
          "src",
          "url",
          "source"
        ],
        correctAnswer: 1,
        explanation: "`src` (pour source) est l'attribut obligatoire contenant l'emplacement URL absolu ou relatif de la ressource graphique."
      },
      {
        id: 2,
        question: "Pour quelle raison fondamentale d'accessibilité l'attribut `alt` est-il obligatoire ?",
        options: [
          "Il permet de définir le texte d'infobulle quand la souris passe au-dessus",
          "Il affiche une alternative textuelle compréhensible pour les personnes malvoyantes et si le chargement échoue",
          "Il sert d'identifiant CSS pour attribuer le style à l'image",
          "Il augmente automatiquement la résolution du fichier natif"
        ],
        correctAnswer: 1,
        explanation: "L'attribut `alt` est central pour l'accessibilité car il est déchiffré par les lecteurs d'écran permettant une navigation inclusive."
      },
      {
        id: 3,
        question: "Quelle action se produit pour une image décorative de séparation si vous écrivez `alt=\"\"` ?",
        options: [
          "Le navigateur n'affiche pas l'image du tout",
          "Les lecteurs d'écrans savent qu'ils doivent ignorer cette image car elle n'apporte aucune valeur informative",
          "L'image s'affiche avec un message d'erreur d'accessibilité",
          "L'image prend des dimensions microscopiques par défaut"
        ],
        correctAnswer: 1,
        explanation: "Un tag `alt=\"\"` vide signifie que l'image est purement cosmétique ; les lecteurs vocaux s'abstiennent donc de la lire, ce qui allège l'écoute de l'internaute."
      },
      {
        id: 4,
        question: "Qu'est-ce qu'une iFrame (`<iframe>`) en intégration web ?",
        options: [
          "Une balise d'analyse de données statistiques de trafic",
          "Un cadre isolant une ressource vidéo externe ou un site entier à l'intérieur de la page actuelle",
          "Une police typographique importée",
          "Une balise de titre sémantique très légère"
        ],
        correctAnswer: 1,
        explanation: "L'iFrame (Inline Frame) sert à inclure, de façon sécurisée et délimitée, une autre page web ou un média tiers au sein de son propre document."
      },
      {
        id: 5,
        question: "Que se passe-t-il si un fichier physique d'image n'est pas trouvé par son paramètre `src` ?",
        options: [
          "La page web refuse totalement de s'ouvrir",
          "Le navigateur affiche l'icône d'image brisée et projette la chaîne de caractères rédigée dans le `alt`",
          "Une image de chat est automatiquement téléchargée à sa place",
          "La page web se ferme d'elle-même"
        ],
        correctAnswer: 1,
        explanation: "Si le fichier ciblé est inexistant, le navigateur rend visible un symbole signalétique d'image cassée tout en divulguant l'explication formulée par l'attribut `alt`."
      }
    ]
  },
  {
    id: 9,
    title: "9. Div, Span et la Sémantique",
    shortDescription: "Comprenez l'ossature moderne du HTML5. Distinguez conteneurs neutres et balises sémantiques porteuses de sens.",
    sections: [
      {
        title: "Block vs Inline : L'agencement d'espace",
        subtitle: "L'architecture native d'alignement",
        paragraphs: [
          "Avant l'apparition du HTML5, structurer une page consistait à empiler des boîtes neutres sans sens particulier. Pour cela, on disposait de deux éléments phares :",
          "• Les éléments de type bloc (ex: <div>) : Ils occupent par défaut toute la largeur d'affichage disponible de leur parent direct et engendrent un retour à la ligne avant et après.",
          "• Les éléments de type en-ligne ou inline (ex: <span>) : Ils ne prennent que la stricte largeur requise par le mot ou le caractère qu’ils protègent, restant sagement au milieu du flux de texte."
        ]
      },
      {
        title: "L’ère de la Sémantique HTML5",
        paragraphs: [
          "Un code rédigé à l'aide d'une cinquantaine de <div> imbriqués se nomme familièrement du 'Div-soup' (la soupe de div). C'est illisible et défavorable au référencement.",
          "Pour corriger ce défaut structurel, le HTML5 a introduit des balises dites sémantiques. Elles fonctionnent exactement comme un <div> mais elles possèdent un sens précis qui structure le site pour les moteurs de recherche et l'accessibilité :",
          "• <header> : L'en-tête du site ou d'une section (logo, slogan, barres de navigation).",
          "• <nav> : Regroupe les menus principaux de navigation.",
          "• <main> : Encapsule le contenu central et unique de la page courante.",
          "• <section> : Un regroupement logique de thématiques d'un document.",
          "• <article> : Une entité autonome (ex: un article de blog, une fiche produit).",
          "• <footer> : Le pied de page officiel du site."
        ]
      },
      {
        title: "Pourquoi utiliser la sémantique ?",
        paragraphs: [
          "• Pour le SEO : Google analyse ces balises pour déduire la teneur de vos contenus majeurs et secondaires.",
          "• Pour l'accessibilité (A11y) : Un lecteur d'écran permet à l'utilisateur de sauter directement de la zone <nav> à la zone <main> en un clic de clavier.",
          "• Pour la maintenance : Vos dossiers techniques et codes sources sont incomparablement plus clairs pour vos collègues ou vous-même."
        ],
        keyTakeaway: "Un élément sémantique moderne ne requiert aucun paramètre d'attribut spécial pour transmettre son sens sémantique inné."
      }
    ],
    codeExample: `<header style="border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">
  <p>💡 En-tête de site (Header)</p>
</header>

<main style="padding: 16px 0;">
  <article style="background-color: #f8fafc; padding: 12px; border-radius: 6px;">
    <h2>Titre de l'Article</h2>
    <p>Le contenu principal de votre actualité est rédigé dans cette section.</p>
  </article>
</main>

<footer style="margin-top: 16px; border-top: 2px solid #e2e8f0; padding-top: 8px;">
  <p>© 2026 - Tous droits sémantiques réservés.</p>
</footer>`,
    codeExplanation: "Cet assemblage sémantique illustre un découpage parfait : une en-tête header, une section principale main abritant un article autonome, et le pied de page footer.",
    sandboxInstructions: "Remplacez temporairement l'un des parents par un div standard et observez que l'architecture graphique reste similaire. C'est l'illustration exacte que la sémantique agit en arrière-plan pour le sens, pas pour la mise en forme.",
    quiz: [
      {
        id: 1,
        question: "Quelle différence distingue un élément de type Bloc d'un élément de type Inline ?",
        options: [
          "L'élément inline prend toute la largeur et force un saut de ligne, le bloc reste dans le fil",
          "L'élément bloc prend toute la largeur disponible et commence sur une ligne distincte, tandis que l'inline ne prend que la largeur de son contenu",
          "L'élément bloc n'est utilisable que dans l'élément Head du document",
          "L'élément inline est obligatoirement compatible avec l'intégration vidéo"
        ],
        correctAnswer: 1,
        explanation: "Un bloc (`<div>`, `<p>`) réclame toute la ligne et descend de niveau, tandis qu'un inline (`<span>`, `<strong>`) se fond de façon continue dans le fil de texte existant."
      },
      {
        id: 2,
        question: "Parmi ces éléments, lequel est représentatif d'une balise 'Inline' neutre ?",
        options: [
          "<div>",
          "<span>",
          "<section>",
          "<main>"
        ],
        correctAnswer: 1,
        explanation: "`<span>` est l'archétype du conteneur neutre en mode inline. Il sert à appliquer des styles CSS sur des fragments de mot sans forcer de retours à la ligne."
      },
      {
        id: 3,
        question: "À quelle utilité sémantique répond l'utilisation de la balise `<main>` dans vos pages ?",
        options: [
          "Elle délimite les éléments secondaires de publicité situés sur les côtés de la page",
          "Elle enveloppe le contenu central de la page, qui doit être unique au sein du document",
          "Elle gère la liaison avec les scripts javascripts",
          "Elle sert à injecter les favicons"
        ],
        correctAnswer: 1,
        explanation: "La balise `<main>` identifie la zone clé du document. Il ne doit y avoir qu'une seule balise `<main>` visible par page."
      },
      {
        id: 4,
        question: "Pourquoi est-il crucial de préférer des balises sémantiques au lieu de simples `<div>` repétés ?",
        options: [
          "Le CSS ne fonctionne pas du tout sur les balises de type `<div>`",
          "Pour simplifier le référencement naturel SEO, faciliter l'accessibilité des personnes en situation de handicap et rendre le code lisible",
          "Parce que les navigateurs mobiles font payer l'exécution des balises neutres",
          "Pour réduire la taille physique du fichier HTML au format compressé"
        ],
        correctAnswer: 1,
        explanation: "La sémantique favorise le repérage logique des robots (SEO) et permet aux synthèses de guidage vocales d'aider efficacement les utilisateurs."
      },
      {
        id: 5,
        question: "Quelle balise sémantique convient idéalement pour déclarer l'en-tête de navigation, incluant logos et boutons de connexion ?",
        options: [
          "<footer>",
          "<header>",
          "<aside>",
          "<section>"
        ],
        correctAnswer: 1,
        explanation: "La balise `<header>` délimite le chapeau introductif de la page ou d’un sous-bloc accueillant logo, titre de site ou barres de menus."
      }
    ]
  },
  {
    id: 10,
    title: "10. Les Tableaux",
    shortDescription: "Structurez vos données complexes avec clarté : l'usage exclusif des tableaux pour l'information chiffrée, jamais pour la mise en page.",
    sections: [
      {
        title: "La sémantique d’un tableau stable",
        subtitle: "L'art d'ordonner des statistiques brutes",
        paragraphs: [
          "À l'orée du web, les tableaux servaient de rustines pour fabriquer l'agencement graphique des sites. C'est aujourd'hui proscrit. Un tableau sert uniquement à la présentation de données de comparaison.",
          "La création d'un tableau exige l'utilisation rigoureuse de balises coordonnées :",
          "• <table> : Déclare l'élément conteneur global du tableau.",
          "• <tr> (Table Row) : Définit une ligne horizontale du tableau.",
          "• <td> (Table Data) : Représente une cellule standard accueillant les valeurs.",
          "• <th> (Table Header) : Représente une cellule d'en-tête de colonne ou de ligne (nativement centrée et en gras par défaut)."
        ]
      },
      {
        title: "L’organisation sémantique : Head, Body, Footer",
        paragraphs: [
          "Contrairement à une simple imbrication spontanée, un tableau de niveau professionnel se découpe en trois compartiments indispensables :",
          "1. <thead> : Le regroupement des en-têtes (contenant les <th>).",
          "2. <tbody> : Le cœur du tableau abritant les lignes de données.",
          "3. <tfoot> : Le pied du tableau (utile pour les totaux, les bilans ou des légendes)."
        ]
      },
      {
        title: "Conseil d’ingénierie et d’accessibilité",
        paragraphs: [
          "Un tableau doit rester simple. Pour associer proprement d'anciennes légendes d'en-tête aux cellules de données, on utilise souvent l’attribut scope=\"col\" ou scope=\"row\" au sein de la balise <th>.",
          "De la sorte, les synthèses de parole associent sans bégayer la bonne colonne à chaque chiffre."
        ],
        keyTakeaway: "Ne dessinez jamais un tableau sans avoir une ligne d’en-tête clairement déclarée."
      }
    ],
    codeExample: `<table style="width: 100%; border-collapse: collapse; font-family: sans-serif;">
  <thead>
    <tr style="background-color: #6366f1; color: white;">
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Technologie</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Rôle Majeur</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd;">HTML</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Structure & Semantique</td>
    </tr>
    <tr style="background-color: #f8fafc;">
      <td style="padding: 8px; border: 1px solid #ddd;">CSS</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Mise en scène stylisée</td>
    </tr>
  </tbody>
</table>`,
    codeExplanation: "Ce tableau bien structuré présente une zone thead d'en-tête colorée en violet, et une zone tbody recelant de façon organisée deux lignes d'informations.",
    sandboxInstructions: "Rajoutez une troisième ligne de données pour le JavaScript (par exemple : 'JS' / 'Interactivité et dynamisme') en écrivant un nouveau bloc <tr>...</tr>, puis faites le test visuel.",
    quiz: [
      {
        id: 1,
        question: "À quel usage fonctionnel exclusif doit-on destiner les tableaux en HTML ?",
        options: [
          "À la mise en page globale et la disposition du menu de gauche de l'ensemble d'un site",
          "À la présentation structurée de données tabulaires (statistiques, chiffres, listes)",
          "À la configuration des variables de session utilisateur",
          "À l'intégration avancée de fichiers musicaux"
        ],
        correctAnswer: 1,
        explanation: "Les tableaux doivent être cantonnés aux données structurées de type tableur. Pour la mise en page, Flexbox et Grid CSS sont la norme."
      },
      {
        id: 2,
        question: "Quel tag de ligne s'emploie pour insérer une nouvelle rangée de cellules ?",
        options: [
          "<td>",
          "<tr>",
          "<th>",
          "<col>"
        ],
        correctAnswer: 1,
        explanation: "`<tr>` signifie 'Table Row' (ligne de tableau). Chaque rangée horizontale du tableau est dessinée par un bloc `<tr>`."
      },
      {
        id: 3,
        question: "De quel rôle se dote spécifiquement l'élément d'en-tête `<th>` ?",
        options: [
          "Il crée un lien de redirection externe pour le tableau",
          "Il représente une cellule d'en-tête (gras et centré par défaut) décrivant une colonne ou ligne de données",
          "Il insère de l'audio de fond dans le tableau",
          "Il permet de fusionner des bases SQL"
        ],
        correctAnswer: 1,
        explanation: "`<th>` (Table Header) définit des cellules de délimitation d'en-tête de colonnes ou lignes, sémantiquement enrichies."
      },
      {
        id: 4,
        question: "Lequel de ces découpages sémantiques structure un tableau professionnel pour isoler les en-têtes du contenu ?",
        options: [
          "<header>, <section> et <footer>",
          "<thead>, <tbody> et <tfoot>",
          "<main-table>, <body-table> et <totals>",
          "<th-group> et <td-group>"
        ],
        correctAnswer: 1,
        explanation: "À l'instar d'une page classique, un tableau de données se scinde sémantiquement en <thead> (en-têtes), <tbody> (corps) et <tfoot> (pied)."
      },
      {
        id: 5,
        question: "Que se passe-t-il si vous abusez de tableaux HTML pour effectuer l'agencement graphique général de votre site ?",
        options: [
          "Le site est inaccessible pour les malvoyants, le chargement est fastidieux et le référencement naturel SEO est fortement dégradé",
          "Le site s'affiche dix fois plus vite qu'avec du CSS",
          "Rien de particulier, c'est l'approche d'assemblage plébiscitée par le W3C de nos jours",
          "Le navigateur Chrome facture l'utilisateur pour traitement excessif"
        ],
        correctAnswer: 0,
        explanation: "L'assemblage graphique par tableaux brise le flux d'accessibilité. Les synthèses vocales liront le site colonne par colonne, le rendant parfaitement incompréhensible."
      }
    ]
  },
  {
    id: 11,
    title: "11. Les Formulaires",
    shortDescription: "Créez de vrais points de contact interactifs : apprenez à manipuler les inputs, à structurer vos boutons et à associer vos labels.",
    sections: [
      {
        title: "La sémantique des Formulaires : Le tag form",
        subtitle: "L'outil de recueil de données utilisateur",
        paragraphs: [
          "Un site web n'est pas uniquement un flot unilatéral de lecture. C'est un dialogue. Les formulaires permettent de récolter de la matière entrée par l'utilisateur (inscription, recherche, coordonnées).",
          "Un bloc interactif est enfermé au sein de l'élément à paire <form>.",
          "• action : Spécifie l'URL du serveur qui va réceptionner et analyser la donnée envoyée.",
          "• method : L’action de requête à opérer (majoritairement 'GET' pour une recherche ou 'POST' pour de l’envoi de données sécurisé d’écriture)."
        ]
      },
      {
        title: "Les Éléments de Saisie : input & label",
        paragraphs: [
          "Le pivot de la saisie est la balise orpheline <input>. Son comportement dépend entièrement de la valeur configurée dans l'attribut type :",
          "• type=\"text\" : Un champ de texte basique.",
          "• type=\"password\" : Masque automatiquement les touches frappées par des ronds noirs de protection.",
          "• type=\"email\" : Vérifie de lui-même la présence d'une adresse de messagerie valide (avec @ et un domaine).",
          "Le <label> est essentiel pour l’ergonomie : il décrit textuellement le champ. On relie sémantiquement un <label> à un <input> en injectant l'attribut `for` du label égal à l'identifiant `id` de l'input."
        ]
      },
      {
        title: "Bouton de Soumission : button",
        paragraphs: [
          "Pour valider l'action du formulaire, on utilise un bouton spécial :",
          "• <button type=\"submit\">Envoyer</button> : Permet de soumettre toutes les informations rassemblées vers l'adresse d'action indiquée.",
          "Il est également conseillé de déployer l’attribut required sur un input pour stipuler que ce champ ne doit pas rester vierge lors du clic de validation."
        ],
        keyTakeaway: "Un formulaire ne s'exécute convenablement que si chaque champ possède également l'attribut name permettant au serveur d'identifier la valeur transmise."
      }
    ],
    codeExample: `<form style="font-family: sans-serif; display: flex; flex-direction: column; gap: 12px; max-width: 300px;">
  <div>
    <label for="identifiant" style="display: block; font-weight: 500; font-size: 0.9rem; margin-bottom: 4px;">Pseudonyme :</label>
    <input type="text" id="identifiant" placeholder="Ex: Bob83" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
  </div>
  
  <div>
    <label for="passe" style="display: block; font-weight: 500; font-size: 0.9rem; margin-bottom: 4px;">Code Secret :</label>
    <input type="password" id="passe" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
  </div>
  
  <button type="submit" style="background-color: #6366f1; color: white; padding: 10px; border: none; border-radius: 4px; cursor: pointer; font-weight: 500;">
    Se connecter
  </button>
</form>`,
    codeExplanation: "Ce formulaire modèle lie sémantiquement les balises label à leurs inputs associés via les identifiants requis. Il déploie un mot de passe protégé et un bouton submit fonctionnel.",
    sandboxInstructions: "Saisissez du texte dans la zone de code secret à droite et constatez que vos caractères sont masqués automatiquement pour des raisons de protection de l'identité.",
    quiz: [
      {
        id: 1,
        question: "Quelle grande balise enveloppe impérativement tous les éléments de recueil de saisies d'un bloc ?",
        options: [
          "<input-group>",
          "<form>",
          "<label-container>",
          "<submit-form>"
        ],
        correctAnswer: 1,
        explanation: "La balise <form> structure la zone délimitée de recueil de données et configure les conditions d'acheminement réseau."
      },
      {
        id: 2,
        question: "Quel attribut fondamental de la balise `<input>` redéfinit sa nature d'affichage et d'interaction (Ex: bouton, texte, mot de passe) ?",
        options: [
          "name",
          "id",
          "type",
          "class"
        ],
        correctAnswer: 2,
        explanation: "L'attribut `type` détermine si le champ est une saisie textuelle standard, un e-mail à valider, un mot de passe sécurisé ou une case à cocher."
      },
      {
        id: 3,
        question: "Comment effectue-t-on la liaison sémantique solide préconisée entre une étiquette `<label>` et son `<input>` associé ?",
        options: [
          "En plaçant la balise `<label>` juste après la balise d'activation",
          "En donnant la même valeur à l'attribut `for` du label et à l'attribut `id` de l'input",
          "En appliquant une classe commune CSS 'group-input'",
          "En utilisant un lien hypertexte avec une ancre"
        ],
        correctAnswer: 1,
        explanation: "C'est l'alignement strict entre la clé du `for` de l'étiquette et l'identifiant explicite `id` du champ qui raccorde sémantiquement l'objet aux navigateurs."
      },
      {
        id: 4,
        question: "Quel attribut peut-on insérer sur un champ de texte pour interdire l'envoi du formulaire s'il reste vide ?",
        options: [
          "required",
          "lock=\"true\"",
          "placeholder",
          "disabled"
        ],
        correctAnswer: 0,
        explanation: "L'attribut autonome `required` valide au clic la complétude du champ, imposant un arrêt et un avertissement graphique au contrevenant."
      },
      {
        id: 5,
        question: "Quelle valeur de type attribue-t-on à un input de validation finale pour provoquer l'acheminement des données ?",
        options: [
          "type=\"button\"",
          "type=\"submit\"",
          "type=\"send\"",
          "type=\"action-validate\""
        ],
        correctAnswer: 1,
        explanation: "`type=\"submit\"` (ou d'identique façon pour un bouton submit) provoque de manière native la récolte et le transfert des champs reliés au formulaire parent."
      }
    ]
  },
  {
    id: 12,
    title: "12. Class & ID : Préparer le CSS",
    shortDescription: "Apprenez à marquer vos éléments pour le style et l'interactivité. Maîtrisez la différence cruciale entre classes et identifiants.",
    sections: [
      {
        title: "La préparation de l'habillage graphique",
        subtitle: "L'insertion d'indicateurs de positionnement",
        paragraphs: [
          "Une fois qu'une page HTML est construite de manière rigoureuse, elle apparaît brute. Pour la parer de couleurs, de motifs et d'animations, on va utiliser le langage CSS.",
          "Pour que le CSS sache exactement sur quel élément de votre document appliquer un style, vous devez ajouter des attributs désignateurs dans votre code HTML.",
          "Ces désignateurs sont de deux natures : l'attribut class et l'attribut id."
        ]
      },
      {
        title: "La classe (class) : Le ciblage groupé réutilisable",
        paragraphs: [
          "L'attribut class s'applique sur un ou plusieurs éléments qui partagent des caractéristiques de style communes.",
          "Une classe peut être appelée autant de fois que souhaité au sein du même document HTML. De plus, un élément peut posséder plusieurs classes simultanément (séparées par de simples espaces).",
          "Exemple : <button class=\"bouton vert arrondi\">Valider</button>.",
          "En CSS, les classes sont ciblées par le symbole du point '.' (ex: .bouton vert)."
        ]
      },
      {
        title: "L'Identifiant (id) : L'élément unique absolu",
        paragraphs: [
          "L'attribut id est un désignateur exclusif. Il ne peut être appliqué qu'à un seul et unique élément par fichier HTML.",
          "Il est formellement incorrect d'attribuer le même identifiant à deux éléments différents. Un id sert à cibler un élément spécifique (par exemple, le menu principal #navigation, ou l’ancre de retour en haut de page).",
          "En CSS, les identifiants sont ciblés par la marque de dièse '#' (ex: #navigation)."
        ],
        keyTakeaway: "Pensez la classe comme un uniforme d'école (plusieurs personnes le portent) et l'ID comme le numéro de carte d'identité d'un citoyen (une personne unique)."
      }
    ],
    codeExample: `<div>
  <!-- Une classe réutilisée sur deux éléments distincts -->
  <p class="texte-indigo italic">Paragraphe mis en relief avec une classe réutilisable.</p>
  <p class="texte-indigo font-bold">Un deuxième texte portant l'identique classe.</p>
  
  <!-- Un identifiant unique exclusif -->
  <div id="bloc-exclusif" style="border: 1px solid #6366f1; padding: 6px; border-radius: 4px;">
    🔑 Bloc porteur d'un identifiant strictement unique et exclusif dans notre page.
  </div>
</div>`,
    codeExplanation: "Ici nous démontrons le cas d'une classe partagée texte-indigo induisant de la mise en valeur multiple, et un bloc détenteur de l'exclusif ID bloc-exclusif.",
    sandboxInstructions: "Attribuez une classe ou un id personnalisé à un nouvel élément de votre création afin de vous imprégner de sa syntaxe d'écriture standard.",
    quiz: [
      {
        id: 1,
        question: "Quelle est la différence sémantique universelle entre l'attribut `class` et l'attribut `id` ?",
        options: [
          "`class` est réservé à l'insertion des polices, `id` configure les adresses réseau",
          "Une `class` peut s'utiliser à de multiples reprises sur divers éléments, alors qu'un `id` doit être strictement unique et exclusif au sein du document",
          "Un `id` requiert d'être fermé alors qu'une `class` est une balise orpheline",
          "Aucune, ce sont deux termes parfaitement synonymes"
        ],
        correctAnswer: 1,
        explanation: "Une classe regroupe des styles applicables en plusieurs endroits de la page, tandis que l'ID identifie un point unique indivisible."
      },
      {
        id: 2,
        question: "Est-il syntaxiquement valide d'attribuer plusieurs classes différentes à une seule et unique balise ?",
        options: [
          "Non, un élément ne tolère qu'une seule classe par attribut",
          "Oui, en énonçant chaque classe dans la même chaîne séparée par de simples espaces",
          "Oui, mais en écrivant plusieurs fois l'attribut class= successif",
          "Uniquement pour les balises de tableau"
        ],
        correctAnswer: 1,
        explanation: "Pour associer diverses classes à une balise, on les consigne au sein du même attribut en les espaçant : class=\"btn btn-primary spacing-lg\"."
      },
      {
        id: 3,
        question: "Par quel symbole typographique désigne-t-on une classe dans une cible de sélection CSS ?",
        options: [
          "Le dièse '#'",
          "Le point '.'",
          "L'esperluette '&'",
          "L'étoile ou astérisque '*'"
        ],
        correctAnswer: 1,
        explanation: "Le point '.' précède le nom de la classe en CSS pour la cibler, tandis que l'ID est ciblé par le dièse '#'."
      },
      {
        id: 4,
        question: "Dans quel cas de figure technique l'utilisation d'un identifiant `id` est-elle particulièrement à privilégier ?",
        options: [
          "Pour formater le texte de l'ensemble des paragraphes de votre ouvrage",
          "Pour servir de balise d'ancrage ciblée par un lien hypertexte particulier ou désigner un élément unique à piloter en JS",
          "Pour lier des images de fond décoratives",
          "Pour stocker les métadonnées de l'onglet Head de manière persistante"
        ],
        correctAnswer: 1,
        explanation: "Un ID est optimal pour désigner un composant unique du site servant de point d'ancrage ciblé pour les liens hypertextes."
      },
      {
        id: 5,
        question: "Quelle ligne d'exemple HTML est parfaitement conforme aux règles des standards du W3C ?",
        options: [
          "<div id=\"bouton\" id=\"bouton-arrondi\">",
          "<div class=\"primary large shadow\">",
          "<div class=\"primary\" class=\"large\">",
          "<div id=\"principale secondaire\">"
        ],
        correctAnswer: 1,
        explanation: "Plusieurs classes s'additionnent par l'espace de façon unique dans l'attribut class. Les ID, eux, ne peuvent être assignés de façon multiple par tag ou dupliqués dans le document."
      }
    ]
  },
  {
    id: 13,
    title: "13. Caractères spéciaux & Entités",
    shortDescription: "Prévenez les conflits d’interprétation : découvrez comment afficher des chevrons, des espaces insécables et des symboles de droits d'auteur.",
    sections: [
      {
        title: "Pourquoi utiliser des entités HTML ?",
        subtitle: "L'évitement serein d'erreurs d'interprétation",
        paragraphs: [
          "Dans le langage HTML, des caractères graphiques précis possèdent un rôle structurel fondamental. Par exemple, le caractère inférieur '<' et supérieur '>' désignent l'ouverture d'un tag.",
          "Mais comment faire si vous devez écrire à l'écran l'équation : 'A < B' ? Si vous notez la lettre 'A' suivie de '<', le navigateur pensera que vous entamez l'écriture d'une balise 'B'. Cela cassera intégralement le traitement de votre document.",
          "Pour matérialiser ces symboles réservés, le HTML a développé les Entités HTML. Ce sont des codes de substitution textuels."
        ]
      },
      {
        title: "Le protocole de codage des entités",
        paragraphs: [
          "Toute entité HTML respecte sans concession une rigueur graphique stricte de début et de fin :",
          "• Elle commence invariablement par la marque d’esperluette '&' (ampersand).",
          "• Elle s'achève immanquablement par un point-virgule ';'.",
          "Entre ces deux bornes, on insère un code mnémonique abréviatif explicite ou un index numérique standardisé."
        ]
      },
      {
        title: "Les Entités Majeures du Web",
        paragraphs: [
          "• &lt; (less than) : Remplace le signe inférieur <.",
          "• &gt; (greater than) : Remplace le signe supérieur >.",
          "• &amp; : Remplace l'esperluette & pour éviter de fausses amorces d'entités.",
          "• &nbsp; (non-breaking space) : Crée une zone blanche d'espace insécable. Elle empêche le navigateur de couper à la ligne à cet endroit (idéal entre un nombre et une unité comme '10 €').",
          "• &copy; : Fait naître instantanément le symbole de Copyright officiel ©."
        ],
        keyTakeaway: "Chaque caractère de ponctuation ou symbole réservé dispose d'une écriture sécurisée vous protégeant des bugs de rendu."
      }
    ],
    codeExample: `<p>
  Comparatifs mathématiques usuels : 
  <strong>5 &lt; 10</strong> ET <strong>100 &gt; 50</strong>.
</p>

<p>
  Cet ouvrage est protégé par les lois internationales de l'auteur &copy;&nbsp;2026.
</p>`,
    codeExplanation: "Nous convoquons dans ce modèle d'application l'entité de comparaison inférieure &lt;, de comparaison supérieure &gt;, de copyright &copy; et d'espace préservé &nbsp;.",
    sandboxInstructions: "Intégrez le caractère supérieur en écrivant le code mnémonique &gt; ou écrivez l'esperluette sémantique brute &amp; pour tester l'intégrité de l'interpréteur graphique.",
    quiz: [
      {
        id: 1,
        question: "Par quel duo graphique incontournable s'ouvre et s'achève impérativement toute entité HTML ?",
        options: [
          "Elle commence par `<` et se conclut par `>`",
          "Elle commence par l'esperluette `&` et se conclut par un point-virgule `;`",
          "Elle commence par un slash `/` et se conclut par un pourcentage `%`",
          "Elle commence par un tiret double `--` et s'achève par une accolade `}`"
        ],
        correctAnswer: 1,
        explanation: "Une entité s'introduit obligatoirement par l'esperluette `&` et se valide par un point-virgule `;` pour guider le parseur."
      },
      {
        id: 2,
        question: "Quelle entité représentera fidèlement le caractère inférieur `<` sans s'assimiler à une balise d'ouverture ?",
        options: [
          "&lt;",
          "&less;",
          "&inf;",
          "&lower;"
        ],
        correctAnswer: 0,
        explanation: "`&lt;` correspond à la traduction 'less than' (plus petit que), rendant sans encombre le chevron inférieur."
      },
      {
        id: 3,
        question: "Quel rôle confie-t-on spécifiquement à l'entité d'espace insécable `&nbsp;` ?",
        options: [
          "Elle modifie toute la police d'affichage en caractères gras sémantiques",
          "Elle trace une ligne fine au milieu de la feuille de travail",
          "Elle insère un espace blanc d'espacement qui interdit au navigateur de faire un retour à la ligne automatique à cet endroit précis",
          "Elle génère un champ de saisie de texte masqué"
        ],
        correctAnswer: 2,
        explanation: "`&nbsp;` (Non-Breaking Space) impose au navigateur de laisser soudés deux mots ou chiffres sur la même ligne physique d'affichage."
      },
      {
        id: 4,
        question: "Quelle entité fait apparaître instantanément à l'écran l'icône de Copyright © ?",
        options: [
          "&copy-sign;",
          "&copyright;",
          "&copy;",
          "&c;"
        ],
        correctAnswer: 2,
        explanation: "`&copy;` est l'entité normalisée par le W3C pour convoquer l'affichage sémantique du Copyright."
      },
      {
        id: 5,
        question: "Que se passerait-il si vous écriviez l'équation 'A < B' en utilisant le caractère chevron brut `<` en HTML pur ?",
        options: [
          "Le navigateur afficherait l'équation sans aucun problème",
          "Le parseur parserait le caractère inférieur comme une tentative d'ouverture de balise, ce qui peut masquer le texte suivant ou corrompre la mise en page",
          "Le site s'arrêterait complétement avec une erreur de compilation système",
          "Le mot B serait automatiquement mis en majuscule"
        ],
        correctAnswer: 1,
        explanation: "Le chevron physique `<` est réservé. L'intégrer brut expose le navigateur à de fausses interprétations de balises fantômes."
      }
    ]
  },
  {
    id: 14,
    title: "14. Bonus : Le W3C & la validation du code",
    shortDescription: "Garantissez la qualité de votre travail. Découvrez les normes du W3C et les techniques indispensables de validation de code.",
    sections: [
      {
        title: "Qu’est-ce que le W3C ?",
        subtitle: "L'autorité coordinatrice du réseau international",
        paragraphs: [
          "Le W3C (World Wide Web Consortium) est une organisation internationale à but non lucratif qui définit les standards en vigueur du web (tels que le HTML5, le CSS3, les consignes d'accessibilité WCAG). Redigé sous la guidance historique de Tim Berners-Lee, son rôle est d’unifier l'expérience du web.",
          "Sans le W3C, chaque marque de navigateur (Edge, Chrome, Safari, Firefox) inventerait ses propres balises. De ce fait, un code opérationnel sur une plateforme s'effondrerait sur une autre."
        ]
      },
      {
        title: "Le Markup Validation Service du W3C",
        paragraphs: [
          "Pour certifier la propreté de vos livrables web, le W3C met à disposition un outil gratuit en ligne : le validateur de balisage (Markup Validation Service).",
          "Cet outil analyse votre code et détecte :",
          "• Les erreurs fatales de syntaxe (balises non fermées, chevauchements parents-enfants).",
          "• Les attributs ou balises obsolètes qui nuisent à l’accessibilité.",
          "• Les mauvaises pratiques de hiérarchie des titres (h1 absent ou en doublons sauvages)."
        ]
      },
      {
        title: "Bonnes Pratiques de base recommandées",
        paragraphs: [
          "En tant que senior, voici les habitudes d'hygiène de code à adopter immédiatement :",
          "1. Écrivez toujours vos balises et attributs en minuscules (<p> au lieu de <P>).",
          "2. Renseignez systématiquement l'attribut alt sur tous vos visuels indispensables.",
          "3. Indentez soigneusement votre code de façon hiérarchique (alignement des balises enfants par rapport au parent) pour faciliter la maintenance future.",
          "4. Fermez toujours chaque balise de façon rigoureuse."
        ],
        keyTakeaway: "Un code validé par le W3C est le sceau officiel d'un travail de qualité professionnelle conformiste et pérenne."
      }
    ],
    codeExample: `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Une Sémantique de Qualité Professionnelle</title>
</head>
<body>
  <h1>Page 100% de Conformité</h1>
  <p>En respectant ces règles, ce document passera au vert sur le validateur officiel du W3C.</p>
</body>
</html>`,
    codeExplanation: "Ce modèle de code contient l'ensemble des éléments exigés de base et s'inscrit dans un respect absolu des recommandations W3C.",
    sandboxInstructions: "Profitez-en pour réaliser des essais de structures à droite, puis lancez le quiz final pour s'assurer de votre totale validation de notre programme !",
    quiz: [
      {
        id: 1,
        question: "Qu'est-ce que le W3C dans l'environnement mondial du web ?",
        options: [
          "Une marque de processeurs informatiques rapides",
          "Un organisme à but non lucratif chargé d'uniformiser les technologies et standards du web mondial",
          "Un hébergeur de fichier cloud basé en Californie",
          "Le protocole sécurisé cryptant les données de formulaires"
        ],
        correctAnswer: 1,
        explanation: "Le W3C (World Wide Web Consortium) produit les recommandations et standards partagés pour garder le web ouvert et universel."
      },
      {
        id: 2,
        question: "Pourquoi est-il crucial de tester régulièrement ses pages de code sur le validateur W3C ?",
        options: [
          "Parce que le validateur rémunère les développeurs par ligne corrigée",
          "Pour s'assurer du bon respect de l'accessibilité, supprimer les failles de code corrompu et pérenniser votre référencement naturel SEO",
          "Pour forcer le navigateur à bloquer l'usage des téléphones mobiles",
          "Pour héberger gratuitement l'intégralité de sa base de données"
        ],
        correctAnswer: 1,
        explanation: "La conformité W3C certifie la propreté technique de l'œuvre numérique, diminuant drastiquement les dysfonctionnements de rendu."
      },
      {
        id: 3,
        question: "Quel outil officiel en ligne fournit gratuitement le W3C pour auditer vos documents web ?",
        options: [
          "Console Audit Inspector Pro",
          "Markup Validation Service",
          "Lighthouse Server Engine",
          "W3C CSS Builder Suite"
        ],
        correctAnswer: 1,
        explanation: "Le 'W3C Markup Validation Service' est l'outil phare gratuit en ligne pour analyser l'exactitude de la sémantique de vos pages."
      },
      {
        id: 4,
        question: "Est-ce qu'un code HTML5 comportant des balises invalides cessera brutalement de s'afficher dans tous les navigateurs ?",
        options: [
          "Oui, le navigateur affichera une erreur d'exécution système totale",
          "Non, les navigateurs modernes disposent de parseurs tolérants qui tentent de réparer eux-mêmes à la volée, mais au risque de générer des dysfonctionnements majeurs de style ou de lecture",
          "Seulement si vous possédez un abonnement premium payant",
          "Oui, cela bloque la carte mère de l'ordinateur"
        ],
        correctAnswer: 1,
        explanation: "Les navigateurs sont tolérants et essaient de pallier les bugs de structure, mais cela peut occasionner des comportements de rendu désastreux et anarchiques."
      },
      {
        id: 5,
        question: "Laquelle de ces syntaxes respecte idéalement les règles d'hygiène du W3C ?",
        options: [
          "<P CLASS=\"IMPORTANT-TEXT\"></P>",
          "<p class=\"important-text\"></p>",
          "<p CLASS=important-text>",
          "<P Class=\"Important-Text\"></p>"
        ],
        correctAnswer: 1,
        explanation: "L'écriture des noms de balises et attributs intégralement en minuscules, combinée à une fermeture stricte et à des valeurs d'attributs entre guillemets, constitue le fondement des recommandations indispensables de style."
      }
    ]
  }
];
