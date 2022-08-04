import React from 'react';
import classes from "./FromTo.module.css";
import MyInput from "../input/MyInput";

const FromTo = React.forwardRef(({t1, t2, pr1, pr2, pr3, pr4, ...props}, ref) => {
    return (
        <div ref={ref} className={classes.myFromTo} {...props}>
            <div className={classes.myFromToMini1}>
                <MyInput text_={t1} value = {pr1} onChange = {pr2} type="text" placeholder="От"/>
            </div>
            <div className={classes.myFromToMini2}>
                <MyInput text_={t2} value = {pr3} onChange = {pr4} type="text" placeholder="До"/>
            </div>
        </div>
    );
});

export default FromTo;