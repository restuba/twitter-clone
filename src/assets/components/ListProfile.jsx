import React from 'react';
import Tab from './Tabs';
import { GlobalConsumer } from '../context/Context';

const ListProfile = props => {
  return (
    <aside>
      <div className="grid gap-4 grid-cols-3">
        <content className="col-span-3 md:col-span-1">
          <div className="bg-primary rounded-md pt-4  text-gray-400">
            <div className="flex justify-center p-4">
              <img src={props.state.userDetail.avatar_url} alt="" className="flex-shrink-0 h-auto w-1/3 rounded-full" />
            </div>
            <div className="">
              <h3>{props.state.userDetail.name}</h3>
              <p className="my-3">@{props.state.userDetail.login}</p>
              <div className="inline-flex mb-5">
                <svg width="24" className="fill-current" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.505 4.38005C15.3651 3.36005 13.765 2.80005 12.025 2.80005C10.285 2.80005 8.68504 3.36005 7.54504 4.38005C6.16504 5.62005 5.42504 7.48005 5.42504 9.78005C5.42504 14.8001 11.2051 20.7001 11.4651 20.9401C11.6251 21.1001 11.825 21.1801 12.025 21.1801C12.225 21.1801 12.4451 21.1001 12.5851 20.9401C12.8251 20.7001 18.625 14.8001 18.625 9.78005C18.605 7.48005 17.885 5.62005 16.505 4.38005ZM12.005 19.22C11.465 18.62 10.6051 17.62 9.76506 16.42C7.96506 13.86 7.00505 11.58 7.00505 9.80005C7.00505 4.80005 10.825 4.40005 12.005 4.40005C16.6451 4.40005 17.005 8.54005 17.005 9.80005C17.005 13.32 13.425 17.66 12.005 19.22ZM12.005 6.26005C10.245 6.26005 8.82504 7.72005 8.82504 9.50005C8.82504 11.28 10.245 12.7401 12.005 12.7401C13.765 12.7401 15.1851 11.28 15.1851 9.50005C15.1851 7.70005 13.765 6.26005 12.005 6.26005ZM12.005 11.32C11.025 11.32 10.225 10.5001 10.225 9.48005C10.225 8.46005 11.025 7.64005 12.005 7.64005C12.985 7.64005 13.7851 8.46005 13.7851 9.48005C13.7851 10.5001 12.985 11.32 12.005 11.32Z"/>
                </svg>
                <span className="">{props.state.userDetail.location}</span>
              </div>
              <div className="menu-profile grid grid-cols-3">
                <div className="p-2">
                  <p className="text-xs">Tweets</p>
                  <h4>127</h4>
                </div>
                <div className="p-2 border-l-2 border-r-2 border-black border-opacity-25">
                  <h4 className="text-xs">Followers</h4>
                  <h4>{props.state.userDetail.followers}</h4>
                </div>
                <div className="p-2">
                  <p className="text-xs">Following</p>
                  <h4>{props.state.userDetail.following}</h4>
                </div>
              </div>
            </div>
          </div>

        </content>

        <div className="bg-primary rounded-md col-span-3 md:col-span-2 text-gray-400">
          <Tab/>
        </div>
        
      </div>
      
    </aside>
  );
};

export default GlobalConsumer(ListProfile);