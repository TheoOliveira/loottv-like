import React from 'react'
import useGlobalState from '../../store/store'
import {
checkToday,
checkYesterday,
checkPastWeek,
checkPastMonth,
checkPastFourMonths,
} from "../../utils/checkPeriods"

export default function DefaultDateRangeDropdown() {
  const store = useGlobalState()

    const defaultRange = [
        {
            label: "Last 24 Hours",
            value: checkYesterday()
        },
        {
            label: "Last Week",
            value: checkPastWeek()
        },
        {
            label: "Last Month",
            value: checkPastMonth()
        },
        {
            label: "Last Four Months",
            value: checkPastFourMonths()
        },
    ]

    return (
        <>  
            <select onChange={(e)=> store.setDefaultDateRange(e.currentTarget.value)}>
                {defaultRange.map((item, i) => (
                    <option key={i} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
        </>
    )
}
