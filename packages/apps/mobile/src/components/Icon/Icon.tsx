import React, {FC} from 'react';
import {Image, View, StyleSheet, ImageSourcePropType} from 'react-native';

type IconType = {
  source: ImageSourcePropType;
};

const styles = StyleSheet.create({
  container: {
    height: 16,
    width: 16,
  },
  icon: {
    width: 16,
    height: 16,
  },
});

export const Icon: FC<IconType> = ({source}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={source} />
    </View>
  );
};
