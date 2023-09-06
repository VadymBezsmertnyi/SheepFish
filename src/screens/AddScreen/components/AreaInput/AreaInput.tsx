import React, {useEffect, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './AreaInput.styles';

type AreaInputProps = {
  label: string;
  placeholder?: string;
  valueState: string;
  onChange: (value: string) => void;
};

export const AreaInput = ({
  label,
  placeholder,
  valueState,
  onChange,
}: AreaInputProps) => {
  const [value, setValue] = useState('');

  const onChangeText = (newValue: string) => {
    setValue(newValue);
    onChange(newValue);
  };

  useEffect(() => {
    if (value !== valueState) {
      setValue(valueState);
    }
  }, [value, valueState]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        multiline={true}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
      />
    </View>
  );
};
