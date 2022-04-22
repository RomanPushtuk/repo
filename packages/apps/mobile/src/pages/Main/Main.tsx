import React, {FC} from 'react';
import {View} from 'react-native';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {ListItem} from '../../components/ListItem';

type ListItemType = {
  title: string;
  subtitle: string;
  route: string;
};

const list: Array<ListItemType> = [
  {
    title: 'Погода в городе',
    subtitle: 'Выберете город из списка',
    route: 'Cities',
  },
  {
    title: 'Погода по координатам',
    subtitle: 'Укажите координаты и узнайте погоду',
    route: 'Coordinates',
  },
  {
    title: 'Геопозиция',
    subtitle: 'Узнать погоду по моему местоположению',
    route: 'Geoposition',
  },
];

export const Main: FC = () => {
  const navigation = useNavigation();

  const handlePress = (route: string) => () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: route,
      }),
    );
  };

  const renderList = () => {
    return list.map((item, index) => (
      <ListItem
        key={index}
        onPress={handlePress(item.route)}
        title={item.title}
        subtitle={item.subtitle}
      />
    ));
  };

  return <View>{renderList()}</View>;
};
