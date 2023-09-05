import { View, Text, Image, TouchableOpacity , Share , Linking , Alert , StyleSheet} from 'react-native'
import React , {useCallback} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
// import RNCalendarReminders from 'react-native-calendar-reminders';

export default function ContestView({item} : any){
    console.log(item)

    const logoAdd = "../media/" + item.resource.name + ".com";

    // return(
    //     <Text>HelloView</Text>
    // )};
    
    const newContest = item
    
  const onShare = async () => {
      try {
        const result = await Share.share({
          message: item.href,
        });
      } catch (error : any) {
        Alert.alert(error.message);
      }
  };

  const handlePress = useCallback(async () => {
      let supported = await Linking.canOpenURL(item.href);
  
      if (supported) {
        await Linking.openURL(item.href);
      } else {
        Alert.alert(`Don't know how to open this URL: ${item.href}`);
      }
    }, []);
      
    //   const f = RNCalendarReminders.saveReminder('title', {
    //     location: 'Remote',
    //     notes: 'notes',
    //     startDate: '2023-01-13T06:50:00.000UTC',
    //     alarms: [{
    //       date: '2023-01-13' // or absolute date
    //     }]
    //   });

    return (
      <View style = {styles.container}>
          <View style = {{flexDirection : 'row',}}>
              <Text style = {{fontSize : 18}}>{item.resource.name}</Text>
              <Image style = {{marginLeft : 200, width : 40 , height : 30 , borderRadius : 10}}
                  source={{uri: "sdfsdf"}}/>
          </View>
          <View>
              <Text style = {{fontSize: 13}}>Contest: {item.event} </Text>
              <Text>Status: {item.status} </Text>
              <Text>Start Time: {item.start} </Text>
              <Text>Duration: {item.duration}</Text>
          </View>
          <View style = {{flexDirection : 'row' , marginTop : 10}}>

              <TouchableOpacity onPress={handlePress}>
                  <Button IconName = {'link'}/>
              </TouchableOpacity>

              <TouchableOpacity>
                  <Button IconName = {'alarm-sharp'}/>
              </TouchableOpacity>

              <TouchableOpacity onPress={onShare}>
                  <Button IconName = {'share'}/>
              </TouchableOpacity>
          </View>
      </View>
    )
};

  function Button(props: any){
      return(
          <View style = {styles.ButtonStyle}>
              <Icon name = {props.IconName} size={28} color = {'black'} 
                  style = {{alignSelf : 'center'}}/>
          </View>
      )
}

const styles = StyleSheet.create({
  container : {
    padding : 10,
    backgroundColor: 'grey',
    height : 175,
    borderRadius : 10,
    margin: 10,
  },

  ButtonStyle : {
    marginLeft : 40,
    backgroundColor : 'white',
    height : 30 ,
    width : 60 ,
    borderRadius : 10
  }
});