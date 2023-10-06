import "./sidebar.css"
import {Dispatch, SetStateAction} from "react";
import logo from "../assets/logoName.png"
import SidebarButton from "./SidebarButton.tsx";
import AdComponent from "./AdComponent.tsx";

export default function Sidebar(props: {siteView: string; setSiteView: Dispatch<SetStateAction<string>>; }) {
    const isMobile = window.innerWidth <= 768;
    const dashboardText = isMobile ? 'Dash board' : 'Dashboard';
    return (
        <div className={"sidebar"}>
            {/*// Untereinander: Logo, Name, 4 Buttons, Ad Banner, 4 Links*/}

            <div className={"sidebar-logo"}>
                <img src={logo} alt={"Logo"} className={"sidelogo"} draggable={false}/>
            </div>


            <div className={"sidebar-buttons"}>
                <SidebarButton buttonString={dashboardText} siteView={props.siteView}
                               setSiteView={props.setSiteView}></SidebarButton>
                <SidebarButton buttonString={"Invite Friends"} siteView={props.siteView}
                               setSiteView={props.setSiteView}></SidebarButton>
                <SidebarButton buttonString={"Earn Credits"} siteView={props.siteView}
                               setSiteView={props.setSiteView}></SidebarButton>
                <SidebarButton buttonString={"Redeem Nitro"} siteView={props.siteView}
                               setSiteView={props.setSiteView}></SidebarButton>
            </div>

            <div className={"sidebar-banner"}>
                <script data-cfasync="false" type="text/javascript"
                        src="//predictivadnetwork.com/a/display.php?r=7555326"></script>
                <script data-cfasync="false" type="text/javascript"
                        src="//predictivadnetwork.com/a/display.php?r=7555326"></script>

                <AdComponent></AdComponent>

                <script data-cfasync="false" type="text/javascript"
                        src="//greatdexchange.com/a/display.php?r=7555162"></script>
            </div>

            <div className={"sidebar-links"}>
                <a>How it works </a>
                <br></br>
                <a>About us </a>
                <br></br>
                <a>Imprint </a>
                <br></br>
                <a>Data Saftey </a>
            </div>
        </div>
    )
}