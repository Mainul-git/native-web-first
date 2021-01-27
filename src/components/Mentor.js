
import React, { useState } from 'react';
import { View ,Text,Image, ScrollView,Button,StyleSheet} from 'react-native';
import MentorDialog from './MentorDialog';
import {Row,Col,Card} from 'react-bootstrap'

const Mentor = ({data,index}) => {
    const value=index+1
    const [modalIsOpen,setIsOpen] = useState(false);

    
   
    return (
      
        <Col md={6} className="d-flex justify-content-center">    
       <View style={{textAlign:'center'}}>
          
           <Image 
           source={data.profilePic}
           style={{ width: 200,
             height: 200,
             margin:'auto',
             flex:1,
             paddingLeft:6,
             marginBottom:6
            }}
           />
           <Text className="" style={{fontSize:40}}>
           {data.firstName} {data.lastName}
           </Text>
           <View style={styles.buttonContainer}>
           <Button
               title="View Details"
                color="indigo" 
                onPress={()=>{setIsOpen(true)}}
                />
                
                </View  >
           
           <MentorDialog modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} value={value}  />
         
       </View>
       </Col>
    
    );
};
const styles = StyleSheet.create({
  
    buttonContainer: {
      // flex: 1,
      justifyContent: "center",
      padding: 15, 
      width:'200px',
 margin:'auto'
     
    
    }
   }
   ) 
export default Mentor;


    