import React from 'react'
import "./Search.css"
import "react-date-range/dist/styles.css" // main style file
import "react-date-range/rist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range"

// DATE PICKER COMPONENT

// npm i react-date-range
function Search() {
    const [startDate, setStartDate] = useState
    (new Date());
    const [endDate, setEndDate] = useState
    (new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate)
        sentEndDate(ranges.selection.endDate)
    }


    return (
        <div className="search">
            <DateRangePicker ranges={
                [selectionRange]
            }
        </div>
    )
}

export default Search
