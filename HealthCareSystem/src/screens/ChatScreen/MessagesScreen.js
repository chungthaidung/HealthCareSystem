import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Payload from './Chat.payload';
import {FloatingAction} from 'react-native-floating-action';

function ConversationItem(props) {
  const {onPress, data} = props;
  const [seen, setSeen] = useState(true);

  const [partner, setPartner] = useState(null);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={1}>
      <View style={styles.viewContainer}>
        <Image
          source={{
            uri:
              data.avatar || 'https://pbs.twimg.com/media/EKAizCoUcAAc7lV.jpg',
          }}
          style={styles.avatar}
        />
        <View style={styles.content}>
          <Text style={{...styles.title, fontWeight: seen ? 'normal' : 'bold'}}>
            {`${data?.name}`}
          </Text>
          <View style={styles.preview}>
            <Text
              style={{
                ...styles.lastMessage,
                fontWeight: seen ? 'normal' : 'bold',
              }}
              numberOfLines={1}>
              {data?.lastMessage.content}
            </Text>
            <Text style={styles.lastTime}>{data.lastTime} phút trước</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  viewContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,

    backgroundColor: '#fff',
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  content: {
    display: 'flex',
    flexGrow: 1,
    paddingLeft: 15,
  },
  preview: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: 'black',
  },
  lastMessage: {
    fontSize: 15,
    color: '#6a6a6a',
  },
  lastTime: {
    fontSize: 16,
    color: 'gray',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default function MessagesScreen({navigation}) {
  const actions = [
    {
      text: 'Liên hệ bác sĩ',
      icon: {uri:'https://openclipart.org/image/800px/307415',},
      name: 'bt_chatbot',
      position: 2,
      color:'#f7cba4'
    },
    {
      text: 'Tin nhắn mới',
      icon: {uri:'https://www.shareicon.net/data/512x512/2016/07/10/119469_write_512x512.png',},
      name: 'bt_newmessage',
      position: 1,
      color:'#f7cba4'
    },
  ];
  const data = Payload.data;
  return (
    <View style={{width: '100%', flex: 1}}>
      <FlatList
        style={{flex: 1}}
        snapToAlignment={'top'}
        pagingEnabled={false}
        data={data}
        renderItem={({item}) => (
          <ConversationItem
            data={item}
            onPress={() => {
              navigation.navigate('Chat',{senderId:1});
            }}
          />
        )}
        onEndReachedThreshold={0.01}
        onEndReached={event => console.log(event, 'HEllo')}
        keyExtractor={(item, index) => index}
      />
      <FloatingAction
        actions={actions}
        color={'#fd5d65'}
        onPressItem={name => {
          if(name==='bt_chatbot'){
            navigation.navigate('Chat',{
              senderId:'bot',
            });
          }
        }}
      />
    </View>
  );
}
