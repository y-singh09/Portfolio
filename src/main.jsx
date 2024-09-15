import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Skills from './components/Skills/Skills.jsx'
import About from './components/About/About.jsx'
import  Contact  from './components/Contact/Contact.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Projects from './components/Projects/Project.jsx'
import Certifications from './components/Certifications/Certifications.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children:[
      {path:"",
        element:<Home />
      },
      {
        path:"education",
        element:<About />
      },
    
      {
        path:"projects",
        element:<Projects />
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"skills",
        element:<Skills/>
      },
      { path: "certifications",
        element: <Certifications /> },
     
    ]


  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
