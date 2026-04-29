import React from 'react'
import RewardCard from '../components/RewardCard'

const rewards = [
  { code: 'DISC10', title: '10% off Ride', description: 'Valid for next 7 days', points: 120 },
  { code: 'BUS5', title: '$5 Off Bus Pass', description: 'Save on your monthly pass', points: 300 },
  { code: 'BIKE2', title: 'Free 2-hr Bike', description: 'At participating hubs', points: 80 }
]

export default function Rewards(){
  const userPoints = 540
  const progress = Math.min(100, (userPoints/1000)*100)

  return (
    <div className="max-w-4xl mx-auto grid gap-4">
      <div className="bg-white p-4 rounded-xl shadow-soft flex items-center justify-between">
        <div>
          <div className="text-sm text-gray-500">Your Points</div>
          <div className="text-2xl font-bold">{userPoints} pts</div>
        </div>
        <div className="w-1/2">
          <div className="text-sm text-gray-500">Progress to next tier</div>
          <div className="w-full bg-gray-100 rounded-xl h-3 mt-2 overflow-hidden">
            <div style={{width: `${progress}%`}} className="h-3 bg-[var(--primary)]" />
          </div>
        </div>
      </div>

      <div className="grid gap-3">
        {rewards.map(r=> <RewardCard key={r.code} reward={r} />)}
      </div>
    </div>
  )
}
