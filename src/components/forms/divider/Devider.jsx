

import React from 'react';

import cls from "../../../assets/styles/forms/Forms.module.scss"

export default function Devider({children}) {
  return (
    <div className={cls.divider}>
      {children}
    </div>
  )
}
