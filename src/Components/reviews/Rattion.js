import React from 'react';
import CustomHook from '../customHook/Hook';
import Rcard from './Rcard';

const Rattion = () => {
    const [data ,setData] = CustomHook()
    return (
        <div>
            <h1 className='text-3xl text-center font-bold mt-5'>what our customer says!</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            
            {
                data.map(p=><Rcard key={p.id} p={p}></Rcard>)
            }
        </div>
        </div>
    );
};

export default Rattion;