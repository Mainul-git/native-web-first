import { View,Modal,Text,Button,StyleSheet } from 'react-native';
import React, { useState ,useEffect} from 'react';
import {Card} from 'react-bootstrap'
const MentorDialog = ({modalIsOpen,value,setIsOpen}) => {

    const mentorId=value
  const[mentorDetail,setMentorDetail]=useState({})

  useEffect(()=>{
    fetch(`https://api.allorigins.win/raw?url=http://test.catalysed.org/mentors/${mentorId}`)
    .then(res=>res.json())
    .then(json=>setMentorDetail(json)
        )
        .catch(() => console.log("Can’t access  response. Blocked by browser?"))
},[])


    return (
        <Card >
        <View style={{}}>
           
             <Modal  transparent={true} visible={modalIsOpen}>
          
                  <View className=" " style={{backgroundColor:"#000000aaa",width:'100vw', height:"500px",margin:"auto"}}>
                      <View className="d-flex justify-content-center" style={{textAlign:'center',margin:30, backgroundColor:'white',flex:1,padding:10}}>
                          <Text className="text-center" style=
                          {{fontSize:60,
                        
                          }}
                          >
                              {mentorDetail.firstName} {mentorDetail.lastName}
                          </Text>
                        
                         
                          <Text className="text-center">Email :  {mentorDetail.email}
                          </Text>
                        
                         
                       <Text className="text-center">Location : {mentorDetail.location}</Text>
                        
                         <View   style={ styles.buttonContainer}>
                          <Button
                           title="Close"
                           color="indigo" 
                          
                         
                           onPress={()=>setIsOpen(false)}
                           />
                           </View>
                      </View>
                  </View>
                  
               </Modal>
               
               
        </View>
        </Card>
    );
};

const styles = StyleSheet.create({
  
    buttonContainer: {
 
      justifyContent: "center",
      padding: 15, 
      width:'100px',
      margin:'auto',
      padding:'5px'

     
    
    }
   }
   ) 
 

export default MentorDialog;