import { Pressable, StyleSheet, Text } from 'react-native';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import Animated, { FadeIn, FadeOut, LinearTransition, ZoomIn } from 'react-native-reanimated';
import type { CampusEvent } from '../data/events';

type EventRowProps = {
  event: CampusEvent;
  saved?: boolean;
  onPress: () => void;
  onToggleSaved: () => void;
};

export default function EventRow({ event, saved = false, onPress, onToggleSaved }: EventRowProps) {
  return (
    <Animated.View entering={FadeIn} exiting={FadeOut} layout={LinearTransition}>
      <Swipeable
        friction={2}
        rightThreshold={60}
        renderRightActions={(_progress, _translation, swipeable) => (
          <Pressable
            onPress={() => {
              onToggleSaved();
              swipeable.close();
            }}
            style={styles.action}
          >
            <Text style={styles.actionText}>{saved ? 'Unsave' : 'Save'}</Text>
          </Pressable>
        )}
      >
        <Pressable
          onPress={onPress}
          onLongPress={onToggleSaved}
          style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
        >
          <Text style={styles.title}>{event.title}</Text>
          <Text style={styles.meta}>
            {event.date} · {event.place}
          </Text>
          {saved && (
            <Animated.Text entering={ZoomIn} style={styles.saved}>
              ★ Saved
            </Animated.Text>
          )}
        </Pressable>
      </Swipeable>
    </Animated.View>
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
  action: {
    minHeight: 44,
    minWidth: 96,
    marginVertical: 6,
    marginRight: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: '#005BB5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
