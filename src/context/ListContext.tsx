import { createContext } from 'react';

interface ListContestType {
    contestList: object;
}

const noteContext = createContext<ListContestType>({});

export default noteContext;
