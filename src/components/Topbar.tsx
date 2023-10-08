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
                <img src={userData.user?.avatarURL || logo} alt={"defaultavatar"} id={"defaultavatar"} draggable={false}
                     className={"scale-75 cursor-pointer"}
                        onClick={() => {
                            const url = userData.getDiscordLoginURL()
                            console.log("Redirecting to: ")
                            console.log(url)
                            window.location.href = url
                        }}
                />
            </div>
            </div>
        </>

    )
}