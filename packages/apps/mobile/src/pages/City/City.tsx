import React, {FC} from 'react';
import {View, Text} from 'react-native';

const info = {
  lat: '54.90334',
  lon: '33.49500',
  offset: '405999',
};

const fact = {
  temp: '15',
  feels_like: '9',
  condition: 'Ярко',
  wind_speed: '15',
  wind_dir: 'Южный',
  pressure_mm: '744',
  humidity: '70',
};

export const City: FC = () => {
  return (
    <View>
      <Text>Широта: {info.lat}</Text>
      <Text>Долгота: {info.lon}</Text>
      <Text>Часовой пояс в секундах от UTC: {info.offset}</Text>

      <Text>Температура (°C): {fact.temp}</Text>
      <Text>Ощущаемая температура (°C): {fact.feels_like}</Text>
      <Text>Погодное описание: {fact.condition}</Text>
      <Text>Скорость ветра (в м/с): {fact.wind_speed}</Text>
      <Text>Направление ветра: {fact.wind_dir}</Text>
      <Text>Давление (в мм рт. ст.): {fact.pressure_mm}</Text>
      <Text>Влажность воздуха (в процентах): {fact.humidity}</Text>
    </View>
  );
};
