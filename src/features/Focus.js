import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import { RoundedButton } from '../components/RoundedButton';
import { spacing} from '../utils/sizes';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(undefined);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          label="What would you like to focus on?"
          value={subject}
          onChangeText={setSubject}
          style={styles.input}
        />
        <RoundedButton
          title="+"
          size={50}
          onPress={() => addSubject(subject)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  inputContainer: {
    flexDirection: 'row',
    gap: spacing.sm,
    padding: spacing.lg,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
});
