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
  subtitle: "A half-day conference for engineers who know what they do, but not who they are.\nReal struggles. Real stories. Real perspective.",
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
  { name: 'Elena Rodriguez', role: 'Lead Organizer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face' },
  { name: 'Marcus Johnson', role: 'Program Director', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face' },
  { name: 'Sarah Kim', role: 'Speaker Liaison', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face' },
  { name: 'David Chen', role: 'Operations Lead', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face' },
  { name: 'Priya Patel', role: 'Design Lead', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face' },
  { name: 'James Wilson', role: 'Tech Lead', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face' },
  { name: 'Lisa Nguyen', role: 'Marketing Lead', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face' },
  { name: 'Ahmed Hassan', role: 'Community Lead', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop&crop=face' },
] as const;

export const faqs = [
  {
    question: 'Where is the venue and how do I get there?',
    answer: 'CEC takes place in Engineering Hall on Main Campus. The venue is fully accessible and located near public transit stops. Parking is available in Lot B with validation.',
  },
  {
    question: 'Is the venue accessible?',
    answer: 'Yes! The venue is fully wheelchair accessible with ramps, elevators, and accessible restrooms. We also provide reserved seating and can accommodate other accessibility needs—just let us know when you register.',
  },
  {
    question: 'When will the schedule be released?',
    answer: "The detailed schedule will be released 2 weeks before the event. You'll receive it by email and it will be posted on this website. Expect a mix of talks, panels, and networking sessions.",
  },
  {
    question: 'Can I participate as a speaker or volunteer?',
    answer: "We're always looking for voices and hands! Speaker applications for CEC '26 are closed, but volunteer applications open 1 month before the event. Join our mailing list to be notified.",
  },
  {
    question: 'Is food provided?',
    answer: 'Yes! Registration includes lunch, coffee, and snacks. We accommodate dietary restrictions—make sure to note yours during registration.',
  },
  {
    question: 'What should I bring?',
    answer: 'Bring yourself, an open mind, and maybe a notebook. Some sessions have optional hands-on components—we\'ll provide materials, but feel free to bring a laptop if you want to follow along.',
  },
] as const;
