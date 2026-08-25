import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const sampleWorkout = {
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
          weight: 100,
          reps: 8,
        },
        {
          id: 'set-002',
          weight: 100,
          reps: 8,
        },
        {
          id: 'set-003',
          weight: 100,
          reps: 8,
        },
      ],
    },
    {
      id: 'exercise-002',
      name: 'Incline Bench Press',
      sets: [
        {
          id: 'set-004',
          weight: 100,
          reps: 10,
        },
        {
          id: 'set-005',
          weight: 100,
          reps: 10,
        },
        {
          id: 'set-006',
          weight: 100,
          reps: 10,
        },
      ],
    },
    {
      id: 'exercise-003',
      name: 'Lat Pulldown',
      sets: [
        {
          id: 'set-007',
          weight: 115,
          reps: 10,
        },
        {
          id: 'set-008',
          weight: 115,
          reps: 10,
        },
        {
          id: 'set-009',
          weight: 115,
          reps: 10,
        },
      ],
    },
  ],
};

// This is the main entry point of the app. You can edit this file to change the content of the app's main screen. View is semantically equal to div, and is case sensitive.
export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{sampleWorkout.title}</Text>
          <Text style={styles.date}>{sampleWorkout.date}</Text>
        </View>
        {sampleWorkout.notes ? (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Notes</Text>
            <Text style={styles.notes}>{sampleWorkout.notes}</Text>
          </View>
        ) : null}

        <View style={styles.exerciseList}>
          {sampleWorkout.exercises.map((exercise) => (
            <View key={exercise.id} style={styles.exerciseCard}>
              <Text style={styles.exerciseName}>{exercise.name}</Text>

              <View style={styles.setList}>
                {exercise.sets.map((set, index) => (
                  <View key={set.id} style={styles.setRow}>
                    <Text style={styles.setNumber}>Set {index + 1}</Text>
                    <Text style={styles.setDetail}>{set.weight} lbs</Text>
                    <Text style={styles.setDetail}>{set.reps} reps</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 24,
    gap: 24,
  },
  header: {
    gap: 6,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
  },
  date: {
    fontSize: 16,
    color: '#6b7280',
  },
  section: {
    gap: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  notes: {
    fontSize: 16,
    lineHeight: 24,
    color: '#374151',
  },
  exerciseList: {
    gap: 16,
  },
  exerciseCard: {
    padding: 16,
    gap: 12,
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
  },
  setList: {
    gap: 8,
  },
  setRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#d1d5db',
  },
  setNumber: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
  },
  setDetail: {
    width: 72,
    fontSize: 16,
    color: '#374151',
    textAlign: 'right',
  },
});
