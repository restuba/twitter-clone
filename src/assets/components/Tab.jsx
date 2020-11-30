import Tweets from './tweetsComp/Tweets';
import Followers from './Followers';
import Following from './Following';



const Tab = [
  {
    id: "tweets",
    label: "Tweets",
    component: Tweets
  },
  {
    id: "followers",
    label: "Followers",
    component: Followers
  },
  {
    id: "following",
    label: "Following",
    component: Following
  }
];

export default Tab;