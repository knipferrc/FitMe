import * as React from 'react'

interface IPanelProps {
  title: string
  extra?: any
  children: any
}

const Panel: React.SFC<IPanelProps> = ({ title, extra, children }) => (
  <div className="panel">
    <div className="panel-header">
      <div className="panel-title">{title}</div>
      <div>{extra}</div>
    </div>
    <div className="panel-content">{children}</div>
  </div>
)

export default Panel
