import { Pressable, StyleSheet, Text } from 'react-native';
import type { CampusEvent } from '../data/events';

type EventRowProps = {
  event: CampusEvent;
  saved?: boolean;
  onPress: () => void;
  onLongPress: () => void;
};

export default function EventRow({ event, saved = false, onPress, onLongPress }: EventRowProps) {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.meta}>
        {event.date} · {event.place}
      </Text>
      {saved && <Text style={styles.saved}>★ Saved</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 44,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#d0d7e2',
    backgroundColor: '#fff',
  },
  cardPressed: {
    backgroundColor: '#e6f0fb',
    borderColor: '#005BB5',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  meta: {
    marginTop: 4,
    fontSize: 14,
    color: '#626267',
  },
  saved: {
    marginTop: 6,
    fontSize: 14,
    color: '#b8860b',
    fontWeight: '600',
  },
});
