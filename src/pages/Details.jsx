import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import routesData from '../data/routes'

export default function Details(){
  const { id } = useParams()
  const route = routesData.find(r=>r.id===id)
  const navigate = useNavigate()

  if(!route) return <div>Route not found</div>

  return (
    <div className="max-w-3xl mx-auto grid gap-4">
      <div className="bg-white rounded-xl p-4 shadow-soft">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-500">{route.summary}</div>
            <div className="text-2xl font-bold">{route.name}</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">{route.duration} min</div>
            <div className="text-2xl font-bold">${route.cost.toFixed(2)}</div>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold">Journey steps</h3>
          <ol className="mt-3 space-y-3">
            {route.segments.map((s, i)=> (
              <li key={i} className="p-3 rounded-xl bg-gray-50 border">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium capitalize">{s.type}</div>
                    <div className="text-xs text-gray-500">{s.detail}</div>
                  </div>
                  <div className="text-sm text-gray-700">{s.duration} min</div>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-4 flex gap-3">
            <button onClick={()=>navigate('/results')} className="px-4 py-3 rounded-xl bg-white border">Back</button>
            <button className="px-4 py-3 rounded-xl btn-gradient text-white">Start Journey</button>
            <button className="px-4 py-3 rounded-xl bg-white border">Book Ride</button>
          </div>
        </div>
      </div>
    </div>
  )
}
