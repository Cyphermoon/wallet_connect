import { useEffect, useState } from "react"

const Tabs = ({ children, getActiveTab = f => f }) => {
    const [activeTab, setActiveTab] = useState(children[2].props.label)

    const changeActiveTab = (label) => {
        setActiveTab(label)
    }

    useEffect(() => {
        getActiveTab(activeTab)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTab])

    return (
        <div>
            <ul className="flex justify-between items-center border-b-4 border-solid border-stone-200 py-1 px-1 mb-6">
                {children.map((child, idx) => {
                    const { label } = child.props

                    return <Tab activeTab={activeTab === label} changeActiveTab={changeActiveTab} label={label} key={idx} />
                })}

            </ul>

            <div>
                {children.map((child) => {
                    if (child.props.label !== activeTab) return undefined
                    return child.props.children
                })}
            </div>
        </div>
    )
}

export const Tab = ({ activeTab, label, changeActiveTab }) => {

    return (
        <li className={` ${activeTab && "border-b-2 border-blue-400 pb-2"} transition-all hover:border-b-2 hover:border-blue-400 text-base`}
            onClick={() => changeActiveTab(label)}>
            {label || "password"}
        </li>
    )
}

export default Tabs