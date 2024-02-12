import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { PostHogProvider} from 'posthog-js/react'
//todo:make sure to replace the PUBLIC_POSTHOG_HOST and PUBLIC_POSTHOG_KEY as a env variables later on
const PUBLIC_POSTHOG_HOST ='phc_sBCVtkw87IViWsfYORaj2cKf6Tq1ps7eUxrpPXoYZJJ';
const PUBLIC_POSTHOG_KEY = 'https://app.posthog.com';


const options = {
  api_host: PUBLIC_POSTHOG_HOST,
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PostHogProvider 
      apiKey={PUBLIC_POSTHOG_KEY}
      options={options}
    >
    <App />
    </PostHogProvider>
  </React.StrictMode>,
)
