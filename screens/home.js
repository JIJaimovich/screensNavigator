import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Home = () => {
    return(
    <View styles={styles.screen}>
        <Text>'Welcome to home'</Text>
    </View>
    )
};

const styles = StyleSheet.create({
    screen:{
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    }
});

export default Home;
