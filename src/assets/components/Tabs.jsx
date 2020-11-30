import React, {useState} from 'react';
import Tab from './Tab';

const Tabs = (props) => {
  const [selectedTab, setSelectedTab] = useState(Tab[0].id);
  const { component: Component } = Tab.find(tab => tab.id === selectedTab);

  return (
    <>
      <div className="grid grid-cols-3">
        {
          Tab.map(tab => (
            <button key={tab.id} onClick={() => setSelectedTab(tab.id)} className=" px-2 py-4 text-gray-400 hover:text-blue-500 focus:text-blue-500   focus:border-blue-500 border-b-2 border-black border-opacity-25 focus:outline-none">
              {tab.label}
            </button>
          ))
        }
      </div>
      <div className="">
        <Component />
      </div>
      
    </>
  );
};

export default Tabs;