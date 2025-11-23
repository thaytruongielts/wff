import { PartType, Question } from './types';

export const quizData: Question[] = [
  // --- PART 1 ---
  {
    id: 1,
    part: PartType.PART_1,
    questionText: "He is a very _ student. He always gets good marks.",
    options: [
      { id: "A", text: "success" },
      { id: "B", text: "successful" },
      { id: "C", text: "successfully" },
      { id: "D", text: "successor" },
    ],
    correctOptionId: "B"
  },
  {
    id: 2,
    part: PartType.PART_1,
    questionText: "The children are playing _ in the schoolyard.",
    options: [
      { id: "A", text: "happy" },
      { id: "B", text: "happiness" },
      { id: "C", text: "happily" },
      { id: "D", text: "happier" },
    ],
    correctOptionId: "C"
  },
  {
    id: 3,
    part: PartType.PART_1,
    questionText: "My father is a _ at a big factory.",
    options: [
      { id: "A", text: "manage" },
      { id: "B", text: "management" },
      { id: "C", text: "manager" },
      { id: "D", text: "managerial" },
    ],
    correctOptionId: "C"
  },
  {
    id: 4,
    part: PartType.PART_1,
    questionText: "She writes letters to her pen pal _ every month.",
    options: [
      { id: "A", text: "regular" },
      { id: "B", text: "regularly" },
      { id: "C", text: "regulation" },
      { id: "D", text: "regularity" },
    ],
    correctOptionId: "B"
  },
  {
    id: 5,
    part: PartType.PART_1,
    questionText: "The air in the city is getting more and more _.",
    options: [
      { id: "A", text: "pollute" },
      { id: "B", text: "pollution" },
      { id: "C", text: "polluted" },
      { id: "D", text: "polluter" },
    ],
    correctOptionId: "C"
  },
  {
    id: 6,
    part: PartType.PART_1,
    questionText: "This is a _ film. I feel so sad after watching it.",
    options: [
      { id: "A", text: "bore" },
      { id: "B", text: "boringly" },
      { id: "C", text: "boring" },
      { id: "D", text: "boredom" },
    ],
    correctOptionId: "C"
  },
  {
    id: 7,
    part: PartType.PART_1,
    questionText: "He spoke so _ that I could not hear anything.",
    options: [
      { id: "A", text: "quick" },
      { id: "B", text: "quickly" },
      { id: "C", text: "quickness" },
      { id: "D", text: "quicker" },
    ],
    correctOptionId: "B"
  },
  {
    id: 8,
    part: PartType.PART_1,
    questionText: "They are looking for a _ to repair their washing machine.",
    options: [
      { id: "A", text: "mechanic" },
      { id: "B", text: "mechanical" },
      { id: "C", text: "mechanically" },
      { id: "D", text: "mechanism" }, // Changed duplicate "mechanic" to "mechanism" for valid quiz structure
    ],
    correctOptionId: "A"
  },
  {
    id: 9,
    part: PartType.PART_1,
    questionText: "It's very _ to eat too much junk food.",
    options: [
      { id: "A", text: "health" },
      { id: "B", text: "unhealthy" },
      { id: "C", text: "healthily" },
      { id: "D", text: "healthy" },
    ],
    correctOptionId: "B"
  },
  {
    id: 10,
    part: PartType.PART_1,
    questionText: "Mr. Smith works as a _ for the local newspaper.",
    options: [
      { id: "A", text: "reporter" },
      { id: "B", text: "report" },
      { id: "C", text: "reporting" },
      { id: "D", text: "reported" },
    ],
    correctOptionId: "A"
  },
  // --- PART 2 ---
  {
    id: 11,
    part: PartType.PART_2,
    questionText: "She has a _ collection of stamps.",
    options: [
      { id: "A", text: "value" },
      { id: "B", text: "valuable" },
      { id: "C", text: "valuably" },
      { id: "D", text: "valuation" },
    ],
    correctOptionId: "B"
  },
  {
    id: 12,
    part: PartType.PART_2,
    questionText: "They are planning to _ their old house next year.",
    options: [
      { id: "A", text: "rebuild" },
      { id: "B", text: "builder" },
      { id: "C", text: "building" },
      { id: "D", text: "built" },
    ],
    correctOptionId: "A"
  },
  {
    id: 13,
    part: PartType.PART_2,
    questionText: "We were surprised at the _ of the news.",
    options: [
      { id: "A", text: "sudden" },
      { id: "B", text: "suddenly" },
      { id: "C", text: "suddenness" },
      { id: "D", text: "suddenest" },
    ],
    correctOptionId: "C"
  },
  {
    id: 14,
    part: PartType.PART_2,
    questionText: "The children are very _ in the new cartoon.",
    options: [
      { id: "A", text: "interest" },
      { id: "B", text: "interestingly" },
      { id: "C", text: "interested" },
      { id: "D", text: "uninteresting" },
    ],
    correctOptionId: "C"
  },
  {
    id: 15,
    part: PartType.PART_2,
    questionText: "My favorite _ is watching TV.",
    options: [
      { id: "A", text: "relax" },
      { id: "B", text: "relaxed" },
      { id: "C", text: "relaxing" },
      { id: "D", text: "relaxation" },
    ],
    correctOptionId: "D"
  },
  {
    id: 16,
    part: PartType.PART_2,
    questionText: "Please _ this door before you leave.",
    options: [
      { id: "A", text: "lock" },
      { id: "B", text: "locked" },
      { id: "C", text: "locker" },
      { id: "D", text: "locking" },
    ],
    correctOptionId: "A"
  },
  {
    id: 17,
    part: PartType.PART_2,
    questionText: "He is known for his _ in solving difficult problems.",
    options: [
      { id: "A", text: "clever" },
      { id: "B", text: "cleverly" },
      { id: "C", text: "cleverness" },
      { id: "D", text: "cleverest" },
    ],
    correctOptionId: "C"
  },
  {
    id: 18,
    part: PartType.PART_2,
    questionText: "This book is very _ for students preparing for the exam.",
    options: [
      { id: "A", text: "use" },
      { id: "B", text: "useful" },
      { id: "C", text: "useless" },
      { id: "D", text: "usage" },
    ],
    correctOptionId: "B"
  },
  {
    id: 19,
    part: PartType.PART_2,
    questionText: "They _ to come to my party tomorrow.",
    options: [
      { id: "A", text: "decision" },
      { id: "B", text: "decisive" },
      { id: "C", text: "decisively" },
      { id: "D", text: "decided" },
    ],
    correctOptionId: "D"
  },
  {
    id: 20,
    part: PartType.PART_2,
    questionText: "What is the _ of this mountain?",
    options: [
      { id: "A", text: "high" },
      { id: "B", text: "highly" },
      { id: "C", text: "higher" },
      { id: "D", text: "height" },
    ],
    correctOptionId: "D"
  },
  // --- PART 3 ---
  {
    id: 21,
    part: PartType.PART_3,
    questionText: "My sister wants to become a famous _.",
    options: [
      { id: "A", text: "act" },
      { id: "B", text: "actress" },
      { id: "C", text: "action" },
      { id: "D", text: "active" },
    ],
    correctOptionId: "B"
  },
  {
    id: 22,
    part: PartType.PART_3,
    questionText: "We must _ the environment for future generations.",
    options: [
      { id: "A", text: "protection" },
      { id: "B", text: "protect" },
      { id: "C", text: "protective" },
      { id: "D", text: "protected" },
    ],
    correctOptionId: "B"
  },
  {
    id: 23,
    part: PartType.PART_3,
    questionText: "I like listening to pop music. It makes me feel _.",
    options: [
      { id: "A", text: "excite" },
      { id: "B", text: "excitedly" },
      { id: "C", text: "excited" },
      { id: "D", text: "excitement" },
    ],
    correctOptionId: "C"
  },
  {
    id: 24,
    part: PartType.PART_3,
    questionText: "A lot of people are worried about the _ of the rainforests.",
    options: [
      { id: "A", text: "destroy" },
      { id: "B", text: "destructive" },
      { id: "C", text: "destroyed" },
      { id: "D", text: "destruction" },
    ],
    correctOptionId: "D"
  },
  {
    id: 25,
    part: PartType.PART_3,
    questionText: "You should drive _ in the city center.",
    options: [
      { id: "A", text: "care" },
      { id: "B", text: "careful" },
      { id: "C", text: "carefully" },
      { id: "D", text: "careless" },
    ],
    correctOptionId: "C"
  },
  {
    id: 26,
    part: PartType.PART_3,
    questionText: "Nam is a _ football player. He plays for the school team.",
    options: [
      { id: "A", text: "skill" },
      { id: "B", text: "skillfully" },
      { id: "C", text: "skillful" },
      { id: "D", text: "unskilled" },
    ],
    correctOptionId: "C"
  },
  {
    id: 27,
    part: PartType.PART_3,
    questionText: "The teacher gave us a _ to complete at home.",
    options: [
      { id: "A", text: "assign" },
      { id: "B", text: "assignment" },
      { id: "C", text: "assigned" },
      { id: "D", text: "assigning" },
    ],
    correctOptionId: "B"
  },
  {
    id: 28,
    part: PartType.PART_3,
    questionText: "She always tries to _ her parents.",
    options: [
      { id: "A", text: "obey" },
      { id: "B", text: "obedient" },
      { id: "C", text: "obedience" },
      { id: "D", text: "obediently" },
    ],
    correctOptionId: "A"
  },
  {
    id: 29,
    part: PartType.PART_3,
    questionText: "My sister is a _. She works at a clinic.",
    options: [
      { id: "A", text: "nurse" },
      { id: "B", text: "nursing" },
      { id: "C", text: "nursed" },
      { id: "D", text: "nursery" },
    ],
    correctOptionId: "A"
  },
  {
    id: 30,
    part: PartType.PART_3,
    questionText: "We had a _ trip to the beach last week.",
    options: [
      { id: "A", text: "wonder" },
      { id: "B", text: "wonderfully" },
      { id: "C", text: "wonderful" },
      { id: "D", text: "wondered" },
    ],
    correctOptionId: "C"
  },
];