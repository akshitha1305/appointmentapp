// Write your code here
import './index.css'
import {format} from 'date-fns'

const AppointmentItem = props => {
  const {appointmentItemList, toggleStarIcon} = props
  const {appointment, date, id, isStarred} = appointmentItemList
  const newDate = format(new Date(date), 'dd MMMM yyyy, EEEE')

  const onCLickStarButt = () => {
    toggleStarIcon(id)
    console.log(isStarred)
  }

  const imgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="list-item">
      <div className="star-head-container">
        <h1 className="heading">{appointment}</h1>
        <button
          type="button"
          className="butt"
          onClick={onCLickStarButt}
          data-testid="star"
        >
          <img className="star-img" alt="star" src={imgUrl} />
        </button>
      </div>
      <p className="date">
        Date: <span>{newDate}</span>
      </p>
    </li>
  )
}

export default AppointmentItem
