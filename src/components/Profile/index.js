import {Component} from 'react'

import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {BsArrowRightShort} from 'react-icons/bs'
import {SlCalender} from 'react-icons/sl'

import './index.css'

const data = [
  {
    count: 809680,
    type: 'Unique Pattern',
  },
  {
    count: 4555697,
    language: 'All Teeth Intact',
  },
  {
    count: 12345657,
    language: 'Impacted 3D molars',
  },
]
class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <div>
          <AiOutlineArrowLeft className="arrow" />
          <h1 className="title">Profile</h1>
        </div>
        <div className="image-container">
          <img
            src="https://res.cloudinary.com/df4rsezuj/image/upload/v1665728547/woman-doctor-png-transparent-woman-doctor-images-7_p5vrrf.png"
            alt="profile"
            className="profile-image"
          />
        </div>

        <div className="details-container">
          <div className="det-cont-top-sec">
            <h1 className="doctor-name">Dr.Meghana Sen</h1>
            <div className="doc-prof-container">
              <h2 className="doc-prof">Dentist</h2>
            </div>
          </div>

          <div className="reviews-container">
            <h1 className="reviews">5.0 ***** </h1>
          </div>
        </div>

        <div className="piechart">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                cx="70%"
                cy="40%"
                data={data}
                startAngle={0}
                endAngle={360}
                innerRadius="40%"
                outerRadius="70%"
                dataKey="count"
              >
                <Cell name="Unique Pattern" fill="#fecba6" />
                <Cell name="All Teeth Intact" fill="#b3d23f" />
                <Cell name="Impacted 3D molars" fill="#a44c9e" />
              </Pie>
              <Legend
                iconType="circle"
                layout="vertical"
                verticalAlign="middle"
                align="right"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="about-container">
          <div className="abt-sub-con">
            <h1 className="about">About</h1>
            <p className="description">
              Dr.Meghana is a Dentist specialist jdvcjgcvgvdcb dcb
              cgvcdccvcdggvdcvbcbc mdsmcmdm
            </p>
            <div className="seemore-container">
              <p className="seemore">Seemore</p>
              <BsArrowRightShort className="icon" />
            </div>
          </div>
          <div className="abt-sub-con-2">
            <SlCalender className="calender" />
            <p className="days">Monday - Sunday </p>
            <p className="time">9:00 - 7:00 </p>
            <button type="button" className="open">
              Open
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Profile
