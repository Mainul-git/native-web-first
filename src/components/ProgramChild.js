import React from 'react';
import { View,Text, ScrollView, SafeAreaView ,StyleSheet,Touchable, TouchableOpacity} from 'react-native';
import { Link } from 'react-router-dom';
import {Row,Col,Card} from 'react-bootstrap'


const ProgramChild = ({data}) => {
    
    return (
        <View style={{flex:1,width:"100vw",flexWrap:"wrap",alignItems:'center',justifyContent:'center',paddingRight:'10px'}}>
            <Row className="d-flex justify-content-center m-auto">
        {/* <ScrollView style={{height:'100%',width:'100%',flex:1}}> */}
            
            {
  
    data.map((data,index)=>
    <Col md={4} style={{marginBottom:'5px'}}>   
    <Link className="justify-content-center" style={{textDecoration:'none',textAlign:'center',width:'300px',height:'300px',backgroundColor:'yellow'}}  to={`programDetail/${data.id}`}>
  <Card className="" style={{width:'100%',height:'100%',backgroundColor:'yellow'}}>
    <Text  > 
 
    <Text  style={{color:'black',fontSize:30}}>{data.name}</Text> {'\n'} 
    <Text  style={{color:'black',fontSize:25}}>{data.category}</Text> {'\n'} 
    <Text style={{color:'black',fontSize:25}}>{data.shortDescription}</Text>{'\n'} 
    <Text style={{color:'black',fontSize:25}}>{data.phase}</Text>{'\n'} 
    <Text style={{color:'black',fontSize:25}}>{data.startDate}</Text>{'\n'} 
    <Text style={{color:'black',fontSize:25}}>{data.duration}</Text>

    </Text> 
   
    </Card>
    </Link>
    </Col> 
                )
               
            }
      
        </Row>
        </View>
    );
};

const styles=StyleSheet.create({

})

export default ProgramChild;