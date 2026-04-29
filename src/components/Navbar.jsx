import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({to, children}) => (
  <NavLink to={to} className={({isActive}) => `text-sm ${isActive? 'active':'muted'}` }>
    {children}
  </NavLink>
)

export default function Navbar(){
  return (
    <nav className="nav">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="brand-logo">SE</div>
          <div>
            <div className="text-lg font-semibold">SafarEase</div>
            <div className="text-sm muted">Smart urban travel</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/rewards">Rewards</NavItem>
          <NavItem to="/profile">Profile</NavItem>
        </div>

        <div className="flex items-center gap-3">
          <button className="btn btn-ghost">Help</button>
          <button className="btn btn-primary">Sign in</button>
        </div>
      </div>
    </nav>
  )
}
