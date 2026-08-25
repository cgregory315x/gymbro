import { StyleSheet, Text, View } from 'react-native';

type WorkoutHeaderProps = {
  title: string;
  date: string;
  notes: string;
};

export function WorkoutHeader({ title, date, notes }: WorkoutHeaderProps) {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>

      {notes ? (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notes</Text>
          <Text style={styles.notes}>{notes}</Text>
        </View>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  section: {
    gap: 8,
  },
  notes: {
    fontSize: 16,
    lineHeight: 24,
    color: '#374151',
  },
});
