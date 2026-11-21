import { StyleSheet, Text } from 'react-native';
import { useHolidays } from '../hooks/useHolidays';

type HolidayNoteProps = {
  date: string;
};

export default function HolidayNote({ date }: HolidayNoteProps) {
  const year = Number(date.slice(0, 4));
  const { data, isPending, isError } = useHolidays(year);

  let text: string;
  if (isPending) {
    text = 'Checking holidays';
  } else if (isError) {
    text = 'Holidays unavailable';
  } else {
    const holiday = data.find((h) => h.date === date);
    text = holiday ? `Public holiday: ${holiday.name}` : 'Not a public holiday';
  }

  return <Text style={styles.note}>{text}</Text>;
}

const styles = StyleSheet.create({
  note: {
    fontSize: 15,
    marginBottom: 6,
    color: '#005BB5',
  },
});
