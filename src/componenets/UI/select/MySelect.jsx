import React from 'react';
import classes from './MySelect.module.css';
import PostItem from "../../PostItem";

const MySelect = React.forwardRef(({children, text_, ...props}, ref) => {
    return (
        <div>
            <b>{text_}</b>
            <select ref={ref} className={classes.mySelect} {...props}>
                {children}
            </select>
        </div>
    );
});

export default MySelect;