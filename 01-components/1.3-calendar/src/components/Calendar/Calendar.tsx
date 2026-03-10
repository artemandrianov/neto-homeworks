interface CalendarProps {
  date: Date
}

export default function Calendar({ date }: CalendarProps) {
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()

  const monthNames = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ]

  const monthNamesGenitive = [
    'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня',
    'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'
  ]

  const weekDayNames = [
    'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'
  ]

  const startOfMonth = new Date(year, month, 1)
  const startDayOfWeek = startOfMonth.getDay()

  const currentWeekDay = weekDayNames[date.getDay()]
  const currentMonthName = monthNames[month]
  const currentMonthNameGenitive = monthNamesGenitive[month]

  const offset = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1

  const startCalendarDate = new Date(year, month, 1 - offset)

  const weeks: Date[][] = []
  const currentPointer = new Date(startCalendarDate)

  while (true) {
    if (currentPointer.getMonth() !== month && currentPointer.getDay() === 1) {
      if (currentPointer.getTime() > new Date(year, month + 1, 0).getTime()) {
        break
      }
    }
    const week: Date[] = []
    for (let i = 0; i < 7; i++) {
      week.push(new Date(currentPointer))
      currentPointer.setDate(currentPointer.getDate() + 1)
    }
    weeks.push(week);
  }

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{currentWeekDay}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{day}</div>
          <div className="ui-datepicker-material-month">{currentMonthNameGenitive}</div>
          <div className="ui-datepicker-material-year">{year}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{currentMonthName}</span>&nbsp;<span className="ui-datepicker-year">{year}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" title="Понедельник">Пн</th>
            <th scope="col" title="Вторник">Вт</th>
            <th scope="col" title="Среда">Ср</th>
            <th scope="col" title="Четверг">Чт</th>
            <th scope="col" title="Пятница">Пт</th>
            <th scope="col" title="Суббота">Сб</th>
            <th scope="col" title="Воскресенье">Вс</th>
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, index) => (
            <tr key={index}>
              {week.map((dateObj) => {
                const isSameMonth = dateObj.getMonth() === month;
                const isToday = 
                  dateObj.getDate() === day &&
                  dateObj.getMonth() === month &&
                  dateObj.getFullYear() === year

                let className = ''
                if (!isSameMonth) {
                  className = 'ui-datepicker-other-month'
                } else if (isToday) {
                  className = 'ui-datepicker-today'
                }

                return (
                  <td key={dateObj.getTime()} className={className}>
                    {dateObj.getDate()}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}