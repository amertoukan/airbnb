import React, { Component } from 'react'; 

import { 
    View, Text, StyleSheet
} from 'react-native'; 

class Explore extends Component { 
    render(){ 
        return ( 
        <View style  = {styles.container}> 
            <Text> Explore </Text>
        </View>
        )
      
    }
}

const styles = StyleSheet.create ({ 
    continer: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default Explore;