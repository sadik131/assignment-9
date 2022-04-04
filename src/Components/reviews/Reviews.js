import React, { useState } from 'react';
import customHook from '../customHook/Hook';

const Reviews = () => {
    const [data ,setData] = customHook;
    console.log(data)
    return (
        <div>
            <h1>ths is weviews</h1>
        </div>
    );
};

export default Reviews;