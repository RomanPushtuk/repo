import React, {FC} from 'react';
import {Text, StyleSheet} from 'react-native';

type ListItemTitleProps = {
  children?: React.ReactNode;
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
  },
});

export const ListItemTitle: FC<ListItemTitleProps> = ({children}) => {
  return <Text style={styles.text}>{children}</Text>;
};
