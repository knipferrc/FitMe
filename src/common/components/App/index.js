import React from 'react'
import { renderRoutes } from 'react-router-config'

const App = ({ route }) => {
  return (
    <div>
      <div
        style={{
          height: 55,
          position: 'fixed',
          width: '100%',
          background: '#00f',
          paddingLeft: 200,
          color: '#fff'
        }}
      >
        Navbar
      </div>
      <div className="off-canvas">
        <a className="off-canvas-toggle btn btn-primary btn-action" href="#!">
          <i className="icon icon-menu" />
        </a>
        <div
          id="sidebar-id"
          className="off-canvas-sidebar"
          style={{ height: '100vh' }}
        >
          content
        </div>
        <a className="off-canvas-overlay" href="#!" />
        <div style={{ marginTop: 55, width: '100%' }}>
          {renderRoutes(route.routes)}
        </div>
      </div>
    </div>
  )
}

export default App
