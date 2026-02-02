import type { Content } from './types';

export const contentFr: Content = {
  event: {
    date: '28 mars 2026',
    time: '14 h – 17 h',
    venue: "Université d'Ottawa",
    ctaSubtext: 'Places limitées • Inscription recommandée tôt',
  },
  links: {
    registration: 'https://luma.com/aoycaats',
    email: 'fabdo006@uottawa.ca',
    instagram: {
      url: 'https://www.instagram.com/cegsc.ieee.uottawa/',
      handle: '@cegsc.ieee.uottawa',
    },
    linkedin: {
      url: 'https://www.linkedin.com/in/cegsc-ieee-uottawa-25879139b/',
      handle: 'CEGSC.IEEE. UOTTAWA',
    },
  },
  hero: {
    tagline: 'Printemps 2026 • Inscriptions ouvertes',
    title: {
      line1: 'Conférence',
      line2: 'en génie',
      line3: 'informatique',
    },
    subtitle: "Pour les ingénieurs qui savent ce qu'ils font, mais pas qui ils sont.\nVrais récits. Vrai impact.",
  },
  speakers: [
    {
      name: 'Maya Chen',
      focus: 'Systèmes embarqués et code créatif',
      bio: "Du matériel de jeu aux installations artistiques interactives. Explore comment les contraintes nourrissent la créativité.",
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'Jordan Reeves',
      focus: 'Open source et communauté',
      bio: "Mainteneur d'infrastructures critiques. Parle du burnout, de la récupération et de trouver sa place.",
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'Dr. Amara Okafor',
      focus: 'Sécurité matérielle et éthique',
      bio: 'Chercheuse passée à l\'industrie. Connecte les vulnérabilités du silicium à la confiance humaine.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'Sam Nakamura',
      focus: 'Robotique et accessibilité',
      bio: "Conçoit des technologies d'assistance. Sur la conception pour les cas limites qui deviennent des fonctionnalités centrales.",
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    },
  ],
  team: [
    { name: 'Mariia Yermolenko', role: 'Organisatrice principale', image: '/team/mariia.jpg' },
    { name: 'Fatimata Abdou Dramane', role: 'Directrice de programme', image: '/team/fatima.jpg' },
    { name: 'Asif Rahman', role: 'Logistique', image: '/team/asif.jpg' },
    { name: 'Paul Chukwu', role: 'Commandites', image: '/team/paul.jpg' },
    { name: 'Basma Ben Taleb', role: 'Marketing', image: '/team/basma.jpg' },
    { name: 'Dounya', role: ' ', image: '/team/placeholder.jpg' },
  ],
  faqs: [
    {
      question: "Où aura lieu l'événement ?",
      answer: "L'événement se tiendra à l'uOttawa. Le lieu exact sera communiqué une fois finalisé.",
    },
    {
      question: 'Quand le programme sera-t-il publié ?',
      answer: "Nous publierons le programme complet plus près de l'événement, une fois les conférenciers confirmés.",
    },
    {
      question: "À qui s'adresse cet événement ?",
      answer: "À toute personne en tech ou en génie qui s'est déjà sentie incertaine sur son parcours, a questionné sa direction ou voulu une vision plus claire de ce que signifie vraiment construire des choses. Étudiants, diplômés récents et professionnels sont les bienvenus.",
    },
    {
      question: "Puis-je participer comme conférencier ou bénévole ?",
      answer: "Oui. Nous accueillons encore des propositions de conférenciers et des bénévoles. Plus d'infos sur le site ; n'hésitez pas à nous contacter si vous ne savez pas où vous placer.",
    },
    {
      question: 'Y aura-t-il de la nourriture ?',
      answer: "Oui. Nous prévoyons un repas partagé pendant l'événement ; les détails suivront.",
    },
    {
      question: 'Que dois-je apporter ?',
      answer: "Juste vous-même et l'esprit ouvert. Aucune préparation requise.",
    },
  ],
  ui: {
    nav: {
      about: 'À propos',
      speakers: 'Conférenciers',
      event: 'Événement',
      team: 'Équipe',
      contact: 'Contact',
      attend: 'Participer',
    },
    hero: {
      registerNow: 'S\'inscrire',
      learnMore: 'En savoir plus',
    },
    about: {
      sectionLabel: 'À propos du CEC',
      title: 'Où le génie rencontre l\'',
      titleHighlight: 'identité',
      intro: "Le CEC est né des questions qu'on se pose une fois les cours terminés, quand on essaie de comprendre pourquoi on fait tout ça. C'est un espace où l'on voit non seulement comment les choses fonctionnent, mais pourquoi on les construit.",
      ourStory: 'Notre histoire',
      storyP1: "Nous sommes un groupe d'étudiants qui passons notre temps à apprendre les circuits, la logique, l'assembleur, l'architecture, sans vraiment savoir quel genre de personne utilise tout ça. En quatrième année, on sait ce qu'on fait mais pas qui on est. Les premières années se demandent « est-ce que je devrais passer en informatique ? » Les quatrièmes : « c'est quoi au juste le génie informatique ? »",
      storyP2: "40 à 60 % des étudiants en génie abandonnent à cause du burnout et du flou sur la suite. Le CEC est notre réponse. C'est là que les ingénieurs partagent la réalité désordonnée. Où l'on parle d'échec et d'où l'on repart en voyant ses difficultés autrement.",
      values: [
        {
          title: 'Pourquoi l\'échec est nécessaire',
          description: 'Comprendre comment les difficultés d\'aujourd\'hui forgent l\'ingénieur de demain.',
        },
        {
          title: 'Pourquoi écrire du mauvais code',
          description: 'Comprendre pourquoi des premiers essais désordonnés battent la paralysie parfaite.',
        },
        {
          title: 'Pourquoi les solutions commencent sur le papier',
          description: 'Découvrir pourquoi le meilleur code commence avant d\'ouvrir l\'IDE.',
        },
      ],
    },
    event: {
      sectionLabel: "L'événement",
      title: 'Un jour. ',
      titleHighlight: 'Un impact durable.',
      intro: "Le CEC est un espace où les ingénieurs parlent ouvertement de comment ils en sont arrivés là et de ce qui les a façonnés. Vous entendrez des récits d'échec, d'incertitude et de progrès lent, et comment ces expériences ont changé la façon dont les gens voient leur travail.",
      detailLabels: { date: 'Date', time: 'Heure', venue: 'Lieu' },
      whatYouExperience: "Ce que vous vivrez",
      scheduleP1: 'Le programme complet se précise.',
      scheduleP2: 'Prévoyez des conférences courtes, des repas partagés et du temps pour digérer les idées et échanger avec des gens qui se posent les mêmes questions.',
      scheduleP3: "Nous voulons laisser de la place à la conversation, à la réflexion et aux moments qui ne rentrent pas dans un emploi du temps.",
      scheduleP4: 'Plus de détails bientôt.',
      testimonialQuote: "L'informatique n'a pas plus à voir avec les ordinateurs que l'astronomie avec les télescopes.",
      testimonialAttribution: 'Edsger Dijkstra',
      faqHeading: 'Questions fréquentes',
      reserveSpot: 'Réserver ma place',
    },
    speakers: {
      sectionLabel: 'Conférenciers',
      title: 'Des voix qui ',
      titleHighlight: 'résonnent',
      intro: "Nos conférenciers sont des ingénieurs, chercheurs et bâtisseurs qui ont été exactement où vous êtes. Des gens qui ont questionné leur parcours, traversé le burnout et compris ce qui compte vraiment. Leurs récits montrent que ce que vous vivez n'est pas un problème. C'est le début de votre histoire.",
      comingSoon: 'Bientôt !',
      themes: ['Pensée système', 'Parcours professionnels', 'Open source', 'Matériel', 'Éthique', 'Communauté'],
    },
    team: {
      sectionLabel: "L'équipe",
      title: 'Construit par des ',
      titleHighlight: 'étudiants',
      intro: "Le CEC est organisé entièrement par des étudiants qui croient au pouvoir de l'apprentissage par la communauté. Nous sommes ingénieurs, designers et bâtisseurs comme vous.",
    },
    contact: {
      sectionLabel: 'Contact',
      title: 'Restons ',
      titleHighlight: 'en contact',
      intro: "Des questions ? Envie de vous impliquer ? Nous aimerions avoir de vos nouvelles. Écrivez-nous ou suivez-nous sur les réseaux.",
      sendMessage: 'Nous envoyer un message',
      name: 'Nom',
      email: 'Courriel',
      message: 'Message',
      placeholders: {
        name: 'Votre nom',
        email: 'vous@exemple.com',
        message: "Qu'avez-vous en tête ?",
      },
      sendButton: 'Envoyer',
      stayUpdated: 'Restez informés',
      newsletterCopy: 'Recevez les annonces, les conférenciers et les mises à jour par courriel.',
      subscribe: 'S\'abonner',
      followAlong: 'Nous suivre',
      orEmailUs: 'Ou écrivez-nous directement à',
      toastOpenEmail: 'Ouverture de votre messagerie. Envoyez le message pour nous joindre.',
      toastNewsletter: "Vous êtes inscrit ! Surveillez votre boîte de réception.",
    },
    footer: {
      tagline: 'Par des ingénieurs, pour des ingénieurs.',
      copyright: 'Conférence en génie informatique',
    },
    notFound: {
      title: '404',
      description: 'Oups ! Page introuvable',
      returnHome: 'Retour à l\'accueil',
    },
    meta: {
      title: "CEC '26 — Conférence en génie informatique",
      description: "Une conférence style TED, portée par des étudiants, qui relie les compétences en génie informatique à l'identité, au sens et à l'impact réel. Printemps 2026.",
      keywords: 'génie informatique, conférence, étudiants, tech, pensée système, identité ingénieur',
      ogTitle: "CEC '26 — Conférence en génie informatique",
      ogDescription: "Un rassemblement porté par des étudiants où l'identité rencontre les systèmes. Vrai génie. Vrais récits. Vrai impact.",
    },
  },
};
