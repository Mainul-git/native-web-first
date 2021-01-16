import React from 'react';
import { View,Text } from 'react-native';

const ProgramChild = ({data}) => {
    console.warn(data);
    return (
        <View>
            <Text>
               
            </Text>
            {
                data.map(data=>
                    <View>
                    <Text  style={{color:'black'}}>{data.name}</Text>
                    <Text style={{color:'black'}}>{data.category}</Text>
                    <Text style={{color:'black'}}>{data.shortDescription}</Text>
                    
                    </View>
                    )
            }
        </View>
    );
};

export default ProgramChild;