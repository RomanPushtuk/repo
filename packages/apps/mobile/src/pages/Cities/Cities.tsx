import React, {FC} from 'react';
import {View, Text, SectionList} from 'react-native';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {ListItem} from '../../components/ListItem';
import cities from './cities.json';

const [belarus] = cities;
const {regions} = belarus;
const DATA = regions.map(item => ({title: item.name, data: item.cities}));

export const Cities: FC = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'City',
      }),
    );
  };

  const renderList = () => {
    return (
      <SectionList
        sections={DATA}
        renderItem={({item}) => (
          <ListItem
            onPress={handlePress}
            title={item.name}
            subtitle={`lat:${item.lat} lng:${item.lng}`}
          />
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              color: 'black',
              marginBottom: 8,
              marginTop: 4,
            }}>
            {title}
          </Text>
        )}
      />
    );
  };
  return <View>{renderList()}</View>;
};
