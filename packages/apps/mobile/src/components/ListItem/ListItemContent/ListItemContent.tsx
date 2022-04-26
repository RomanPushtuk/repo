import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';

type ListItemContentProps = {
  children?: React.ReactNode;
};

const styles = StyleSheet.create({
  container: {},
});

export const ListItemContent: FC<ListItemContentProps> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};
