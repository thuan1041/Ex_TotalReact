import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
    var [a,setA] = useState('');
    var [b,setB] = useState('');
    var [total,SetTotal] = useState('');
    return ( 
        <View style = { styles.container } >
            <Text style={styles.title} >Total of A + B</Text>
            <TextInput onChangeText={setA} value={a} placeholder='A='/>
            <TextInput onChangeText={setB} value={b} placeholder='B='/>
            <Text>Result: {SetTotal }</Text>
            <Button title='Total' onPress={()=>{
                SetTotal(1.0*a+1.0*b)
            }}></Button>
            <Button title='Reset' onPress={()=>{
                setA('');
                setB('');
                SetTotal('');
            }}></Button>    
            
        </View>     
    );      
}

const styles = StyleSheet.create({
    container: {
        flex:'1',
        flexDirection:"column",
        alignItems:'center',
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    title:{
        fontSize:30,
        fontWeight:700,
    },
});