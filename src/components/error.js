import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

class Error extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.mainContainer}>
          <Text style={styles.text}>Something Went wrong, please try again</Text>
          <TouchableOpacity style={styles.buttonContainer} onPress={()=>{this.props.buttonPressed()}}>
            <Text styles={styles.retryText}>Retry</Text>
          </TouchableOpacity>
      </View>
    );
  }
}


 const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize: 50,
        paddingHorizontal: 30
    },
    buttonContainer:{
        borderWidth: 2,
        borderColor:'#000',
        borderRadius: 5,
        width: wp((100/ 375) * 100), 
        height: hp((50/ 667) * 100),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70
    },
    retryText:{
        fontSize: 18,
    }
  });

export default Error


