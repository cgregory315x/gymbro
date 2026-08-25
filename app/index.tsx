import { ExerciseCard } from '@/components/workout/ExerciseCard';
import { WorkoutHeader } from '@/components/workout/WorkoutHeader';
import { SampleWorkout } from '@/data/sample-workout';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// This is the main entry point of the app. You can edit this file to change the content of the app's main screen. View is semantically equal to div, and is case sensitive.
export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <WorkoutHeader
          title={SampleWorkout.title}
          date={SampleWorkout.date}
          notes={SampleWorkout.notes}
        />

        <View style={styles.exerciseList}>
          {SampleWorkout.exercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
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
  content: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 24,
    gap: 24,
  },
  exerciseList: {
    gap: 16,
  },
});
