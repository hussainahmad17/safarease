import React, {useState} from 'react'
import InputField from '../components/InputField'
import ToggleButtonGroup from '../components/ToggleButtonGroup'
import { useNavigate } from 'react-router-dom'

export default function Home(){
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [mode, setMode] = useState('balanced')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const options = [
    {label: 'Cheapest', value: 'cheapest'},
    {label: 'Fastest', value: 'fastest'},
    {label: 'Balanced', value: 'balanced'}
  ]

  const findRoutes = ()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
      navigate('/results',{state:{from,to,mode}})
    },900)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-xl p-6 shadow-soft">
        <h1 className="text-2xl font-bold">Plan your trip</h1>
        <p className="text-sm text-gray-600 mt-1">Find the most efficient and affordable route.</p>

        <div className="mt-4 grid gap-3">
          <InputField label="From" placeholder="Enter start location" value={from} onChange={setFrom} />
          <InputField label="To" placeholder="Enter destination" value={to} onChange={setTo} />
          <div className="flex items-center justify-between mt-2">
            <ToggleButtonGroup options={options} value={mode} onChange={setMode} />
            <div className="text-sm text-gray-500">Mode: <strong className="ml-1">{mode}</strong></div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <button onClick={findRoutes} className="px-5 py-3 rounded-xl btn-gradient text-white font-semibold shadow">{loading? 'Searching...':'Find Routes'}</button>
            <button onClick={()=>{setFrom('Home'); setTo('Work');}} className="px-4 py-3 rounded-xl bg-white border">Use sample</button>
          </div>
        </div>
      </div>
    </div>
  )
}
