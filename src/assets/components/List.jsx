import React from 'react';

const List = props => {
  return (
  <div  onClick={props.onClick} className="grid grid-cols-8 border-b-2 md:py-3 md:px-6 px-2 cursor-pointer border-secondary hover:bg-gray-700">
    <div className="col-span-7 flex">
      <img src={props.imgUrl} alt="" className="flex-shrink-0 w-12 h-12 bg-secondary m-0 rounded-full" />
      <div className="flex flex-col px-3 py-1 my-auto">
        <label className="text-left">{props.name}</label>
        <span className=" text-gray-600">@{props.username}</span>
      </div>      
    </div>
    <div className="col-span-1 flex justify-center">
      <button className="bg-secondary focus:outline-none hover:bg-red-700 block m-auto p-1 rounded-full">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="fill-current text-gray-500" d="M16.9449 15.66C17.3049 16.02 17.3049 16.58 16.9449 16.94C16.7649 17.12 16.5449 17.2 16.3049 17.2C16.0649 17.2 15.8449 17.12 15.6649 16.94L12.0049 13.28L8.34491 16.94C8.16491 17.12 7.94492 17.2 7.70492 17.2C7.46492 17.2 7.24493 17.12 7.06493 16.94C6.70493 16.58 6.70493 16.02 7.06493 15.66L10.7249 12L7.06493 8.34004C6.70493 7.98004 6.70493 7.42004 7.06493 7.06004C7.42493 6.70004 7.98491 6.70004 8.34491 7.06004L12.0049 10.72L15.6649 7.06004C16.0249 6.70004 16.5849 6.70004 16.9449 7.06004C17.3049 7.42004 17.3049 7.98004 16.9449 8.34004L13.2849 12L16.9449 15.66Z"/>
      </svg>
      </button>
    </div>       
  </div>
  );
};

List.defaultProps = {
  name: "Anonymous",
  username: "anonymous",
  imgUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
}

export default List;