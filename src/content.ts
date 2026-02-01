/**
 * CEC site content — edit this file to change event details, links, people, and copy.
 * Components import from here so non-devs can update content without touching component code.
 */

export const event = {
  date: 'March 28, 2026',
  time: '2:00 PM - 5:00 PM',
  venue: 'University of Ottawa',
  ctaSubtext: 'Limited number of attendees • Early registration recommended',
} as const;

export const links = {
  registration: 'https://luma.com/aoycaats',
  email: 'hello@cecconference.com',
  instagram: {
    url: 'https://www.instagram.com/cegsc.ieee.uottawa/',
    handle: '@cegsc.ieee.uottawa',
  },
  linkedin: {
    url: 'https://linkedin.com',
    handle: '/cec-conference',
  },
} as const;

export const hero = {
  tagline: "Spring 2026 • Registration Open",
  title: {
    line1: 'Computer',
    line2: 'Engineering',
    line3: 'Conference',
  },
  subtitle: "For engineers who know what they do, but not who they are.\nReal stories. Real Impact.",
} as const;

export const speakers = [
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
] as const;

export const team = [
  { name: 'Mariia Yermolenko', role: 'Lead Organizer', image: '/team/mariia.jpg' },
  { name: 'Fatima ...', role: 'Speakers Liaison', image: '/team/fatima.jpg' },
  { name: 'Asif ...', role: 'Logistics Lead', image: '/team/placeholder.jpg' },
  { name: 'Paul ...', role: 'Sponsorship Lead', image: '/team/paul.jpg' },
  { name: 'Basma ...', role: 'Marketing Lead', image: '/team/placeholder.jpg' },
  { name: 'Dounya ...', role: '...', image: '/team/placeholder.jpg' },
  // Lead Organizer, Program Director, Speaker Liaison, Operations Lead, Design Lead, Tech Lead, Marketing Lead, Community Lead
  // Last two team members commented out for now
  // { name: 'Lisa Nguyen', role: 'Marketing Lead', image: '/team/placeholder.jpg' },
  // { name: 'Ahmed Hassan', role: 'Community Lead', image: '/team/placeholder.jpg' },
] as const;

export const faqs = [
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
] as const;
