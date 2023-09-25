import React from 'react';

// Heading component rendered...

const Heading = () => {
    const heading = {
        textAlign: 'center',
        fontSize:  '2.5rem',
        fontFamily: 'sans-serif',
        position: 'absolute',
        top: '0px',
        left: '45%',
        zIndex: '10',
        fontWeight: '1000'
    }
    return (
        <div>
            <h1 style={heading}>Restaurant Menu</h1>
        </div>
    )
}

export default Heading;