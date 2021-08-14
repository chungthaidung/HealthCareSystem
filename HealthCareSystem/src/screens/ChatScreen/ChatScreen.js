import React, {useCallback, useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {GiftedChat,Bubble} from 'react-native-gifted-chat';


export default function ChatScreen({route}) {
  const {senderId} = route.params;
  const [messages, setMessages] = useState([]);
  let _idMessages = 0;
  const responseMessages = [
    {
      _id: 3,
      text: 'Mình có thể gọi bạn là gì nhỉ',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'Nurse Chatbot',
        avatar: 'https://www.prdistribution.com/uploads/newsreleases/d83341deb75c4c4f6b113f27b1e42cd8-chatbot-florence-already-helps-thousands-of-patients-to-remember-their-medication.png',
      },
    },
    {
      _id: 4,
      text: 'Tuổi của bạn là bao nhiêu',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'Nurse Chatbot',
        avatar: 'https://www.prdistribution.com/uploads/newsreleases/d83341deb75c4c4f6b113f27b1e42cd8-chatbot-florence-already-helps-thousands-of-patients-to-remember-their-medication.png',
      },
    },
    {
      _id: 5,
      text: 'Xin bạn vui lòng đợi. Mình sẽ tìm bác sĩ phù hợp với bạn nhé. ',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'Nurse Chatbot',
        avatar: 'https://www.prdistribution.com/uploads/newsreleases/d83341deb75c4c4f6b113f27b1e42cd8-chatbot-florence-already-helps-thousands-of-patients-to-remember-their-medication.png',
      },
    },
  ];
  useEffect(() => {
    if (senderId==='bot'){
      setMessages([
        {
          _id: 1,
          createdAt: new Date(),
          text: 'Mô tả tình trạng bệnh/thắc mắc mà bạn đang gặp phải.',
          user: {
            _id: 2,
            name: 'Nurse Chatbot',
            avatar: 'https://www.prdistribution.com/uploads/newsreleases/d83341deb75c4c4f6b113f27b1e42cd8-chatbot-florence-already-helps-thousands-of-patients-to-remember-their-medication.png',
          },
        },

        {
          _id: 2,
          text: 'Xin chào, mình là phụ tá cho bác sĩ mà bạn sắp liên lạc. Bạn vui lòng trả lời một số câu hỏi để bác sĩ có thế nắm bắt tình hình nhanh nhất nhé.',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Nurse Chatbot',
            avatar: 'https://www.prdistribution.com/uploads/newsreleases/d83341deb75c4c4f6b113f27b1e42cd8-chatbot-florence-already-helps-thousands-of-patients-to-remember-their-medication.png',
          },
        },

      ]);
    }

  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
    if (messages[0]?.user._id == 1 && messages[0]?.text) {
      // console.log(responseMessages[0])
      onSend(responseMessages[_idMessages]);
      _idMessages++;
    }
  }, []);

  function renderBubble(props) {
    return (
        <Bubble
            {...props}
            wrapperStyle={{
              right: {
                backgroundColor: '#fd5d65',
              },
              left: {
                backgroundColor: '#f7cba4',
              },
            }}
        />
    );
  }

  return (
    <GiftedChat
      messages={messages}
      renderBubble={renderBubble}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />

  );
}
