import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflow: 'scroll',width:'100%', height: '400px' }}>
            {props.children}
        </div>
    );
};

export default Scroll;