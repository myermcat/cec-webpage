/**
 * Shared type for locale content. Each locale (en.ts, fr.ts) exports an object that satisfies Content.
 */
export type Content = {
  event: {
    date: string;
    time: string;
    venue: string;
    ctaSubtext: string;
  };
  links: {
    registration: string;
    email: string;
    speakerApplication: string;
    /** Formspree form endpoint for Stay Updated signups (e.g. https://formspree.io/f/xxxxx). Empty = no save, just toast. */
    newsletterFormEndpoint: string;
    instagram: { url: string; handle: string };
    linkedin: { url: string; handle: string };
  };
  hero: {
    tagline: string;
    title: { line1: string; line2: string; line3: string };
    subtitle: string;
  };
  speakers: readonly {
    name: string;
    focus: string;
    bio: string;
    image: string;
  }[];
  team: readonly {
    name: string;
    role: string;
    image: string;
  }[];
  faqs: readonly {
    question: string;
    answer: string;
  }[];
  ui: {
    nav: { about: string; speakers: string; event: string; team: string; contact: string; attend: string };
    hero: { registerNow: string; learnMore: string };
    about: {
      sectionLabel: string;
      title: string;
      titleHighlight: string;
      intro: string;
      ourStory: string;
      storyP1: string;
      storyP2: string;
      values: { title: string; description: string }[];
    };
    event: {
      sectionLabel: string;
      title: string;
      titleHighlight: string;
      intro: string;
      detailLabels: { date: string; time: string; venue: string };
      whatYouExperience: string;
      scheduleP1: string;
      scheduleP2: string;
      scheduleP3: string;
      scheduleP4: string;
      testimonialQuote: string;
      testimonialAttribution: string;
      faqHeading: string;
      reserveSpot: string;
    };
    speakers: {
      sectionLabel: string;
      title: string;
      titleHighlight: string;
      intro: string;
      applyHeadline: string;
      applySubtext: string;
      applyButton: string;
      applyDeadline: string;
      applyFollowUp: string;
      themes: string[];
    };
    team: {
      sectionLabel: string;
      title: string;
      titleHighlight: string;
      intro: string;
    };
    contact: {
      sectionLabel: string;
      title: string;
      titleHighlight: string;
      intro: string;
      sendMessage: string;
      name: string;
      email: string;
      message: string;
      placeholders: { name: string; email: string; message: string };
      sendButton: string;
      stayUpdated: string;
      newsletterCopy: string;
      subscribe: string;
      subscribing: string;
      followAlong: string;
      orEmailUs: string;
      toastOpenEmail: string;
      toastNewsletter: string;
      toastNewsletterError: string;
    };
    footer: { tagline: string; copyright: string };
    notFound: { title: string; description: string; returnHome: string };
    meta: {
      title: string;
      description: string;
      keywords: string;
      ogTitle: string;
      ogDescription: string;
    };
  };
};
