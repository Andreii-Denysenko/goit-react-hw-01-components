import { Profile } from "components/Profile/Profile";
import {Statictics } from "./Statistics/Statistics";
import {FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import users from '../user.json'
import stats from '../data.json'
import friends from "../friends.json";
import transactions from '../transactions.json'


export const App = () => {
  return (
    <div>
     <Profile users={users}/>
     <Statictics stats={stats} />
     <FriendList friends={friends} />
     <TransactionHistory items={transactions}/>
    </div>
  );
};









