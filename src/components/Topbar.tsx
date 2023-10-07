import "./topbar.css"
import logo from "../assets/default.png"

export default function Topbar(props: {siteTitle: string}) {

    return (
        <>
            <div className={"topbar"}>
            <div className={"topbar-title"}>
                <h1>{props.siteTitle}</h1>
                <a>placeholder</a>
            </div>
            <div className={"topbar-data flex flex-row"}>
                <a>6920 </a><a>Credits</a>
                <img src={logo} alt={"defaultavatar"} id={"defaultavatar"}  draggable={false}/>
            </div>
            </div>
        </>

    )
}