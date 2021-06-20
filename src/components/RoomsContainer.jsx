import React from 'react';
import RoomFilter from './RoomFilter';
import RoomsList from './RoomList';
// import {RoomConsumer} from '../context';
import {withRoomConsumer} from '../context';
import Loading from './Loading';

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer >
//             {
//                  (storeValue)=>{
//                      const {loading, sortedRooms,rooms} = storeValue;
//                      if(loading){
//                         return  <Loading />
//                      }
//                      return (
//                         <div>
//                             <RoomFilter rooms={rooms} />
//                             <RoomsList rooms={sortedRooms} />
//                         </div>
//                      )
//                  }
//             }
//         </RoomConsumer>
        
//     )
// };

// HoC
function RoomContainer({context}){
 const {loading,sortedRooms,rooms}= context;
 if(loading){
    return  <Loading />
 }
 return (
    <div>
        <RoomFilter rooms={rooms} />
        <RoomsList rooms={sortedRooms} />
    </div>
 )
};

export default withRoomConsumer(RoomContainer);
