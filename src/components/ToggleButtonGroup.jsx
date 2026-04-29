import React from 'react'

export default function ToggleButtonGroup({options, value, onChange}){
  return (
    <div className="inline-flex rounded-xl bg-white shadow-soft p-1">
      {options.map(opt=> (
        <button
          key={opt.value}
          onClick={()=>onChange(opt.value)}
          className={`px-4 py-2 rounded-xl text-sm ${value===opt.value ? 'bg-[var(--primary)] text-white':'text-gray-700'}`}
        >{opt.label}</button>
      ))}
    </div>
  )
}
