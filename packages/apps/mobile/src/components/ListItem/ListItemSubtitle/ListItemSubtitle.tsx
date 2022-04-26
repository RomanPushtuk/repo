import React, {FC} from 'react';
import {Text, StyleSheet} from 'react-native';

type ListItemSubtitleProps = {
  children?: React.ReactNode;
};

const styles = StyleSheet.create({
  text: {},
});

export const ListItemSubtitle: FC<ListItemSubtitleProps> = ({children}) => {
  return <Text style={styles.text}>{children}</Text>;
};
