import React, {FC, useEffect, useState} from 'react';
import {Animated, Dimensions} from 'react-native';
import {ListItemProps, ListItem} from '../ListItem';

type AnimatedListItemProps = ListItemProps & {
  index: number;
};

const config = {
  baseAnimationDelay: 300,
};

export const AnimatedListItem: FC<AnimatedListItemProps> = ({
  index,
  onPress,
  title,
  subtitle,
}) => {
  const window = Dimensions.get('window');
  const offset = useState(new Animated.Value(window.width))[0];

  useEffect(() => {
    Animated.timing(offset, {
      toValue: 0,
      duration: 400,
      useNativeDriver: false,
      delay: config.baseAnimationDelay * index,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        transform: [{translateX: offset}],
      }}>
      <ListItem onPress={onPress} title={title} subtitle={subtitle} />
    </Animated.View>
  );
};
