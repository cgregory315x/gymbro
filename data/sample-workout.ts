import type { Workout } from '@/types/workout';

export const SampleWorkout: Workout = {
  id: 'workout-001',
  title: 'Workout',
  date: 'August 25, 2026',
  notes: 'Focus on form',
  exercises: [
    {
      id: 'exercise-001',
      name: 'Barbell Squat',
      sets: [
        {
          id: 'set-001',
          weight: '100',
          reps: '8',
        },
        {
          id: 'set-002',
          weight: '1000',
          reps: '8',
        },
        {
          id: 'set-003',
          weight: '100',
          reps: '8',
        },
      ],
    },
    {
      id: 'exercise-002',
      name: 'Incline Bench Press',
      sets: [
        {
          id: 'set-004',
          weight: '100',
          reps: '10',
        },
        {
          id: 'set-005',
          weight: '100',
          reps: '10',
        },
        {
          id: 'set-006',
          weight: '100',
          reps: '10',
        },
      ],
    },
    {
      id: 'exercise-003',
      name: 'Lat Pulldown',
      sets: [
        {
          id: 'set-007',
          weight: '115',
          reps: '10',
        },
        {
          id: 'set-008',
          weight: '115',
          reps: '10',
        },
        {
          id: 'set-009',
          weight: '115',
          reps: '10',
        },
      ],
    },
  ],
};
