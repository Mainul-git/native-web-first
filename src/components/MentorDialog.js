import { View,Modal,Text,Button,StyleSheet } from 'react-native';
import React, { useState ,useEffect} from 'react';

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
        <View>
             <Modal transparent={true} visible={modalIsOpen}>
                  <View style={{backgroundColor:"#000000aaa",flex:1,width:'100vw'}}>
                      <View style={{margin:70, backgroundColor:'white',flex:1,padding:40}}>
                          <Text style=
                          {{fontSize:70,
                          margin:'auto'
                          }}
                          >
                              {mentorDetail.firstName} {mentorDetail.lastName}
                          </Text>
                          {'\n'}
                          <View style={{display:'inline',margin:'auto'}}>
                          <Text >Email :</Text>  <Text>{mentorDetail.email}
                          </Text>
                          </View>{'\n'}
                          <View style={{display:'inline',margin:'auto'}}>
                       <Text>Location :</Text>  <Text>{mentorDetail.location}</Text>
                          </View>
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