import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
  
    mainContainer: {
        flex: 1,
    },
    loadingView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    loader:{
      height: hp((100/ 667) * 100),
      width: wp((100/ 375) * 100),
    },
    mainTempContainer:{
      flex: 0.5,
      width: '100%',
      borderBottomWidth: 2,
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomColor: '#000'
    },
    mainTempText:{
      fontSize: 40,
      fontWeight: 'bold'
    },
    regionText:{
      fontSize: 20,
      marginTop: hp((20/ 667) * 100)
    },
    flatlistContainer:{
      borderBottomWidth: 2,
      borderBottomColor: '#000',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: wp((40/ 375) * 100),
    },
    flatlistText:{
      fontSize: 15,
      fontWeight: '700',
      paddingVertical: 20
    },
    flatList:{
      flex: 0.5
    },
    flatlistDay:{
      fontSize: 15,
      paddingVertical: 20
    }
  });