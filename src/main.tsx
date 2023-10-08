import {getBySelector} from '@cloudwalker/dom-utils'
import ReactDOM from 'react-dom/client'

import './main.css'

import {App} from './App'

ReactDOM.createRoot(getBySelector('#root')).render(<App />)
