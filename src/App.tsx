import './App.css'
import Sidebar from "./components/Sidebar.tsx";
import Topbar from "./components/Topbar.tsx";
import {useState} from "react";
import Dashboard from "./sites/Dashboard.tsx";

function App() {
  const [siteView, setSiteView] = useState('Dashboard')

  return (
      <>
        {/*// Components: Sidebar, Topbar, Content*/}
        <div className="container">
            <Sidebar siteView={siteView} setSiteView={setSiteView}/>
            <Topbar siteTitle={siteView}/>

            {/*// Content View, based on site navigation*/}
            <div className="mt-32 max-w-7xl mx-auto sm:px-6 lg:px-8">
            {
                siteView === 'Dashboard' && (
                    <Dashboard />
                )
            }
            </div>
        </div>
      </>
  )
}

export default App
