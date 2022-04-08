import React from 'react';
import {useDispatch, useSelector, pending, RootState} from '@repo/redux-module';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  Button,
} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';

import {BASE_URL} from './configs';

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector<RootState>(store => store.weather);

  const onClick = () => {
    dispatch(pending());
  };

  const stringifyData = JSON.stringify(data, null, ' ');

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        <View>
          <Button title="Fetch weather" onPress={onClick} />
          <Text>BASE_URL = {BASE_URL}</Text>
          <Text>weatherData = {stringifyData}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
