
import { View,Text,TextInput,StyleSheet,Modal,Button, ScrollView, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import ProgramChild from '../components/ProgramChild';


const Program = () => {

    
    const[data,setData]=useState([])
    const[show,setShow]=useState(false)
    const[q,setQ]=useState("")
    const url=``
    useEffect(()=>{
       
        fetch(' https://api.allorigins.win/raw?url=http://test.catalysed.org/programs/')
        .then(res=>res.json())
        .then(json=>setData(json)
            )
            .catch(() => console.warn("Can’t access response. Blocked by browser?"))
    },[data])

    const  search =(r)=>{
        return  (r.filter(r=>r.name.indexOf(q)>-1||
        r.name.toLowerCase().indexOf(q)>-1 ||
            r.category.indexOf(q)>-1   ||
            r.category.toLowerCase().indexOf(q)>-1  ||
            r.shortDescription.indexOf(q)>-1 ||
            r.shortDescription.toLowerCase().indexOf(q)>-1||
            r.phase.toLowerCase().indexOf(q)>-1||
            r.phase.indexOf(q)>-1
            )
        )
        }
    return (
        <SafeAreaView  style={{width:'100vw',height:'100%'}}>
       <ScrollView>
             <Text style={{textDecoration:'underline',margin:'auto',marginBottom:'15px',fontSize:40}}> Program Page</Text>
             <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "  Search for the Program"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               value={q} 
               onChange={(e)=>setQ(e.target.value)}
            />
            <View  style={{width:"100%"}}>
            <ProgramChild  data={search(data)}/>
            </View>

   </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        height: 40,
        width:300,
        margin:'auto',
        borderColor: '#7a42f4',
        borderWidth: 3,
        backgroundColor:'white',
        marginBottom:'35px'
       
     
     },
     buttonContainer: {
    // flex: 1,
    justifyContent: "center",
    padding: 15, 
   
  
  }
    }
    )

export default Program;