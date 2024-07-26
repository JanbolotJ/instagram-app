import React from "react";

import cls from "../../../assets/styles/forms/Forms.module.scss";

export const TextInput = React.forwardRef(({
    value="",
    type="",
    placeholder="",
    err="",
    ...rest
}, ref) => {

    return (
        <input 
            value={value}
            type={type}
            placeholder={placeholder}
            {...rest}
            ref={ref}
            className={cls.text_input}
        />
    )
});