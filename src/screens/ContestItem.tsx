import {View, FlatList} from 'react-native';
import React, { useContext } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Navigation';
import ContestView from './ContestView';
import ListContest from "../context/ListContext"

type ContestItemProps = NativeStackScreenProps<RootStackParamList, 'Contests'>;

export default function ContestItem({route}: ContestItemProps) {
  const {contestList, website} = route.params
  // const contestList = useContext(ListContest)
  // console.log(contestList)
  // console.log(website)

  const newList = contestList.filter((item: {resource: {name: string}}) => item.resource.name === website)

  return (
    <View>
      <FlatList
        data={newList}
        renderItem={({ item }) => (
          <ContestView item={item} />
        )}
      />
    </View>
  );
}










  // const onShare = async () => {
  //     try {
  //       const result = await Share.share({
  //         message: props.item.href,
  //       });
  //     } catch (error : any) {
  //       Alert.alert(error.message);
  //     }
  // };

  // const handlePress = useCallback(async () => {
  //     let supported = await Linking.canOpenURL(props.item.href);
  
  //     if (supported) {
  //       await Linking.openURL(props.item.item.href);
  //     } else {
  //       Alert.alert(`Don't know how to open this URL: ${props.item.href}`);
  //     }
  //   }, []);
      
      // const f = RNCalendarReminders.saveReminder('title', {
      //   location: 'Remote',
      //   notes: 'notes',
      //   startDate: '2023-01-13T06:50:00.000UTC',
      //   alarms: [{
      //     date: '2023-01-13' // or absolute date
      //   }]
      // });
      

//     return (
//       <View style = {styles.container}>
//           <View style = {{flexDirection : 'row',}}>
//               <Text style = {{fontSize : 18}}>{props.item.resource.name}</Text>
//               <Image style = {{marginLeft : 200, width : 40 , height : 30 , borderRadius : 10}}
//                   source={{uri : props.item.resource.icon}}/>
//           </View>
//           <View>
//               <Text style = {{fontSize: 13}}>Contest: {props.item.event} </Text>
//               <Text>Status: {props.item.status} </Text>
//               <Text>Start Time: {props.item.start} </Text>
//               <Text>Duration: {props.item.duration}</Text>
//           </View>
//           <View style = {{flexDirection : 'row' , marginTop : 10}}>

//               <TouchableOpacity onPress={handlePress}>
//                   <Button IconName = {'link'}/>
//               </TouchableOpacity>

//               <TouchableOpacity>
//                   <Button IconName = {'alarm-sharp'}/>
//               </TouchableOpacity>

//               <TouchableOpacity onPress={onShare}>
//                   <Button IconName = {'share'}/>
//               </TouchableOpacity>

//           </View>
//       </View>
//     )
//   }

//   function Button(props: any){
//       return(
//           <View style = {styles.ButtonStyle}>
//               <Icon name = {props.IconName} size={28} color = {'black'} 
//                   style = {{alignSelf : 'center'}}/>
//           </View>
//       )
// }
// const styles = StyleSheet.create({
//   container : {
//     padding : 10,
//     backgroundColor: 'grey',
//     height : 175,
//     borderRadius : 10,
//     margin: 10,
//   },

//   ButtonStyle : {
//     marginLeft : 40,
//     backgroundColor : 'white',
//     height : 30 ,
//     width : 60 ,
//     borderRadius : 10
//   },
// });








// import { View, Text, Image, TouchableOpacity , Share , Linking , Alert , StyleSheet} from 'react-native'
// import React , {useCallback} from 'react'
// import Icon from 'react-native-vector-icons/Ionicons';
// import RNCalendarReminders from 'react-native-calendar-reminders';

// export default function ContestItem(props : any) {
//   // console.log('props')
//   console.log(props)
//   let contestLink = "https://codeforces.com/contests/";
//   contestLink += props.item.id


//   const onShare = async () => {
//       try {
//         const result = await Share.share({
//           message: contestLink,
//         });
//       } catch (error : any) {
//         Alert.alert(error.message);
//       }
//   };

//   const handlePress = useCallback(async () => {
//       let supported = await Linking.canOpenURL(contestLink);
  
//       if (supported) {
//         await Linking.openURL(contestLink);
//       } else {
//         Alert.alert(`Don't know how to open this URL: ${contestLink}`);
//       }
//     }, [contestLink]);
      
