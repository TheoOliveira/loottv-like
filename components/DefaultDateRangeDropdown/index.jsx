import React from 'react'
import useGlobalState from '../../store/store'


export default function DefaultDateRangeDropdown() {
  const store = useGlobalState()

    const defaultRange = [
        {
            label: "Today",
            value: "today"
        },
        {
            label: "Last Week",
            value: "week"
        },
        {
            label: "Last Month",
            value: "month"
        },
        {
            label: "Last Four Months",
            value: "fourMonths"
        },
    ]

    return (
        <>
            <select onChange={(e)=> store.setDefaultDateRange(e.currentTarget.value)}>
                {defaultRange.map((item) => (
                    <option value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
        </>
    )
}
