import { SetRow } from '@/components/workout/SetRow';
import type { Exercise } from '@/types/workout';
import { StyleSheet, Text, View } from 'react-native';

type ExerciseCardProps = {
  exercise: Exercise;
};

export function ExerciseCard({ exercise }: ExerciseCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{exercise.name}</Text>

      <View style={styles.setList}>
        {exercise.sets.map((set, index) => (
          <SetRow key={set.id} set={set} displayNumber={index + 1} weightUnitLabel="lbs" />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  setList: {
    gap: 16,
  },
  card: {
    padding: 16,
    gap: 12,
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
  },
});
