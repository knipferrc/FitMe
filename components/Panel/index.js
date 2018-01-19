import React from 'react'

const Panel = ({ title, extra, children }) => (
  <div className="panel">
    <div className="panel-header">
      <div className="panel-title">{title}</div>
      <div>{extra}</div>
    </div>
    <div className="panel-content">{children}</div>
  </div>
)

export default Panel
