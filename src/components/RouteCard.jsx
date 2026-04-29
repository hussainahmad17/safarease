import React from 'react'
import TransportIconRow from './TransportIconRow'
import { Link } from 'react-router-dom'

export default function RouteCard({route, highlighted, onSelect}){
  return (
    <div className={`card ${highlighted? 'ring-2 ring-[var(--primary)]':''}`}>
      <div className="flex items-center justify-between">
        <div>
          <div className="small muted">{route.summary}</div>
          <div className="text-lg font-semibold">{route.name}</div>
        </div>
        <div className="text-right">
          <div className="small muted">{route.duration} min</div>
          <div className="text-2xl font-bold">${route.cost.toFixed(2)}</div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <TransportIconRow modes={route.modes} />
        <div className="flex items-center gap-2">
          <button onClick={()=>onSelect?.(route)} className="btn btn-primary">Select Route</button>
          <Link to={`/details/${route.id}`} className="btn btn-ghost">Details</Link>
        </div>
      </div>
    </div>
  )
}
