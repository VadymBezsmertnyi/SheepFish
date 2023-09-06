import React, {useEffect, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './Input.styles';

type InputProps = {
  label: string;
  placeholder?: string;
  valueState: string;
  type?: 'numeric';
  onChange: (value: string) => void;
};

export const Input = ({
  label,
  placeholder,
  valueState,
  type,
  onChange,
}: InputProps) => {
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
        keyboardType={type}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
      />
    </View>
  );
};
