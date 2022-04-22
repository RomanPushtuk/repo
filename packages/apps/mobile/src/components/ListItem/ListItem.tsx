import React, {FC} from 'react';
import {Pressable} from 'react-native';
import {ListItem as UIListItem, Icon} from '@rneui/themed';

type ListItemProps = {
  onPress: () => void;
  title: string;
  subtitle: string;
  iconName?: string;
};

export const ListItem: FC<ListItemProps> = ({
  onPress,
  title,
  subtitle,
  iconName = 'chevron-right',
}) => {
  return (
    <Pressable onPress={onPress}>
      <UIListItem bottomDivider>
        <UIListItem.Content>
          <UIListItem.Title>{title}</UIListItem.Title>
          <UIListItem.Subtitle>{subtitle}</UIListItem.Subtitle>
        </UIListItem.Content>
        <Icon name={iconName} />
      </UIListItem>
    </Pressable>
  );
};
