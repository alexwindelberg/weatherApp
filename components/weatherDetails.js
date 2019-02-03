import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const weatherDetails = () => {
    return (
        <View style={styles.messageBox}>
            <View>
                <Text style={styles.messageBoxTitleText}>A simple mesage</Text>
            </View>
            <View>
                <Text style={styles.messageBoxBodyText}>This is just a dummy sample it will help us to see the alignment in action.</Text>
            </View>
        </View>
      );
}

var styles = StyleSheet.create({
    messageBox:{
        backgroundColor:'#ef553a',
        width:300,
        paddingTop:10,
        paddingBottom:20,
        paddingLeft:20,
        paddingRight:20, 
        borderRadius:10
    },
    messageBoxTitleText:{
        fontWeight:'bold',
        color:'#fff',
        textAlign:'center',
        fontSize:20,
        marginBottom:10
    },
    messageBoxBodyText:{
        color:'#fff',
        fontSize:16
    }
});


export default weatherDetails;