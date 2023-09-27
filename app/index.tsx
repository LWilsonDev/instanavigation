import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import ListItem from '../components/ListItem';
import {FlashList} from '@shopify/flash-list';
import {sampleImages} from '../data/images';

const {width} = Dimensions.get('screen');

const List = () => {
  return (
    <View style={styles.container}>
      <FlashList
        estimatedItemSize={width / 3}
        numColumns={3}
        data={sampleImages}
        renderItem={ListItem}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
