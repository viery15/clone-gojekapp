import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  StatusBar,
} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>

        <View style={{backgroundColor: 'white', flex: 1, paddingTop: 15, marginHorizontal: 17}}>
          {/* search bar */}
          <View style={{flexDirection: 'row'}}>
            <View style={{position: 'relative', flex: 1, marginRight: 18}}>
              <TextInput placeholder="What do you want to eat ?" style={{borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 25, fontSize: 13, paddingLeft: 45, paddingRight: 25, backgroundColor: 'white', height: 40}} />
              <Image source={require('./icon/search.png')} style={{width: 25, height: 25, position: 'absolute', left: 10, top: 8}} />
            </View>
            <View style={{width: 35, justifyContent: 'center', alignItems: 'center'}}>
              <Image source={require('./icon/promo.png')} style={{width: 30, height: 30}} />
            </View>
          </View>

          {/* gopay */}
          <View style={{marginTop: 8}}>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', backgroundColor: '#2C5FB8', padding: 14, borderTopLeftRadius: 4, borderTopRightRadius: 4}}>
              <Image source={require('./icon/gopay1.jpg')}  style={{width: 70, height: 20}} />
              <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>Rp50.000</Text>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#2F65BD', borderBottomRightRadius: 4, borderBottomTopRadius: 4}}>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('./icon/pay.png')} style={{width: 36, height: 36}} />
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15}}>Pay</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('./icon/nearby.png')} style={{width: 30, height: 36}} />
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15}}>Nearby</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('./icon/topup.png')} style={{width: 36, height: 36}} />
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15}}>Top Up</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('./icon/more.png')} style={{width: 36, height: 36}} />
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15}}>More</Text>
              </View>
            </View>
          </View>

          {/* main content */}
          <View style={{flexWrap: 'wrap', marginTop: 18}}>
            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginBottom: 18}}>
              <View>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18}}>
                  <Image source={require('./icon/nearby.png')} style={{width: 58, height: 58}} />
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 5}}>Go ride</Text>
              </View>

              <View>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18}}>
                  <Image source={require('./icon/nearby.png')} style={{width: 58, height: 58}} />
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 5}}>Go ride</Text>
              </View>

              <View>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18}}>
                  <Image source={require('./icon/nearby.png')} style={{width: 58, height: 58}} />
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 5}}>Go ride</Text>
              </View>

              <View>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18}}>
                  <Image source={require('./icon/nearby.png')} style={{width: 58, height: 58}} />
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 5}}>Go ride</Text>
              </View>

            </View>
            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
              <View>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18}}>
                  <Image source={require('./icon/nearby.png')} style={{width: 58, height: 58}} />
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 5}}>Go ride</Text>
              </View>

              <View>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18}}>
                  <Image source={require('./icon/nearby.png')} style={{width: 58, height: 58}} />
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 5}}>Go ride</Text>
              </View>

              <View>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18}}>
                  <Image source={require('./icon/nearby.png')} style={{width: 58, height: 58}} />
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 5}}>Go ride</Text>
              </View>

              <View>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18}}>
                  <Image source={require('./icon/nearby.png')} style={{width: 58, height: 58}} />
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 5}}>Go ride</Text>
              </View>

            </View>
          </View>
        </View>


        <View style={{height: 54, flexDirection: 'row'}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('./icon/home.png')} style={{width: 26, height: 26}} />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Home</Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('./icon/order.png')} style={{width: 26, height: 26}} />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Orders</Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('./icon/help.png')} style={{width: 26, height: 26}} />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Help</Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('./icon/inbox.png')} style={{width: 26, height: 26}} />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Inbox</Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('./icon/account.png')} style={{width: 26, height: 26}} />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>Account</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});