import "./topbar.css"

export default function Topbar(props: {siteTitle: string}) {

    return (
        <>
            <div className={"topbar"}>
                <h1>{props.siteTitle}</h1>
                <a>placeholder</a>
            </div>
        </>
    )
}