export enum PartType {
  PART_1 = "Phần 1: Danh từ chỉ người, Tính từ, và Trạng từ",
  PART_2 = "Phần 2: Động từ, Danh từ chỉ vật/khái niệm, và Tính từ",
  PART_3 = "Phần 3: Tổng hợp"
}

export interface Option {
  id: string; // "A", "B", "C", "D"
  text: string;
}

export interface Question {
  id: number;
  part: PartType;
  questionText: string;
  options: Option[];
  correctOptionId: string;
}

export interface QuizState {
  answers: Record<number, string>; // questionId -> optionId
  isSubmitted: boolean;
  score: number;
}