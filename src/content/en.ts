import type { Content } from './types';

export const contentEn: Content = {
  event: {
    date: 'March 28, 2026',
    time: '2:00 PM - 5:00 PM',
    venue: 'University of Ottawa',
    ctaSubtext: 'Limited number of attendees • Early registration recommended',
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
    tagline: "Spring 2026 • Registration Open",
    title: {
      line1: 'Computer',
      line2: 'Engineering',
      line3: 'Conference',
    },
    subtitle: "For engineers who know what they do, but not who they are.\nReal stories. Real Impact.",
  },
  speakers: [
    {
      name: 'Maya Chen',
      focus: 'Embedded Systems & Creative Code',
      bio: 'From gaming hardware to interactive art installations. Explores how constraints breed creativity.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'Jordan Reeves',
      focus: 'Open Source & Community',
      bio: 'Maintainer of critical infrastructure. Talks about burnout, recovery, and finding your people.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'Dr. Amara Okafor',
      focus: 'Hardware Security & Ethics',
      bio: 'Researcher turned industry. Connecting silicon vulnerabilities to human trust.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'Sam Nakamura',
      focus: 'Robotics & Accessibility',
      bio: 'Building assistive technology. On designing for edge cases that become core features.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    },
  ],
  team: [
    { name: 'Mariia Yermolenko', role: 'Lead Organizer', image: '/team/mariia.jpg' },
    { name: 'Fatimata Abdou Dramane', role: 'Program Director', image: '/team/fatima.jpg' },
    { name: 'Asif Rahman', role: 'Logistics Lead', image: '/team/asif.jpg' },
    { name: 'Paul Chukwu', role: 'Sponsorship Lead', image: '/team/paul.jpg' },
    { name: 'Basma Ben Taleb', role: 'Marketing Lead', image: '/team/basma.jpg' },
    { name: 'Dounya', role: ' ', image: '/team/placeholder.jpg' },
  ],
  faqs: [
    {
      question: 'Where will the event take place?',
      answer: 'The event will be held at uOttawa. The exact venue will be shared once finalized.',
    },
    {
      question: 'When will the schedule be released?',
      answer: "We'll share the full schedule closer to the event, once speakers are confirmed and details are locked in.",
    },
    {
      question: 'Who is this event for?',
      answer: "Anyone in tech or engineering who has ever felt unsure about their path, questioned where they're going, or wanted a clearer sense of what building things actually means. Students, recent grads, and professionals are all welcome.",
    },
    {
      question: 'Can I participate as a speaker or volunteer?',
      answer: "Yes. We are still welcoming speaker proposals and volunteers. More information is available on the site, and you're welcome to reach out if you're unsure where you fit.",
    },
    {
      question: 'Will food be provided?',
      answer: "Yes. We're planning shared food during the event and will share details closer to the date.",
    },
    {
      question: 'What should I bring?',
      answer: 'Just yourself and an open mind. No preparation required.',
    },
  ],
  ui: {
    nav: {
      about: 'About',
      speakers: 'Speakers',
      event: 'Event',
      team: 'Team',
      contact: 'Contact',
      attend: 'Attend',
    },
    hero: {
      registerNow: 'Register Now',
      learnMore: 'Learn More',
    },
    about: {
      sectionLabel: 'About CEC',
      title: 'Where Engineering Meets ',
      titleHighlight: 'Identity',
      intro: "CEC grew out of the questions we ask once class is over and you are trying to figure out why you do this first of all. It is a space where you will not only see how things work, but why we build them.",
      ourStory: 'Our Story',
      storyP1: "We're a group of students who spend all our time learning circuits, logic, assembly, architecture, but still don't really know what kind of person actually uses all this stuff together. By fourth year, we know what we do but not who we are. First years are asking \"should I switch to CS?\" Fourth years are asking \"what even is computer engineering?\"",
      storyP2: "40-60% of engineering students drop out because of burnout and not seeing where this is going. CEC is our answer to that. It's where engineers share the messy reality. Where you hear about failure and leave seeing your struggles differently.",
      values: [
        {
          title: 'Why Failure Is Necessary',
          description: 'Learn how struggling now shapes the engineer you become later.',
        },
        {
          title: 'Why You Should Write Bad Code',
          description: 'Understand why messy first attempts beat perfect paralysis every time.',
        },
        {
          title: 'Why Solutions Start On Paper',
          description: 'Discover why the best code begins before you ever open your IDE.',
        },
      ],
    },
    event: {
      sectionLabel: 'The Event',
      title: 'One Day. ',
      titleHighlight: 'Lasting Impact.',
      intro: "CEC is a space where engineers talk openly about how they got here and what shaped them along the way. You will hear stories about failure, uncertainty, and slow progress, and how those experiences changed how people think about their work.",
      detailLabels: { date: 'Date', time: 'Time', venue: 'Venue' },
      whatYouExperience: "What You'll Experience",
      scheduleP1: 'The full schedule is still coming together.',
      scheduleP2: 'Expect short talks, shared meals, and time to actually sit with ideas and talk to people who are asking similar questions.',
      scheduleP3: "We're being intentional about leaving space for conversation, reflection, and the kinds of moments that don't fit neatly into a timetable.",
      scheduleP4: 'More details soon.',
      testimonialQuote: "Computer science is no more about computers than astronomy is about telescopes.",
      testimonialAttribution: 'Edsger Dijkstra',
      faqHeading: 'Frequently Asked Questions',
      reserveSpot: 'Reserve Your Spot',
    },
    speakers: {
      sectionLabel: 'Speakers',
      title: 'Voices That ',
      titleHighlight: 'Resonate',
      intro: "Our speakers are engineers, researchers, and builders who have been exactly where you are. People who have questioned their path, survived burnout, and figured out what actually matters. Their stories will show you that what you're going through right now isn't a problem. It's where your story begins.",
      comingSoon: 'Coming Soon!',
      themes: ['Systems Thinking', 'Career Paths', 'Open Source', 'Hardware', 'Ethics', 'Community'],
    },
    team: {
      sectionLabel: 'The Team',
      title: 'Built By ',
      titleHighlight: 'Students',
      intro: "CEC is organized entirely by students who believe in the power of community-driven learning. We're engineers, designers, and builders just like you.",
    },
    contact: {
      sectionLabel: 'Contact',
      title: "Let's ",
      titleHighlight: 'Connect',
      intro: "Have questions? Want to get involved? We'd love to hear from you. Drop us a line or follow along on social media.",
      sendMessage: 'Send us a message',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      placeholders: {
        name: 'Your name',
        email: 'you@example.com',
        message: "What's on your mind?",
      },
      sendButton: 'Send Message',
      stayUpdated: 'Stay Updated',
      newsletterCopy: 'Get schedule announcements, speaker reveals, and event updates delivered to your inbox.',
      subscribe: 'Subscribe',
      followAlong: 'Follow Along',
      orEmailUs: 'Or email us directly at',
      toastOpenEmail: 'Opening your email client. Send the message to reach us.',
      toastNewsletter: "You're on the list! Watch your inbox for updates.",
    },
    footer: {
      tagline: 'Built by engineers, for engineers.',
      copyright: 'Computer Engineering Conference',
    },
    notFound: {
      title: '404',
      description: 'Oops! Page not found',
      returnHome: 'Return to Home',
    },
    meta: {
      title: "CEC '26 — Computer Engineering Conference",
      description: 'A student-driven, TED-style conference connecting computer engineering skills to identity, meaning, and real-world impact. Spring 2026.',
      keywords: 'computer engineering, conference, students, tech, systems thinking, engineering identity',
      ogTitle: "CEC '26 — Computer Engineering Conference",
      ogDescription: 'A student-driven gathering where identity meets systems. Real engineering. Real stories. Real impact.',
    },
  },
};
