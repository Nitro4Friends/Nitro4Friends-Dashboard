import DynamicCard from "./DynamicCard.tsx";

class StatCardProps {
    title: string = "";
    value: string = "";
    icon: string = "";
    color: string = "primary";
}

export default function StatCard({ title, value, icon, color }: StatCardProps) {
    return (
        <DynamicCard>
            <div className="statcard">
                <h1 style={{color: color}}>{value}</h1>
                {icon && <i className={icon} style={{color: color}}></i>}
                <div className="title" style={{color: color}}>{title}</div>
            </div>
        </DynamicCard>
    )
}