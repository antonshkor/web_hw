import React from 'react';
import classes from './MyInput.module.css';

const MyInput = React.forwardRef(({text_, ...props}, ref) => {
    return (
        <div>
            <b>{text_}</b>
            <input ref={ref} className={classes.myInput} {...props}/>
        </div>
    );
});

export default MyInput;