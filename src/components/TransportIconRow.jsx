import React from 'react'

const Icon = ({type})=>{
  const size = 18
  switch(type){
    case 'bus': return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="5" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/><circle cx="7.5" cy="17.5" r="1.5" fill="currentColor"/><circle cx="16.5" cy="17.5" r="1.5" fill="currentColor"/></svg>
    case 'metro': return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7h16v7H4z" stroke="currentColor" strokeWidth="1.5"/><path d="M8 18v-2" stroke="currentColor" strokeWidth="1.5"/><path d="M16 18v-2" stroke="currentColor" strokeWidth="1.5"/></svg>
    case 'bike': return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="17" r="3" stroke="currentColor" strokeWidth="1.5"/><circle cx="18" cy="17" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M6 17l5-7 4 7" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
    case 'walk': return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4a1 1 0 110 2 1 1 0 010-2z" fill="currentColor"/><path d="M7 8l3 6v6" stroke="currentColor" strokeWidth="1.5"/><path d="M17 8l-3 6v6" stroke="currentColor" strokeWidth="1.5"/></svg>
    case 'ride': return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="7" width="18" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/><circle cx="7.5" cy="17.5" r="1.2" fill="currentColor"/><circle cx="16.5" cy="17.5" r="1.2" fill="currentColor"/></svg>
    default: return null
  }
}

export default function TransportIconRow({modes}){
  return (
    <div className="flex items-center gap-3">
      {modes.map((m, i)=> (
        <div key={i} className="flex items-center gap-2">
          <div className="transport-icon">
            <Icon type={m} />
          </div>
        </div>
      ))}
    </div>
  )
}
