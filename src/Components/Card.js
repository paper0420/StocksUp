import React from 'react';

const Card = (props) => {

    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>

            <div>
                <h2>{props.name}</h2>
                <p>{props.symbol}</p>
                <p>{props.price}</p>
            </div>
        </div>

    );
}

export default Card;