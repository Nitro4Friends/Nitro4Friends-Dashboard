import useLogin from "../hooks/useLogin.tsx";
import {ArrowSmallDownIcon, ArrowSmallUpIcon} from "@heroicons/react/20/solid";
import {Line} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {

    const userData = useLogin()

    if (!userData.user) return (
        <></>
    )

    // Get total credits and all credits from the last 30 days
    const totalCredits = userData.user?.totalCredits || 0
    const creditsLast30Days = userData.user?.creditModifications.filter((creditModification) => {
        return new Date(creditModification.timestamp).getTime() < Date.now() - 30 * 24 * 60 * 60 * 1000
    }).map((creditModification) => {
        return creditModification.amount
    }).reduce((a, b) => a + b, 0) || 0
    const change = (totalCredits - creditsLast30Days) / creditsLast30Days * 100
    const changeType = isNaN(change) ? "stagnate" : change > 0 ? 'increase' : change == 0 ? 'stagnate' : 'decrease'

    const inviteCount = userData.user?.inviteTimestamps.length || 0
    const inviteCountLast30Days = userData.user?.inviteTimestamps.filter((inviteTimestamp) => {
        return new Date(inviteTimestamp).getTime() < Date.now() - 30 * 24 * 60 * 60 * 1000
    }).length || 0
    const inviteChange = (inviteCount - inviteCountLast30Days) / inviteCountLast30Days * 100
    const inviteChangeType = isNaN(inviteChange) ? "stagnate" : inviteChange > 0 ? 'increase' : inviteChange == 0 ? 'stagnate' : 'decrease'

    const redeemCount = userData.user?.redeems.length || 0
    const redeemCountLast30Days = userData.user?.redeems.filter((redeem) => {
        return new Date(redeem.redeemedDate).getTime() < Date.now() - 30 * 24 * 60 * 60 * 1000
    }).length || 0
    const redeemChange = (redeemCount - redeemCountLast30Days) / redeemCountLast30Days * 100
    const redeemChangeType = isNaN(redeemChange) ? "stagnate" : redeemChange > 0 ? 'increase' : redeemChange == 0 ? 'stagnate' : 'decrease'

    const stats = [
        { name: 'Total Credits', stat: totalCredits, previousStat: creditsLast30Days, change: change, changeType: changeType },
        { name: 'Total Invites', stat: inviteCount, previousStat: inviteCountLast30Days, change: inviteChange, changeType: inviteChangeType },
        { name: 'Nitro\'s payed out', stat: redeemCount, previousStat: redeemCountLast30Days, change: redeemChange, changeType: redeemChangeType },
    ]

    // Chart data
    const labels = userData.user?.creditModifications.filter((creditModel) => {
        return new Date(creditModel.timestamp).getTime() > Date.now() - 30 * 24 * 60 * 60 * 1000
    }).map((creditModification) => {
        return {
            date: new Date(creditModification.timestamp).getTime(),
            amount: creditModification.amount
        }
    }).sort((a, b) => a.date - b.date).map((data) => {
        return new Date(data.date).toLocaleDateString()
    })
    const values = userData.user?.creditModifications.filter((creditModel) => {
        return new Date(creditModel.timestamp).getTime() > Date.now() - 30 * 24 * 60 * 60 * 1000
    }).map((creditModification) => {
        return {
            date: new Date(creditModification.timestamp).getTime(),
            amount: creditModification.amount
        }
    }).sort((a, b) => a.date - b.date).map((data) => {
        return data.amount
    })

    const data = {
        labels: labels,
        datasets: [{
            label: 'Credits',
            data: values,
            fill: true,
            borderColor: '#4169e1',
            backgroundColor: '#4169e166',
            tension: 0.1,
        }]
    }

    return (

        <div>
            <h3 className="text-lg leading-6 font-semibold text-white">Last 30 days</h3>
            <dl className="mt-5 grid grid-cols-1 rounded-lg bg-background-900 overflow-hidden shadow divide-y divide-background-900 md:grid-cols-3 md:divide-y-0 md:divide-x">
                {stats.map((item) => (
                    <div key={item.name} className="px-4 py-5 sm:p-6">
                        <dt className="text-base font-normal text-white">{item.name}</dt>
                        <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                            <div className="flex items-baseline text-2xl font-semibold text-text-100">
                                {item.stat}
                                <span className="ml-2 text-sm font-medium text-text-400">from {item.previousStat}</span>
                            </div>

                            <div
                                className={classNames(
                                    item.changeType === 'increase' ? 'bg-green-100 text-green-800' : item.changeType === 'stagnate' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800',
                                    'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0'
                                )}
                            >
                                {item.changeType === 'increase' ? (
                                    <ArrowSmallUpIcon
                                        className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500"
                                        aria-hidden="true"
                                    />
                                ) : (
                                    item.changeType === 'stagnate' ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-yellow-500"
                                                viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd"
                                                    d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 110-10 5 5 0 010 10z"
                                                    clipRule="evenodd"/>
                                            </svg>
                                    ) : (
                                        <ArrowSmallDownIcon
                                            className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500"
                                            aria-hidden="true"
                                        />
                                    )
                                )}

                                <span
                                    className="sr-only">{item.changeType === 'increase' ? 'Increased' : 'Decreased'} by</span>
                                {item.change}
                            </div>
                        </dd>
                    </div>
                ))}
            </dl>

            <div className="mt-10 sm:mt-10">
                <h3 className="text-lg leading-6 font-semibold text-white">Credit modifications</h3>
                <dl className="mt-5 grid grid-cols-1 rounded-lg bg-background-900 overflow-hidden shadow md:grid-cols-3">
                    <div className="px-4 py-5 sm:p-6">
                        <div className="flex items-baseline text-2xl font-semibold text-text-100 w-full">
                            <Line data={data} />
                        </div>
                    </div>
                </dl>
            </div>
        </div>

    )
}