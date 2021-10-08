import type { Node } from 'react';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Button from './src/components/Button';
import Display from './src/components/Display';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [displayVal, setDisplayVal] = useState(0);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const addDigit = n => {
    const newVal = displayVal === 0 ? n : displayVal + n;
    setDisplayVal(newVal);
  };

  const clearMemory = () => {
    setDisplayVal(0);
  };

  const setOperation = operation => {};

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.container}>
          <Display value={displayVal} />
          <View style={styles.buttons}>
            <Button label="AC" triple onClick={() => clearMemory()} />
            <Button label="/" operation onClick={() => setOperation('/')} />
            <Button label="7" onClick={() => addDigit('7')} />
            <Button label="8" onClick={() => addDigit('8')} />
            <Button label="9" onClick={() => addDigit('9')} />
            <Button label="*" operation onClick={() => setOperation('*')} />
            <Button label="4" onClick={() => addDigit('4')} />
            <Button label="5" onClick={() => addDigit('5')} />
            <Button label="6" onClick={() => addDigit('6')} />
            <Button label="-" operation onClick={() => setOperation('-')} />
            <Button label="1" onClick={() => addDigit('1')} />
            <Button label="2" onClick={() => addDigit('2')} />
            <Button label="3" onClick={() => addDigit('3')} />
            <Button label="+" operation onClick={() => setOperation('+')} />
            <Button label="0" onClick={() => addDigit('0')} />
            <Button label="." onClick={() => addDigit('.')} />
            <Button
              label="="
              operation
              onClick={() => setOperation('=')}
              double
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default App;
