import {useGlobalSearchParams} from 'expo-router';
import React from 'react';

import {StyleSheet, View, Image, Dimensions} from 'react-native';
import {sampleImages} from '../../data/images';
import Animated from 'react-native-reanimated';
const {width} = Dimensions.get('screen');

const Detail = () => {
  const params = useGlobalSearchParams<{id: string}>();
  const image = sampleImages.find((image) => image.id.toString() === params.id);

  return (
    <Animated.View
      sharedTransitionTag={`${params.id}-container`}
      style={styles.container}
    >
      <Animated.Image
        sharedTransitionTag={`${params.id}-image`}
        style={styles.image}
        source={{uri: image?.uri}}
      />
    </Animated.View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
  },
});
