import React from 'react';
import {View,Text,StyleSheet,ScrollView,Image} from 'react-native';


export default function HealthScreen(){
    let weight=45,height=160;
    let bmi = weight/(height/100*height/100);
    function BMICalculator(){
        if (bmi<18.5)
        {
            return 'Thiếu cân';
        } else if (bmi < 25)
            return 'Bình thường';
        else if (bmi<30) return 'Thừa cân';
        else if (bmi <35) return 'Béo phì độ I';
        else if (bmi <40) return 'Béo phì độ I';
        else return 'Béo phì độ I';
    }
    return (
        <ScrollView >
            <View style={{
                width:'90%',
                // height:100,
                // borderWidth: StyleSheet.hairlineWidth,
                alignSelf:'center',
                borderRadius:15,
                margin:10,
                flexDirection:'row',
                 // borderColor:'grey',
                backgroundColor:'white',
                shadowColor: '#000f',
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0,
                shadowRadius: 0,

                elevation: 10,
            }}>
                <View style={{flex:2,margin:5}}>
                    <Text style={{alignSelf:'center', fontSize: 20}}>Chiều cao</Text>
                    <Text style={{alignSelf:'center', fontSize: 30}}>160</Text>
                    <Text style={{alignSelf:'center', fontSize: 16}}>cm</Text>
                </View>
                <View style={{flex:2,margin:5}}>
                    <Text style={{alignSelf:'center', fontSize: 20}}>Cân nặng</Text>
                    <Text style={{alignSelf:'center', fontSize: 30}}>50</Text>
                    <Text style={{alignSelf:'center', fontSize: 16}}>kg</Text>
                </View>
            </View>
            <View style={{
                backgroundColor:'white',
                width:'90%',
                // height:100,
                borderWidth: StyleSheet.hairlineWidth,
                alignSelf:'center',
                borderRadius:15,
                margin:10,
                // padding:10,
                // flexDirection:'row',
                borderColor:'grey',
                backgroundColor:'white',
            }}>
                <Text style={{fontSize: 20,marginLeft: 10,marginTop:10,fontWeight:'bold'}} >BMI</Text>
                <View style={{flex:1,margin:10,marginLeft:15}}>
                    <View style={{flexDirection:'row'}}>
                        <Image source={{uri:'https://1.bp.blogspot.com/-ohodtd_vCXQ/XUK4xWTs74I/AAAAAAAAFz4/iNLEer-33-ksDLRdBXcMbLImiNo1xc31gCLcBGAs/s1600/gender%2Bpng.png'}}
                        style={{width:50,height:50,alignSelf:'center', marginRight:10}}></Image>
                        <View>
                            <Text style={{fontSize: 20}}>{bmi.toFixed(2)}</Text>
                            <Text style={{fontSize: 16}}>Trạng thái cơ thể: {BMICalculator()}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{
                width:'90%',
                height:100,
                borderWidth: StyleSheet.hairlineWidth,
                alignSelf:'center',
                borderRadius:15,
                margin:11,
                // flexDirection:'row',
                borderColor:'grey',
                backgroundColor:'white',
            }}>
                <Text style={{fontSize: 20,marginLeft: 10,marginTop:10,fontWeight:'bold'}} >Tâm trạng</Text>
                <View style={{flexDirection:'row'}}>
                    <Image source={{uri:'https://as2.ftcdn.net/jpg/00/92/58/67/500_F_92586704_RxaSFaUKdXla1sKDPdHIn5IPswc40ZLI.jpg'}}
                           style={{width:50,height:50,alignSelf:'center', marginRight:10}}></Image>
                    <Text style={{fontSize: 20,alignSelf:'center'}}>Vui vẻ</Text>
                </View>

            </View>
    </ScrollView>
    );
}
