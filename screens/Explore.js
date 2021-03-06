import React, { Component } from 'react'; 

import { 
    View, 
    Text, 
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform, 
    StatusBar,
    ScrollView,
    Image, 
    Dimensions
} from 'react-native'; 

import Icon from 'react-native-vector-icons/Ionicons';
import Category from './components/Explore/category';
import Home from './components/Explore/Home'
import { Status } from 'expo-background-fetch';
import { white } from 'ansi-colors';

const {height, width} = Dimensions.get('window')
class Explore extends Component { 
    componentWillMount(){
        this.startHeaderHeight = 80
        if(Platform.OS == 'android') {
            this.startHeaderHeight= 100 + StatusBar.currentHeight
        }
    }
    render(){ 
        return ( 
      <SafeAreaView style = {{flex:1}}>
    <View style = {{flex:1}}>
    <View style = 
        {{
        height: this.startHeaderHeight, 
        backgroundColor: 'white', 
        borderBottomWidth:1, 
        borderBottomColor: '#dddddd'
        }}
    >

    <View style = 
        {{
        flexDirection: 'row', 
        padding: 10, 
        backgroundColor:"white", 
        marginHorizontal: 20,
        shadowOffset : { 
            width : 0, 
            height : 0 
            },
        shadowColor : 'black',
        shadowOpacity: 0.2,
        elevation: 1,
        marginTop: Platform.OS=='android' ? 30 : null
        }}
    >

    <Icon 
        name = 'ios-search' 
        size = {20}
    > 
    
    <TextInput
    underlineColorAndroid = "transparent"
        placeholder = "Explore Toronto"
        placeholderTextColor = 'grey'
        style = 
            {{
            flex : 1, 
            fontWeight :  '700', 
            backgroundColor : 'white',
            }}
    > 
                    
    </TextInput>
    </Icon>
    </View>
    </View>


    <ScrollView
    scrollEventThrottle = {16}
    >

    <View style = {{
        flex: 1,
        backgroundColor: 'white', 
        paddingTop: 20,
    }}>

    <Text
    style = {{
        fontSize: 24, 
        fontWeight: '700',
        paddingHorizontal: 20
    }}>
    What can we help you find, Amer?
    </Text>


    <View style = {{
        height : 130,
        marginTop: 20
    }}> 


    <ScrollView
    horizontal = {true}
    showsHorizontalScrollIndicator = {false}
    >
    
    <Category 
    imageUri = {require ('../assets/images/home.jpg')}
    name = 'Home'
    />

    <Category 
    imageUri = {require ('../assets/images/restaurant.jpg')}
    name = 'Restaurant'
    />

    <Category 
    imageUri = {require ('../assets/images/experiences.jpg')}
    name = 'Experiences'
    />
    </ScrollView>
    </View>


    <View style = {{
        marginTop: 40, 
        paddingHorizontal: 20
    }}>
    <Text style = {{
        fontSize: 24, fontWeight: '700'
    }}> 
    Introducing Airbnb Plus
    </Text>

    <Text  style = {{
        fontWeight: '100', 
        marginTop: 10
    }}>
    A new selection of homes verified for quality and comfort
    </Text>

    <View style = {{
        width: width-40, 
        height: 200,
        marginTop: 20,
    }}>
    <Image style = {{
        flex: 1, 
        height: null, 
        width: null,
        resizeMode: 'cover', 
        borderRadius: 5, 
        borderWidth:1, 
        borderColor: '#dddddd'
    }}
    source = {require ('../assets/images/home.jpg')}
    />
    </View>
    </View>
    </View>

    <View style = {{
        marginTop:40
    }}>
     <Text style = {{
         fontSize: 24,
         fontWeight: '700',
         paddingHorizontal: 20
     }}>
     Homes around the world
     </Text>
     <View style = {{
        paddingHorizontal: 20, 
        marginTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap', 
        justifyContent: 'space-between'
     }}>
     
     <Home 
     width = {width}
     imageUri = {require('../assets/images/home.jpg')}
     title = 'PRIVATE ROOM - 2 BEDS'
     summary = 'The Cosy Palace'
     price = '$ 82'
     rating = {5}
     />

     <Home 
     width = {width}
     imageUri = {require('../assets/images/home.jpg')}
     title = 'PRIVATE ROOM - 2 BEDS'
     summary = 'The Cosy Palace'
     price = '$ 82'
     rating = {3}
     />

     <Home 
     width = {width}
     imageUri = {require('../assets/images/home.jpg')}
     title = 'PRIVATE ROOM - 2 BEDS'
     summary = 'The Cosy Palace'
     price = '$ 82'
     rating = {4}
     />
    </View>
    </View>
    </ScrollView>
    </View>
    </SafeAreaView>
    )}};

const styles = StyleSheet.create ({ 
    continer: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default Explore;