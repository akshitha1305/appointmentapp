// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'
import {v4} from 'uuid'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {
    appointment: '',
    date: '',
    isStarredButtClicked: false,
    starredItems: [],
    appointmentItemList: [],
  }

  onChangeTextInput = event => {
    this.setState({
      appointment: event.target.value,
    })
  }

  onChangeDate = event => {
    this.setState({
      date: event.target.value,
    })
  }

  onSubmitadd = event => {
    event.preventDefault()

    const {appointment, date} = this.state
    const newItem = {appointment, date, id: v4(), isStarred: false}
    this.setState(prevState => ({
      appointmentItemList: [...prevState.appointmentItemList, newItem],
      appointment: '',
      date: '',
    }))
  }

  toggleStarIconButt = id => {
    this.setState(prevState => ({
      appointmentItemList: prevState.appointmentItemList.map(eachItem => {
        if (id === eachItem.id) {
          return {...eachItem, isStarred: !prevState.isStarred}
        }
        return eachItem
      }),
    }))
  }

  starredButt = () => {
    const {appointmentItemList} = this.state

    const allStarredItems = appointmentItemList.filter(
      each => each.isStarred === true,
    )
    this.setState(prevState => ({
      isStarredButtClicked: !prevState.isStarredButtClicked,
      starredItems: [...prevState.starredItems, allStarredItems],
    }))
  }

  render() {
    const {
      appointmentItemList,
      appointment,
      date,
      isStarredButtClicked,
    } = this.state

    const displayItems = isStarredButtClicked
      ? appointmentItemList.map(each => each.isStarred === true)
      : appointmentItemList.map(each => each)

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Add Appointment</h1>
          <div className="form-img-container">
            <form className="form-container" onSubmit={this.onSubmitadd}>
              <label htmlFor="textEl" className="labelEl">
                TITLE
              </label>
              <br />
              <input
                onChange={this.onChangeTextInput}
                className="inputEl"
                placeholder="Title"
                id="textEl"
                type="text"
                value={appointment}
              />
              <br />
              <label htmlFor="dateEl" className="labelEl">
                DATE
              </label>
              <br />
              <input
                onChange={this.onChangeDate}
                value={date}
                className="inputEl"
                id="dateEl"
                type="date"
              />
              <br />
              <button type="submit" className="AddButt">
                Add
              </button>
            </form>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>
          <hr />
          <div className="appointment-container">
            <h1 className="appoint-head">Appointments</h1>
            <div className="butt-container">
              <button
                type="button"
                onClick={this.starredButt}
                className="starred-butt"
              >
                Starred
              </button>
            </div>
          </div>
          <ul className="list-type">
            {displayItems.map(each => (
              <AppointmentItem
                key={each.id}
                appointmentItemList={each}
                toggleStarIcon={this.toggleStarIconButt}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments
