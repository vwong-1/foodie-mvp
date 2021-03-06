import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet } from 'react-native';

//components
import ProductListItem from './ProductListItem';

const ProductList = ({ setProduct, switchView, products }) => {

  const listItems = ({ item }) => <ProductListItem switchView={switchView} product={item} setProduct={setProduct} />;

  return (
    <View style = { styles.container } >
      <SafeAreaView>
        <FlatList data={products} renderItem={listItems} keyExtractor={item => item.food_id.toString()} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '90%',
    paddingBottom: '7%',
  },
});

export default ProductList;