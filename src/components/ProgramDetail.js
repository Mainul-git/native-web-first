import React, { useEffect, useState } from 'react';
import { View ,Text, ScrollView, SafeAreaView} from 'react-native';
import { useParams } from 'react-router-dom';
import Mentor from './Mentor';


const ProgramDetail = () => {
    const {programId}=useParams()
    const [detail,setDetail]=useState({})
const[mentor,setMentor]=useState([])
    useEffect(()=>{
        fetch(`https://api.allorigins.win/raw?url=http://test.catalysed.org/programs/${programId}`)
        .then(res=>res.json())
        .then(json=>{
            setDetail(json)

        setMentor(json.mentors)
        })
            .catch(() => console.warn("Can’t access  response. Blocked by browser?"))
    },[])


    return (
        
            <SafeAreaView style={{justifyContent:'center',flex:1,margin:'auto',width:'100vw'}}>
                <ScrollView >
                <Text style={{textDecoration:'underline',margin:'auto',marginBottom:'15px',fontSize:40}}> Program-Detail Page</Text>
        <Text  style={{fontSize:50,textAlign:'center'}}> You want to join  <Text style={{fontStyle:'italic',color:'red'}}> {detail.name}</Text> program.{'\n'}
        Hope,you will enjoy this program safely.{'\n'}  
        The program is now under <Text style={{color:'red'}}> {detail.category}</Text> category.{'\n'}  
        This is a very crucial program. {'\n'} 
        You will have great mentors whose names are shown below
        </Text>
        <View>
        <Text style={{textDecoration:'underline',margin:'auto',marginBottom:'15px',fontSize:40,marginTop:10}}> Mentors</Text>
          {
              mentor.map((data,index)=><Mentor data={data} index={index}/>)
          }

        </View>
        </ScrollView>
        </SafeAreaView>
    
    );
};

export default ProgramDetail;