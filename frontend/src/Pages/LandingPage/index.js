import React, { useState } from 'react';
import DownloadButton from "../../components/Buttons/DownloadButton";
import CodeContainer from "../../components/CodeContainer";
import NavbarTwo from "../../components/NavbarTwo";
import Sidebar from "../../components/SideBar";
import './index.css'

const LandingPage = () => {
    const [selectedCode, setSelectedCode] = useState(null);
    const [showSidebar, setShowSidebar] = useState(false);
    const toggleSidebar = () => setShowSidebar(!showSidebar);
    return(
        <div>
            <NavbarTwo/>
            <div className="landing-body">
                <div className='sidebar'>
                    <button onClick={toggleSidebar} className="toggle_button">Toggle Sidebar</button> 
                    <div>
                        {showSidebar && <Sidebar setSelectedCode={setSelectedCode}/>} 
                    </div>     
                </div>      
                <div>
                    <CodeContainer selectedCode={selectedCode}/>
                </div>
            </div>
        </div> 
    )
}
export default LandingPage