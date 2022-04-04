import React, { useState } from 'react';
import Chart from './Chart';

const Dashbord = () => {
    const [datas ,setData] =useState([])
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setData(data))
    return (
        <div>
            {
                datas.map(data=><Chart data={data}></Chart>)
            }
        </div>
    );
};

export default Dashbord;