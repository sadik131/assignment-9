import React from 'react';
import CustomHook from '../customHook/Hook';
import Rcard from './Rcard';

const Rattion = () => {
    const [data ,setData] = CustomHook()
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                data.map(p=><Rcard key={p.id} p={p}></Rcard>)
            }
        </div>
    );
};

export default Rattion;