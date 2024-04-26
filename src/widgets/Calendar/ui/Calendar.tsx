import DatePicker from "react-datepicker";
import cls from './Calendar.module.scss'
import "react-datepicker/dist/react-datepicker.css"
import { useState } from "react";
import moment from 'moment'

interface CalendarProps {
    date: string,
    setDate: (date: string) => void,
    placeholder: string
}

export const Calendar = ({date, setDate, placeholder}: CalendarProps) => {
    const [startDate, setStartDate] = useState(null);

    const dateHandler = (date: Date) => {
        setStartDate(date)
        const formattedDate = moment(date).format('YYYY-MM-DD')
        // console.log(formattedDate)
        setDate(formattedDate)
    }

  return (
    <div >
        <DatePicker  placeholderText={placeholder} dateFormat="yyyy-MM-dd" selected={startDate} onChange={(date) => dateHandler(date)} />
    </div>
  )
}
