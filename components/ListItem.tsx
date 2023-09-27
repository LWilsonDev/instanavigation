import React from 'react';
import {
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import {ImageDataType} from '../types';
import {ListRenderItem} from '@shopify/flash-list';
import {Link} from 'expo-router';
import Animated from 'react-native-reanimated';

const {width} = Dimensions.get('screen');

const ListItem: ListRenderItem<ImageDataType> = ({item}) => {
  const handlePress = () => {
    // navigation.navigate('Detail', {image: item});
  };

  return (
    <Link href={{pathname: '/detail', params: {id: item.id}}} asChild>
      <TouchableOpacity>
        <Animated.View sharedTransitionTag={`${item.id.toString()}-container`}>
          <Animated.Image
            sharedTransitionTag={`${item.id.toString()}-image`}
            style={styles.image}
            source={{uri: item.uri}}
          />
        </Animated.View>
      </TouchableOpacity>
    </Link>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  image: {
    width: width / 3,
    height: width / 3,
  },
});
