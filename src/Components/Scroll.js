import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '5px soid black', height: '600px' }}>
            {props.children}
        </div>
    );
};

export default Scroll;