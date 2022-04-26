import React, {FC} from 'react';
import {
  View,
  Text,
  SectionList,
  StyleSheet,
  SectionListRenderItem,
  SectionListData,
} from 'react-native';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {ListItem} from '../../components/ListItem';
import cities from './cities.json';

const [belarus] = cities;
const {regions} = belarus;
const DATA = regions.map(item => ({
  title: item.name,
  data: item.cities,
}));

type City = {
  name: string;
  lat: number;
  lng: number;
};

type Section = {
  title: string;
  data: Array<City>;
};

const styles = StyleSheet.create({
  sectionHeader: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
    marginBottom: 8,
    marginTop: 4,
  },
});

export const Cities: FC = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'City',
      }),
    );
  };

  const renderItem: SectionListRenderItem<City, Section> = ({item}) => (
    <ListItem
      onPress={handlePress}
      title={item.name}
      subtitle={`lat:${item.lat} lng:${item.lng}`}
    />
  );

  const renderSectionHeader = ({
    section: {title},
  }: {
    section: SectionListData<City, Section>;
  }) => <Text style={styles.sectionHeader}>{title}</Text>;

  const renderList = () => {
    return (
      <SectionList
        sections={DATA}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    );
  };
  return <View>{renderList()}</View>;
};
