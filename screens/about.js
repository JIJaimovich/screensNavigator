import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const About = () => {
    return(
    <View styles={styles.screen}>
        <Text>'Learn more about us'</Text>
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

export default About;