import React, {useEffect, useState} from 'react'
import NoteContext from './ListContext'
import axios from 'axios';
const API_KEY = ' ApiKey surya001:b3cfcb0f81fc8b97ad54e4b2e34591a75f4b29b2';      // fetching the contest list
const BASE_URL = 'https://clist.by/api/v1/';

const axiosInstance = axios.create({        // used to make connection with the api with the specific address
    baseURL: BASE_URL,
    headers: {
        Authorization: `${API_KEY}`
    }
});
  

export default function NoteState(props: object) {
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
        console.log("useEffect")
        getUpcomingContests();
    }, []);

    return (
        <NoteContext.Provider value={contestList}>
            {props.children}
        </NoteContext.Provider>
    )
}