import React, {useState} from 'react'

export default function Profile(){
  const [pref, setPref] = useState('balanced')
  const [emergency, setEmergency] = useState('')
  const [elder, setElder] = useState(false)

  return (
    <div className="max-w-3xl mx-auto grid gap-4">
      <div className="bg-white p-4 rounded-xl shadow-soft">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-[var(--primary)] flex items-center justify-center text-white font-bold">JD</div>
          <div>
            <div className="font-semibold">John Doe</div>
            <div className="text-sm text-gray-500">johndoe@example.com</div>
          </div>
        </div>

        <div className="mt-4">
          <div className="text-sm text-gray-500">Default preference</div>
          <select value={pref} onChange={e=>setPref(e.target.value)} className="mt-2 p-2 rounded-xl border bg-white">
            <option value="cheapest">Cheapest</option>
            <option value="fastest">Fastest</option>
            <option value="balanced">Balanced</option>
          </select>
        </div>

        <div className="mt-4">
          <div className="text-sm text-gray-500">Emergency contact</div>
          <input value={emergency} onChange={e=>setEmergency(e.target.value)} placeholder="Phone number" className="mt-2 w-full p-3 rounded-xl border bg-white" />
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="text-sm">Elder-friendly mode</div>
            <div className="text-xs text-gray-500">Simpler UI and larger text</div>
          </div>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" checked={elder} onChange={e=>setElder(e.target.checked)} className="w-5 h-5" />
          </label>
        </div>
      </div>
    </div>
  )
}
