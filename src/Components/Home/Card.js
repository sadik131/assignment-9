import React from 'react';

const Card = (props) => {
    const {name , picture , comment} = props.user
    console.log(picture)
    return (
        <div>
            <img src={picture}alt="" />
            <h1></h1>
            <p></p>
        </div>
    );
};

export default Card;