//       // const f = RNCalendarReminders.saveReminder('title', {
//       //   location: 'Remote',
//       //   notes: 'notes',
//       //   startDate: '2023-01-13T06:50:00.000UTC',
//       //   alarms: [{
//       //     date: '2023-01-13' // or absolute date
//       //   }]
//       // });

//     return (
//       <View style = {styles.container}>
//           <View style = {{flexDirection : 'row',}}>
//               <Text style = {{fontSize : 18}}>item.item.</Text>
//               <Image style = {{marginLeft : 200, width : 40 , height : 30 , borderRadius : 10}}
//                   source={{uri : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAA1VBMVEX///8hlvMdg9TeqAb/wQf0QzbUOi8PgNMVlPNfoN5ir/b6vQf/vgD/4aLsQTTqq6fUKhrU4/TV5/wAftT369LqyYDTNSr0PzH02NbcYFj3Zl3VLSD1NiX/8NL82df/2IDv9v3f7PhSmt4ii94tn/pZq/h7vvyLxPqfye9qqOL//PW11PIAe9UAj/OJu+z25r/w043+9uHruTzx2Jr/ySzy3Kf/zET/4ZX86bjyxMLoh4H1eXL5paD86unbRjz0LRr5m5X3XVLyymzTHgj3UET/1mfjd3HSWMVUAAAB2ElEQVRoge3aa1OCQBiGYUDwkMeiQIVS00zxlKcKFQ9Z/f+flKUrgrANjctU89yfd7iGmf2078txCCGEEPqlVc5JF6RKaHjrthqTt8XipNpdKxS83GzHhH38vninXg6BT8iC4MXzfOeMvd5tC34837lnrVeqgj/P11hfwIZM4+MNxnwzRuXrjPkEnWd9+cCDBw8ePHjwP+WN3sPVvtKudD8kvjeIHJRMfSZuKoXCDyOOkiIpNTLY8+OIHy+Kj0f+qXkjQuHFJ9b8kMqP3Pfv1PyAyovPjHm37uRTafDgwYP/e7w5KZCKpOnMCofPz3OaQsqoJH2xDIM3c0rULiPZ6VOLOZ+fH+oOXtKXzPmJFvXlJdVizFvzKIXf/D5b3tRovLpizGdzNF6SwIMHDx48ePDgwYMHDx48ePDgwYMH/+94cez6XsB1wex3r5ovdL7n+l7AZckbhcpPuR6VP5qgB10VLSgUXjc5wz1DdvDuCTLHdWV/3mNR1qQ8qKvFzYG+P586Gt9zgdeEZ2s/Xn39Guf0B368lx54STq71hQPXl0Ut8MkzhgOHPx2dWT05r52pIAr4vn3uUbSSdJqZp8wLu2ud3nuzewKuCBv5Uk3JItyHCGEEEKn7QN1TJA1EmL0YgAAAABJRU5ErkJggg=='}}/>
//           </View>
//           <View>
//               <Text style = {{fontSize: 13}}>Contest: {props.item.name} </Text>
//               <Text>Status: {props.item.phase} </Text>
//               <Text>Start Time: {props.item.start} </Text>
//               <Text>Duration: {props.item.duration / 3600}</Text>
//           </View>
//           <View style = {{flexDirection : 'row' , marginTop : 10}}>

//               <TouchableOpacity onPress={handlePress}>
//                   <Button IconName = {'link'}/>
//               </TouchableOpacity>

//               <TouchableOpacity>
//                   <Button IconName = {'alarm-sharp'}/>
//               </TouchableOpacity>

//               <TouchableOpacity onPress={onShare}>
//                   <Button IconName = {'share'}/>
//               </TouchableOpacity>

//           </View>
//       </View>
//     )
//   }

//   function Button(props: any){
//       return(
//           <View style = {styles.ButtonStyle}>
//               <Icon name = {props.IconName} size={28} color = {'black'} 
//                   style = {{alignSelf : 'center'}}/>
//           </View>
//       )
// }
// const styles = StyleSheet.create({
//   container : {
//     padding : 10,
//     backgroundColor: 'grey',
//     height : 175,
//     borderRadius : 10,
//     margin: 10,
//   },

//   ButtonStyle : {
//     marginLeft : 40,
//     backgroundColor : 'white',
//     height : 30 ,
//     width : 60 ,
//     borderRadius : 10
//   },
// });