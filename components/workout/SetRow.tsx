import type { WorkoutSet } from '@/types/workout';
import { StyleSheet, Text, View } from 'react-native';

type SetRowProps = {
  set: WorkoutSet;
  displayNumber: number;
  weightUnitLabel: string;
};

export function SetRow({ set, displayNumber, weightUnitLabel }: SetRowProps) {
  return (
    <View style={styles.row}>
      <Text style={styles.number}>Set {displayNumber}</Text>
      <Text style={styles.detail}>
        {set.weight} {weightUnitLabel}
      </Text>
      <Text style={styles.detail}>{set.reps} reps</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#d1d5db',
  },
  number: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
  },
  detail: {
    width: 72,
    fontSize: 16,
    color: '#374151',
    textAlign: 'right',
  },
});
