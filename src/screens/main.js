import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import * as action from './../redux/action';
import LottieView from 'lottie-react-native';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoder';
import styles from './style'
import moment from 'moment';
import Error from '../components/error';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      region: '',
      error: false
    };
  }
  componentDidMount() {
     this.getLocation()
  }

  getLocation() {
    Geolocation.getCurrentPosition((position) => {
      var lat = parseFloat(position.coords.latitude);
      var long = parseFloat(position.coords.longitude);
      let location = {
        lat: lat,
        lng: long
      }
      this.forecast(lat, long)
      Geocoder.geocodePosition(location).then((res) => {
        var state = res[0].formattedAddress.split(/[\s,]+/);
        let address
        if (Platform.OS == 'ios') {
          address = `${res[0].locality}, ${state[state.length - 2]}`
        } else {
          address = `${res[0].locality}, ${state[state.length - 3]}`
        }
        this.setState({ region: address })
      })
    },
      (error) => {
        this.setState({error: true})
      });

  }


  forecast(lat, lon) {
    this.animation.play(30, 120);
    this.props.forecast(lat, lon)
      .then((res) => {
        if(res.payload.status == 200){
          console.log("res", res)
          this.setState({ loading: false })
          this.animation.reset();
        }else{
          this.setState({ loading: false, error: true })
          this.animation.reset();
        }
        
      })
  }

  loadingView() {
    if (this.state.loading) {
      return <View style={styles.loadingView}>
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          style={styles.loader}
          source={require('./../../226-splashy-loader.json')}
        />
      </View>
    }
  }

  renderFlatlist() {
    const { data } = this.props
    let tempData = data && data.length > 0 ? data : []
    return (
      <FlatList
        data={tempData}
        style={styles.flatList}
        renderItem={({ item, index }) => {
          if (index > 0) {
            let formatted = moment.unix(item.dt).format("dddd");
            return (
              <View style={styles.flatlistContainer}>
                <Text style={styles.flatlistDay}>{formatted}</Text>
                <Text style={styles.flatlistText}>{item.temp.day}</Text>
              </View>
            )
          }

        }}
      />
    )
  }


  render() {
    const { region, error } = this.state
    const { data } = this.props
    let tempData = data && data.length > 0 ? data : []
    let todayTemp = tempData && data.length > 0 ? data[0].temp.day : 'No Data Available'
    return (
      <View style={styles.mainContainer}>
        {this.loadingView()}
        {(!error && tempData.length>0) ?
          <>
            <View style={styles.mainTempContainer}>
              <Text style={styles.mainTempText}>{`${todayTemp} k`}</Text>
              <Text style={styles.regionText}>{region}</Text>
            </View>
            {this.renderFlatlist()}
          </>
          :
          <Error buttonPressed={() => {this.getLocation()}} />
        }
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  data: state.weatherData
})
const mapDispatchToProps = (dispatch) => ({
  forecast: (lat, lon) => dispatch(action.weatherForeCast(lat, lon))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)

