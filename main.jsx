import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './my-projects/assembly-game/public/App.jsx'
  //import App from './my-projects/meme-gen/App.jsx'
  //import App from './my-projects/chef-claud/App.jsx'
    import App from './src/App.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
                             