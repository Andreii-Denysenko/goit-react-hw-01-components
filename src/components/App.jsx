import { Profile } from "components/Profile/Profile";
import {Statictics } from "./Statistics/Statistics";
import {FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import users from '../components/Data/user.json';
import stats from '../components/Data/data.json';
import friends from '../components/Data/friends.json';
import transactions from '../components/Data/transactions.json'


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









