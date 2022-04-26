import React, {FC} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {Icon} from '../Icon';
import {ListItemContent} from './ListItemContent';
import {ListItemTitle} from './ListItemTitle';
import {ListItemSubtitle} from './ListItemSubtitle';

const right = require('./img/right.png');

export type ListItemProps = {
  onPress: () => void;
  title: string;
  subtitle: string;
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#D6DBDF',
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 20,
  },
});

export const ListItem: FC<ListItemProps> = ({onPress, title, subtitle}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <ListItemContent>
        <ListItemTitle>{title}</ListItemTitle>
        <ListItemSubtitle>{subtitle}</ListItemSubtitle>
      </ListItemContent>
      <Icon source={right} />
    </Pressable>
  );
};
