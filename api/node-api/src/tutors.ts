export type Tutor = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  dateOfBirth: Date;
  subjects: string[];
};

export const TUTORS: Tutor[] = [
  {
    id: 1,
    firstName: "daniel",
    lastName: "schimanski",
    email: "danny.manski135@gmail.com",
    userName: "dsch123",
    dateOfBirth: new Date(1997, 11, 18),
    subjects: ["maths", "computer science", "physics"],
  },
  {
    id: 2,
    firstName: "braxton",
    lastName: "box",
    email: "braxton@brainbox.co.nz",
    userName: "bbox123",
    subjects: ["physical education", "calculus", "english"],
    dateOfBirth: new Date(1995, 6, 3),
  },
];
