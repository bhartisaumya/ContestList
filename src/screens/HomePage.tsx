import { View, Button} from 'react-native';
import React, { useEffect, useState } from 'react';
import {RootStackParamList} from "../Navigation";
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import ContestState from "../context/ContestState"
import axios from 'axios';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const API_KEY = ' ApiKey surya001:b3cfcb0f81fc8b97ad54e4b2e34591a75f4b29b2';      // fetching the contest list
const BASE_URL = 'https://clist.by/api/v1/';

const axiosInstance = axios.create({        // used to make connection with the api with the specific address
    baseURL: BASE_URL,
    headers: {
        Authorization: `${API_KEY}`
    }
});


export default function HomePage({navigation}:HomeProps) {
  const [contestList, setContestList] = useState([]);
  
  const getUpcomingContests = async function(){
    try {
      const response = await axiosInstance.get('contest/');
      setContestList(response.data.objects);
  } catch (error) {
      console.log('Error fetching contests:', error);
      throw error;
    }
  }

  useEffect(() => {
      getUpcomingContests();
  }, [contestList]);

  return (
    <ContestState>
      <View>
        <Button title = "codeForces" onPress={() => navigation.navigate("Contests", {contestList: contestList, website: "codeforces.com"})}/>

        <Button title = "LeetCode" onPress={() => navigation.navigate("Contests", {contestList: contestList, website: "codeforces.com"})}/>

        <Button title = "CodeChef" onPress={() => navigation.navigate("Contests", {contestList: contestList, website: "codeforces.com"})}/>
        
        <Button title = "HackerEarth" onPress={() => navigation.navigate("Contests", {contestList: contestList, website: "codeforces.com"})}/>
        <Button title = "TopCoder" onPress={() => navigation.navigate("Contests", {contestList: contestList, website: "codeforces.com"})}/>
        <Button title = "TopCoder" onPress={() => navigation.navigate("Contests", {contestList: contestList, website: "codeforces.com"})}/>
        <Button title = "HackerRank"/>
        <Button title = "HackerEarth"/>
      </View>
    </ContestState>
  )
}