import React, {FC, useEffect} from 'react';
import {View, FlatList, ListRenderItem} from 'react-native';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {AnimatedListItem} from '../../components/ListItem/AnimatedListItem';

type ListItemType = {
  id: number;
  title: string;
  subtitle: string;
  route: string;
};

const list: Array<ListItemType> = [
  {
    id: 0,
    title: 'Погода в городе',
    subtitle: 'Выберете город из списка',
    route: 'Cities',
  },
  {
    id: 1,
    title: 'Погода по координатам',
    subtitle: 'Укажите координаты и узнайте погоду',
    route: 'Coordinates',
  },
  {
    id: 2,
    title: 'Геопозиция',
    subtitle: 'Узнать погоду по моему местоположению',
    route: 'MyLocation',
  },
];

export const Main: FC = () => {
  const navigation = useNavigation();

  useEffect(() => {}, []);

  const handlePress = (route: string) => () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: route,
      }),
    );
  };

  const renderItem: ListRenderItem<ListItemType> = ({item}) => (
    <AnimatedListItem
      index={item.id}
      onPress={handlePress(item.route)}
      title={item.title}
      subtitle={item.subtitle}
    />
  );

  const renderList = () => <FlatList data={list} renderItem={renderItem} />;

  return <View>{renderList()}</View>;
};
