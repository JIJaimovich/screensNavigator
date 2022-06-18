import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ReviewDetails = () => {
    return(
    <View styles={styles.screen}>
        <Text>'Have more information'</Text>
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

export default ReviewDetails;