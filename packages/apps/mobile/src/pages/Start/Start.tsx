import React, {FC} from 'react';
import {Button, View} from 'react-native';
import {useNavigation, CommonActions} from '@react-navigation/native';

export const Start: FC = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Main',
      }),
    );
  };

  return (
    <View>
      <Button title="Начать" onPress={handlePress} />
      <Button
        title="Пожертвовать на сигареты разработчику"
        onPress={()=>{}}
      />
    </View>
  );
};
