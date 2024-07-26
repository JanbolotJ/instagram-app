


import React from 'react';

import Icons from "../../../assets/images/icons/sprite_core.png";
import cls from "../../../assets/styles/forms/Forms.module.scss";
import classNames from 'classnames';

export default function Errors({err}) {
  console.log({err})

  const errHandler = () => {

    if(err === "success") {
      return classNames(cls.ok_icons, cls.icons)
    }else if(err === "err") {
      return classNames(cls.err_icons, cls.icons)
    }
  }
  return (
    <div
        style={{background: `url(${Icons})`}}
        className={errHandler()}
    />
  )
}

