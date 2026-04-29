import React from 'react'

export default function RewardCard({reward}){
  return (
    <div className="card">
      <div className="flex items-start justify-between">
        <div>
          <div className="small muted">{reward.code}</div>
          <div className="font-semibold">{reward.title}</div>
          <div className="small muted mt-1">{reward.description}</div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold">{reward.points} pts</div>
        </div>
      </div>
    </div>
  )
}
