import React from 'react'

export default function ToggleButtonGroup({options, value, onChange}){
  return (
    <div className="toggle-group">
      {options.map(opt=> (
        <button
          key={opt.value}
          onClick={()=>onChange(opt.value)}
          className={`toggle-btn ${value===opt.value ? 'active':''}`}
        >{opt.label}</button>
      ))}
    </div>
  )
}
