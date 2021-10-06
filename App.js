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

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.container}>
          <Display value={displayVal} />
          <View style={styles.buttons}>
            <Button label="AC" />
            <Button label="/" />
            <Button label="7" />
            <Button label="8" />
            <Button label="9" />
            <Button label="*" />
            <Button label="4" />
            <Button label="5" />
            <Button label="6" />
            <Button label="-" />
            <Button label="1" />
            <Button label="2" />
            <Button label="3" />
            <Button label="+" />
            <Button label="0" />
            <Button label="." />
            <Button label="=" />
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
