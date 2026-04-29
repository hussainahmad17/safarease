import React from 'react'

export default function InputField({label, placeholder, value, onChange}){
  return (
    <label className="block">
      <div className="text-sm font-medium mb-1">{label}</div>
      <input
        value={value}
        onChange={e=>onChange?.(e.target.value)}
        placeholder={placeholder}
        className="input"
      />
    </label>
  )
}
