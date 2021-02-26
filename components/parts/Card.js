import React, {Component} from "react";
import { StyleSheet, View,Text, Image } from "react-native";

export default class Card extends Component {
    render(){
        return(
            <View style={{alignItems:'center',backgroundColor:this.props.bgcolor, marginTop:10,
             borderRadius:20
            }}>

                <View style={{...styles.bgcard, backgroundColor:'orange',
                 backgroundColor:this.props.color1, ...this.props.style,
                 borderTopLeftRadius:20, borderTopRightRadius:20
                }}>

                    <Text style={styles.text}>18:00 </Text>
                    <Image source={this.props.img} 
                        style={styles.img}
                    />
                </View>
                <View style={{...styles.bgcard,backgroundColor:'pink',elevation:-1,
                   justifyContent:'flex-end', backgroundColor:this.props.color2,
                   ...this.props.style, borderBottomLeftRadius:20, borderBottomRightRadius:20
                }}>
                    <Text style={styles.text}>12</Text>
                </View>
            </View>
        )
    }
}
const styles= StyleSheet.create({
    bgcard:{
        width:100,
        height:100,
        alignItems:'center',
        
    },
   img:{
       width:50,
       height:50,
       alignSelf:'center',
       marginTop:30
   },
   text:{
       color:'#fff',
       fontSize:25,
       textAlign:'center',
       marginVertical:10
   }
})