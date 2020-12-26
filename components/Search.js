import React, { Component } from 'react';
import { View, TextInput, StyleSheet} from 'react-native';

const Search = ({ searchSubmit }) => {
  const [value, onChangeText] = React.useState('');

  return (
    <TextInput
      style={styles.input}
      onChangeText={text => onChangeText(text)}
      value={value}
      placeholder={'Test'}
      returnKeyType={'search'}
      onSubmitEditing={() => searchSubmit(value)}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '90%',
  },
});

export default Search;
