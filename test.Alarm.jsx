import {setAlarm, cancelAlarm} from 'react-native-alarm-module';
import {View, Button, ToastAndroid} from 'react-native';
import React , {useState , useCallback} from 'react';

export default function test() {
  const [lastDate, setLastDate] = useState(new Date(Date.now() + 5 * 1000));

  const setAlarmOnPress = useCallback(() => {
    const newDate = new Date(Date.now() + 5 * 1000);
    setLastDate(newDate);

    setAlarm({
      taskName: 'ShowToastTask', // required
      timestamp: newDate.valueOf(), // required
      // type: 'setAlarmClock', // optional
      // allowedInForeground: true, // optional 
      // wakeup: true, // optional
      // extra: 'something extra', // optional
    });

    ToastAndroid.show(
      `alarm set for ${newDate.toISOString()}`,
      ToastAndroid.SHORT,
    );
  }, []);

  const cancel = useCallback(() => {
    cancelAlarm({
      taskName: 'ShowToastTask',
      isoDateTime: lastDate.toISOString(),
    });
    ToastAndroid.show(
      `alarm cancelled for ${lastDate.toISOString()}`,
      ToastAndroid.SHORT,
    );
  }, [lastDate]);

  return (
    <View>
      <Button onPress={setAlarmOnPress} title="Set Alarm in 5 seconds" />
      <Button onPress={cancel} title="Cancel last alarm" />
    </View>
  );
}