import {Component} from 'react'

import {AiOutlineArrowLeft} from 'react-icons/ai'
import {BiPhoneCall} from 'react-icons/bi'
import {MdOutlineMail} from 'react-icons/md'
import {SlCalender} from 'react-icons/sl'

import './index.css'

class Appointment extends Component {
  render() {
    return (
      <div className="appointment-container">
        <div>
          <AiOutlineArrowLeft className="appointment-arrow" />
          <h1 className="appointment-title">Book an Appointment</h1>
        </div>
        <div className="container">
          <div className="appointment-image-container">
            <img
              src="https://res.cloudinary.com/df4rsezuj/image/upload/v1665728547/woman-doctor-png-transparent-woman-doctor-images-7_p5vrrf.png"
              alt="app-profile"
              className="appointment-profile-image"
            />
          </div>
          <div className="whole-contact-container">
            <div>
              <h1 className="name">Dr.Meghana Sen</h1>
              <div className="doc-prof-container">
                <h2 className="doc-prof">Dentist</h2>
              </div>
            </div>

            <div>
              <div className="contact-container">
                <BiPhoneCall className="icon" />
                <p className="text">Call</p>
              </div>
              <div className="contact-container">
                <MdOutlineMail className="icon" />
                <p className="text">Mail</p>
              </div>
            </div>
          </div>
        </div>

        <div className="all-days-container">
          <h2 className="select-date">Select Date</h2>
          <div className="all-days">
            <div className="calender-container">
              <SlCalender className="calender" />
              <p className="day">Mon</p>
              <h1 className="date">17</h1>
            </div>

            <div className="calender-container">
              <SlCalender className="calender" />
              <p className="day">Tue</p>
              <h1 className="date">18</h1>
            </div>

            <div className="calender-container">
              <SlCalender className="calender" />
              <p className="day">Wed</p>
              <h1 className="date">19</h1>
            </div>

            <div className="calender-container">
              <SlCalender className="calender" />
              <p className="day">Thu</p>
              <h1 className="date">20</h1>
            </div>

            <div className="calender-container">
              <SlCalender className="calender" />
              <p className="day">Fri</p>
              <h1 className="date">21</h1>
            </div>

            <div className="calender-container">
              <SlCalender className="calender" />
              <p className="day">Sat</p>
              <h1 className="date">22</h1>
            </div>
          </div>
        </div>

        <div className="all-timings">
          <h2 className="select-time">Select Schedule Time</h2>
          <div className="all-tym-container">
            <div className="tym-container">
              <h1 className="tym">10:00 AM</h1>
            </div>
            <div className="tym-container">
              <h1 className="tym">11:00 AM</h1>
            </div>
            <div className="tym-container">
              <h1 className="tym">12:00 AM</h1>
            </div>
            <div className="tym-container">
              <h1 className="tym">01:00 PM</h1>
            </div>
            <div className="tym-container">
              <h1 className="tym">02:00 PM</h1>
            </div>
            <div className="tym-container">
              <h1 className="tym">03:00 PM</h1>
            </div>
            <div className="tym-container">
              <h1 className="tym">04:00 PM</h1>
            </div>
            <div className="tym-container">
              <h1 className="tym">05:00 PM</h1>
            </div>
            <div className="tym-container">
              <h1 className="tym">06:00 PM</h1>
            </div>
            <div className="tym-container">
              <h1 className="tym">07:00 PM</h1>
            </div>
            <div className="tym-container">
              <h1 className="tym">08:00 PM</h1>
            </div>
          </div>
        </div>

        <div className="booking">
          <h2 className="btn-text">Book an Appointment</h2>
        </div>
      </div>
    )
  }
}

export default Appointment
