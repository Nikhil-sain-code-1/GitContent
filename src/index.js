import {createRoot} from 'react-dom/client'
import App from './App'
var domNode=document.getElementById('root')
var root = createRoot(domNode);
root.render(<App/>)