import React from 'react';

const Button = (props) => {
    return (
        <button className='border-solid border-black border-[1px] text-black py-1 px-2'>
            {props.children}
        </button>
    );
};

export default Button;