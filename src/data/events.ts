export type CampusEvent = {
  id: number;
  title: string;
  date: string;
  place: string;
  seats: number;
  description: string;
};

export const events: CampusEvent[] = [
  {
    id: 1,
    title: 'Code & Coffee',
    date: '2026-11-05',
    place: 'KBTU Library',
    seats: 20,
    description:
      'Meet other students, enjoy coffee, solve coding challenges, and share programming tips in a relaxed atmosphere.',
  },
  {
    id: 2,
    title: 'UI/UX Design Challenge',
    date: '2026-11-08',
    place: 'Design Lab',
    seats: 12,
    description:
      'Create a modern app interface in a limited time. Show your creativity, learn design principles, and get feedback from other students.',
  },
  {
    id: 3,
    title: 'Bug Hunt',
    date: '2026-11-12',
    place: 'Computer Lab 204',
    seats: 2,
    description:
      'Become a debugging detective! Find hidden bugs, fix broken code, and test your problem-solving skills in this coding challenge.',
  },
  {
    id: 4,
    title: 'Tech Ideas Hackathon',
    date: '2026-11-15',
    place: 'KBTU Innovation Hub',
    seats: 15,
    description:
      'Work with other students to invent an original technology idea. Plan a useful app, prepare a prototype concept, and present your solution.',
  },
];
