import {Dispatch, SetStateAction} from "react";

export default function SidebarButton(props: {buttonString: string, siteView: string; setSiteView: Dispatch<SetStateAction<string>>; }) {

    return (
        <button onClick={() => props.setSiteView(props.buttonString)}
                className={activeClassName(props.siteView, props.buttonString)}><a>{props.buttonString}</a></button>
    )
}

function activeClassName(siteView: string, buttonName: string) {
    if (siteView === buttonName) {
        return "active"
    } else {
        return ""
    }
}