import "./Cards.css"
import React from "react";

export default function DynamicCard({children}: React.PropsWithChildren<NonNullable<unknown>>) {
    return (
        <div className="card bg-background-900">
            {children}
        </div>
    )
}