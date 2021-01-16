
import { View,Text,TextInput,StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import ProgramChild from '../components/ProgramChild';
import { Link } from 'react-router-dom';

const Product = () => {


    const[data,setData]=useState([])
    const[q,setQ]=useState("")
    
    useEffect(()=>{
        fetch('https://cors-anywhere.herokuapp.com/http://test.catalysed.org/programs/')
        .then(res=>res.json())
        .then(json=>setData(json)
            )
            .catch(() => console.log("Can’t access response. Blocked by browser?"))
    },[])

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
        
        <View>

             <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Search for the Program"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               value={q} 
               onChange={(e)=>setQ(e.target.value)}
            />
            <View>
            <ProgramChild style={{backgroundColor:'green'}} data={search(data)}/>
            </View>

        </View>
       
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 3
     }
    }
    )

export default Product;