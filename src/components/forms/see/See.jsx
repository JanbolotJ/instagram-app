

import React from 'react'
import Icon from "../../../assets/images/icons/png-klev-club-wpi6-p-glaz-zacherknutii-png-4.png"
import cls from "../../../assets/styles/forms/Forms.module.scss"

export default function See() {
  return (
    <div 
        style={{background:`url(${Icon})`}}
        className={cls.see}
    />
  )
}
