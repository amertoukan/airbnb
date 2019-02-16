import React, { Component } from 'react'; 

import { 
    View, Text, StyleSheet
} from 'react-native'; 

class Inbox extends Component { 
    render(){ 
        return ( 
        <View style  = {style.container}> 
            <Text> Inbox </Text>
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
export default Inbox;