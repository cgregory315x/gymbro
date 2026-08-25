export type WorkoutSet = {
  id: string;
  weight: string;
  reps: string;
};

export type Exercise = {
  id: string;
  name: string;
  sets: WorkoutSet[];
};

export type Workout = {
  id: string;
  title: string;
  date: string;
  notes: string;
  exercises: Exercise[];
};
