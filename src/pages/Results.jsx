import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import routesData from '../data/routes'
import RouteCard from '../components/RouteCard'
import LoadingSpinner from '../components/LoadingSpinner'

export default function Results(){
  const {state} = useLocation()
  const [routes, setRoutes] = useState([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState(null)

  useEffect(()=>{
    setLoading(true)
    // simulate different sorting based on preference
    setTimeout(()=>{
      let res = [...routesData]
      if(state?.mode === 'cheapest') res.sort((a,b)=>a.cost-b.cost)
      else if(state?.mode === 'fastest') res.sort((a,b)=>a.duration-b.duration)
      else res.sort((a,b)=>b.score-a.score)
      setRoutes(res)
      setSelected(res[0])
      setLoading(false)
    },800)
  },[state])

  if(loading) return <LoadingSpinner />

  return (
    <div className="max-w-4xl mx-auto grid gap-4">
      <div className="text-sm text-gray-600">Results for <strong>{state?.from || 'A'}</strong> → <strong>{state?.to || 'B'}</strong></div>
      {routes.map(r=> (
        <RouteCard key={r.id} route={r} highlighted={selected?.id===r.id} onSelect={setSelected} />
      ))}
      <div className="mt-4 flex justify-end">
        <button disabled={!selected} className="px-4 py-3 rounded-xl btn-gradient text-white">Proceed with selected</button>
      </div>
    </div>
  )
}
