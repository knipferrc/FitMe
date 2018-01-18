import * as React from 'react'

const Navbar = () => (
  <nav className="nav bg-blue">
    <div className="nav-top">
      <div className="nav-brand text-white">FitMe</div>
    </div>
    <div className="nav-links">
      <a className="nav-link text-white" href="#!">
        Home
      </a>
      <a className="nav-link text-white" href="#!">
        Workouts
      </a>
      <a className="nav-link text-white" href="#!">
        Schedule
      </a>
    </div>
  </nav>
)

export default Navbar
