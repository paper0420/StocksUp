import React from 'react';

const NewsCard = (props) => {

    return (
        <div className='bg-lightest-blue dib br3 pa3 ma3 grow bw2 shadow-5 tc' style={{display:'flex', justifyContent: 'center' }} >

            <div>
                <h2>{props.title}</h2>
            
                <p className='pa2 ma3'>{props.summary}</p>
                
            </div>
        </div>

    );
}

export default NewsCard;