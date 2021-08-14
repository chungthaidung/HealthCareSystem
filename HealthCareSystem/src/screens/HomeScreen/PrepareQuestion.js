import React from 'react';
import {View,Text,TextInput,TouchableOpacity,ScrollView} from 'react-native';

export default function PrepareQuestionScreen()
{
    const [text, onChangeText] = React.useState("");
    return (
        <View>
        <TextInput
            style={{ height: 40,
                margin: 12,
                // borderWidth: 1,
                padding: 10,
                height:'80%',
                borderRadius:10,
                backgroundColor:'white',
            }}
            textAlignVertical={'top'}
            multiline={true}
            onChangeText={onChangeText}
            value={text}
            placeholder={'Đặt câu hỏi có dấu, nêu rõ vấn đề'}
        />
            <TouchableOpacity style={{width:'80%',height:50, backgroundColor:'#fd5d65', alignSelf:'center',alignItems:'center',justifyContent:'center',borderRadius:20}}>
              <Text style={{fontSize:20,color:'white'}}>Đăng câu hỏi</Text>
            </TouchableOpacity>
    </View>);
}
