import { Request, Response } from "express";
import { TUTORS, Tutor } from "../tutors";

export const getAllTutors = () => TUTORS;

export const getTutor = (id: number) => {
  const tutor = TUTORS.filter((tutor) => tutor.id === id);

  if (tutor.length < 1) {
    return null;
  }

  return tutor[0];
};

export const createTutor = (body: {
  id?: number;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  dateOfBirth: string;
  subjects: string[];
}) => {
  // If request body isn't in the correct format, exit function
  if (
    !(
      body &&
      body.firstName &&
      body.lastName &&
      body.userName &&
      body.email &&
      body.dateOfBirth &&
      body.subjects
    )
  ) {
    return null;
  }

  const ids = TUTORS.map((tutor) => tutor.id);

  let newId = 0;
  while (ids.includes(newId)) {
    newId++;
  }

  if (body.id && !ids.includes(body.id)) {
    newId = Number(body.id);
  }

  const newTutor: Tutor = {
    id: newId,
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    userName: body.userName,
    dateOfBirth: new Date(body.dateOfBirth),
    subjects: body.subjects,
  };

  TUTORS.push(newTutor);
  return newTutor;
};

export const deleteTutor = (id: number) => {
  const tutorsWithId = TUTORS.filter((tutor) => tutor.id === id);
  for (const tutor of tutorsWithId) {
    TUTORS.splice(TUTORS.indexOf(tutor), 1);
  }
};
