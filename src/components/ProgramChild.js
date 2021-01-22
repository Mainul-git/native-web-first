import React from 'react';
import { View,Text, ScrollView, SafeAreaView ,StyleSheet,Touchable, TouchableOpacity} from 'react-native';
import { Link } from 'react-router-dom';

const ProgramChild = ({data}) => {
    
    return (
        <SafeAreaView>
        {/* <ScrollView style={{height:'100%',width:'100%',flex:1}}> */}
            
            {
  
    
    data.map((data,index)=>
    <View style={{justifyContent:'center',paddingBottom:30, margin:'0 auto',width:'100%'}}  >      
    <Link style={{textDecoration:'none',textAlign:'center',margin:'auto',height:'320px',width:'400px',backgroundColor:'yellow'}}  to={`programDetail/${data.id}`}>
  
    <Text > 
 
    <Text  style={{color:'black',fontSize:30}}>{data.name}</Text> {'\n'} 
    <Text  style={{color:'black',fontSize:30}}>{data.category}</Text> {'\n'} 
    <Text style={{color:'black',fontSize:30}}>{data.shortDescription}</Text>{'\n'} 
    <Text style={{color:'black',fontSize:30}}>{data.phase}</Text>{'\n'} 
    <Text style={{color:'black',fontSize:30}}>{data.startDate}</Text>{'\n'} 
    <Text style={{color:'black',fontSize:30}}>{data.duration}</Text>

    </Text> 
   
   
    </Link>
    </View>
                )
            }
        {/* </ScrollView> */}
        </SafeAreaView>
    );
};

const styles=StyleSheet.create({

})

export default ProgramChild;