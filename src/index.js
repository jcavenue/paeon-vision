import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Assets/css/index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

const root = createRoot(document.getElementById('root'))
root.render(
    <StrictMode>
        <App />
    </StrictMode>
)

serviceWorkerRegistration.register()
