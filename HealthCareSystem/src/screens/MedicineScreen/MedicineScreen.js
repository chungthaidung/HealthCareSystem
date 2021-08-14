import {Text, View,Image,TouchableOpacity,FlatList,TextInput,StyleSheet} from 'react-native';
import * as React from 'react';
import Payload from './Medicine.payload';
import themeColors from '../../theme';
function MedicineItem(props){
    const {data,onPress}=props;
    return (<TouchableOpacity style={{width:'45%',height: 250, margin:10, backgroundColor:'white', borderRadius:20}}>
        <Image source={{uri:'https://i1.wp.com/www.bamato.vn/wp-content/uploads/2020/05/Vi%C3%AAn-gi%E1%BA%A3m-%C4%91au-h%E1%BA%A1-s%E1%BB%91t-c%E1%BB%A7a-M%E1%BB%B9-325-vi%C3%AAn-Tylenol-Extra-Strength.png?fit=800%2C800&ssl=1'}}
        style={{width:'100%',height:'75%',borderTopLeftRadius:20,borderTopRightRadius:20}}></Image>
        <Text style={{fontSize:18, marginLeft:10}}>{data.name}</Text>
        <Text style={{alignSelf:'flex-end',marginRight:20}}>{data.price} VND</Text>
    </TouchableOpacity>);
}

export default function MedicineScreen() {
    const data = Payload.data
    const [text, onChangeText] = React.useState("");
  return (
    <FlatList
        data={data}
        renderItem={({item}) => (
        <MedicineItem
            data={item}
            onPress={() => {

            }}
        /> )}
        numColumns={2}
        keyExtractor={(item, index) => index}
        ListHeaderComponent={
            <View style={{flexDirection:'row'}}>
                <TextInput
                    style={{ height: 40,
                        margin: 12,
                        borderWidth: StyleSheet.hairlineWidth,
                        padding: 10,
                        borderRadius:10,
                        flex:3,
                        backgroundColor:'white',
                    }}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder={'Nhập thông tin cần tìm'}
                />
                <TouchableOpacity style={{alignSelf:'center',margin:10,backgroundColor:'#f7cba4',height:'55%',borderRadius:5}}>
                    <Text style={{margin:5,marginLeft:10,marginRight:10, alignSelf:'center',fontWeight:'bold'}}>Tìm kiếm</Text>
                </TouchableOpacity>
            </View>
        }
    >

    </FlatList>
  );
}
