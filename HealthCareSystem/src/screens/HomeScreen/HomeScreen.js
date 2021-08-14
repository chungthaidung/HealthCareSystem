import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Payload from './Home.payload';

function PostPreview(props) {
  const {doctor, question} = props;
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{
        width: '90%',
        // height: '30%',
        backgroundColor: 'white',
        alignSelf: 'center',
        margin: 10,
        borderRadius: 10,

        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 10,
      }}>
      <Text style={{fontWeight: '500', fontSize: 25, padding: 10}}>
        Hỏi: {question}
      </Text>
      <View style={{flexDirection: 'row', margin: 10}}>
        <Image
          source={{
            uri: doctor.uri,
          }}
          style={{width: 50, height: 50, borderRadius: 35}}
        />
        <View style={{paddingLeft: 5, alignSelf: 'center'}}>
          <Text>Trả lời bởi: {doctor.name}</Text>
          <Text>
            {doctor.careerAge} năm kinh nghiệm ⭐{doctor.rate}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function HomeScreen({navigation}) {
  const data = Payload.data;

  return (
    <FlatList
      data={data}
      renderItem={({item}) => {
        return <PostPreview doctor={item.answer} question={item.ask} />;
      }}
      keyExtractor={(item, index) => index}
      ListHeaderComponent={
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.postButton}
            onPress={() => {
                navigation.navigate('PrepareQ')
            }}
            activeOpacity={0.5}>
            <Text style={{paddingLeft: 10, color: 'grey'}}>Đặt câu hỏi</Text>
          </TouchableOpacity>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'white',
  },
  postButton: {
    borderStyle: 'solid',
    alignSelf: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    width: '90%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    margin: 10,
    backgroundColor:'white'
  },
});
