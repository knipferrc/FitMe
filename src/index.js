import 'antd/dist/antd.min.css'

import App from './components/App'
import React from 'react'
import registerServiceWorker from './utils/registerServiceWorker'
import { render } from 'react-dom'

render(<App />, document.getElementById('root'))

registerServiceWorker()
