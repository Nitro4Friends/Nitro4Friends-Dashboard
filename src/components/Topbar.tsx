import "./topbar.css"
import logo from "../assets/default.png"
import useLogin from "../hooks/useLogin.tsx";

export default function Topbar(props: {siteTitle: string}) {

    const userData = useLogin()
    return (
        <>
            <div className={"topbar"}>
            <div className={"topbar-title"}>
                <h1>{props.siteTitle}</h1>
                <a>placeholder</a>
            </div>
            <div className={"topbar-data flex flex-row"}>
                <a>{userData.user?.totalCredits || 0}</a><a className={"pl-1"}>Credits</a>
                <div className={"cursor-pointer pl-3"} onClick={() => {
                    const url = userData.loginURL
                    if (typeof url === "string") {
                        window.location.href = url
                    }
                }}>
                    <img src={userData.user?.avatarURL || logo} alt={"defaultavatar"}
                         className={"scale-75 rounded-full p-0 right-5 top-7 absolute z-0"}
                         draggable={false}/>
                    {userData.user?.avatarDecorationURL && (
                        <img src={userData.user?.avatarDecorationURL} alt={"avatardecoration"}
                             className={"scale-90 p-0 right-5 top-7 absolute z-10"}
                                draggable={false}/>
                    )}
                </div>
            </div>
            </div>
        </>

    )
}