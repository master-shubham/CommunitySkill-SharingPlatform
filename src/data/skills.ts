export interface Skill {
  id: number;
  title: string;
  author: string;
  category: string;
  description: string;
  image: string;
}

export const skillsData: Skill[] = [
  {
    id: 1,
    title: "Learn Python",
    author: "Alice Johnson",
    category: "Programming",
    description: "Beginner friendly Python sessions.",
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
  },
  {
    id: 2,
    title: "React for Beginners",
    author: "Mark Stevens",
    category: "Programming",
    description: "Understand React fundamentals.",
    image: "https://images.unsplash.com/photo-1581276879432-15a19d654956",
  },
  {
    id: 3,
    title: "Graphic Design Tips",
    author: "Laura Kim",
    category: "Design",
    description: "Learn modern UI/UX design basics.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
  },
];
