import React from 'react';

const Card = (props) => {
    const {name , picture , comment} = props.user
    return (
        <div className='shadow-xl rounded-lg m-5 px-10 py-10 justify-center'>
            <img className='h-24 w-20 rounded-lg' src={picture}alt="" />
            <h1 className='text-3xl'>Name: {name}</h1>
            <p className='text-2xl font-serif'>Comment: {comment}</p>
        </div>
    );
};

export default Card;