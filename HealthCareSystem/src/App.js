import * as React from 'react';
import {View, Text, Button, TouchableOpacity,Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MedicineScreen from './screens/MedicineScreen/MedicineScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MessagesScreen from './screens/ChatScreen/MessagesScreen';
import ChatScreen from './screens/ChatScreen/ChatScreen';
import HealthScreen from './screens/HealthScreen/HealthScreen'
import PrepareQuestionScreen from './screens/HomeScreen/PrepareQuestion'
function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeT" component={TabNavigator} />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            headerShown: true,
            headerRight: () => (
              <TouchableOpacity>
                <Ionicons name={'videocam-outline'} size={30} />
              </TouchableOpacity>
            ),
          }}
        />
          <Stack.Screen
              name="PrepareQ"
              component={PrepareQuestionScreen}
              options={{
                  headerShown: true,
                  title:'Đặt câu hỏi'
              }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'earth-outline';
          } else if (route.name === 'Settings') {
            iconName = 'chatbubble-ellipses-outline';
          } else if (route.name === 'Medicine') {
            iconName = focused ? 'medkit-outline' : 'medkit-outline';
          }
          else if (route.name === 'Messages') {
              iconName = 'chatbubble-ellipses-outline';
          }
          else if (route.name === 'Health') {
              return <View style={{backgroundColor:'white',borderRadius:50,width:100,height:100,justifyContent:'center',shadowColor: '#000f',
                  shadowOffset: {
                      width: 0,
                      height: 1,
                  },
                  shadowOpacity: 0,
                  shadowRadius: 0,

                  elevation: 10,}}>
                  <Image source={{uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/225184553_3704406722994719_6930982712190868861_n.png?_nc_cat=110&ccb=1-5&_nc_sid=aee45a&_nc_ohc=xjDk-W2CGJEAX91sI1w&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=9082cda384b1527deaf4756e5564ee1b&oe=613D9AFF'}}
                         style={{width:80,height:50,alignSelf:'center'}}></Image>
              </View>
              //iconName = focused ? 'medkit-outline' : 'medkit-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={25} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
          headerStyle: {
              backgroundColor:  '#fd5d65',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
              fontWeight: 'bold',
          },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Cộng đồng',
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          title: 'Tin nhắn',
        }}
      />
        <Tab.Screen
            name="Health"
            component={HealthScreen}
            options={{
                title: 'Theo dõi SK',
                tabBarLabel: ''
            }}
        />
      <Tab.Screen
        name="Medicine"
        component={MedicineScreen}
        options={{
          title: 'Thuốc',
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Cá nhân',
        }}
      />
    </Tab.Navigator>
  );
}
function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

export default App;
