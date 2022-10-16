import {GiHamburgerMenu} from 'react-icons/gi'
import {BiSearchAlt2} from 'react-icons/bi'
import {AiFillEye} from 'react-icons/ai'

import './index.css'

const Home = () => (
  <div className="App">
    <div className="header">
      <GiHamburgerMenu className="hamburger" />
      <h1 className="greetings">
        Hello, <span className="name">John Zaira!</span>
      </h1>
      <img
        src="https://res.cloudinary.com/df4rsezuj/image/upload/v1665728547/woman-doctor-png-transparent-woman-doctor-images-7_p5vrrf.png"
        alt="john"
        className="profile"
      />
    </div>
    <div className="search-container">
      <BiSearchAlt2 />
      <input type="search" placeholder="Search" className="search-input" />
    </div>
    <div className="top-doctors">
      <h1 className="doctors-title">Top Doctors</h1>
      <div className="seemore-container">
        <p className="see-more">See More</p>
        <AiFillEye />
      </div>
    </div>
    <div className="doctor-details-container">
      <div className="div">
        <img
          src="https://res.cloudinary.com/df4rsezuj/image/upload/v1665733113/ei_1665732737155-removebg-preview_zdcaom.png"
          alt="lara"
          className="doctor-image"
        />
        <div>
          <h1 className="doctor-name">Dr.Lara</h1>
          <p className="specialization">Cardiologist</p>
        </div>
      </div>
      <div className="text-vertical-container">
        <p className="text-vertical">Reviews</p>
      </div>
    </div>

    <div className="doctor-details-container">
      <div className="div">
        <img
          src="https://res.cloudinary.com/df4rsezuj/image/upload/v1665746388/doctorimages_zroqtg.jpg"
          alt="lara"
          className="doctor-image"
        />
        <div>
          <h1 className="doctor-name">Dr.Mery</h1>
          <p className="specialization">Neurologist</p>
        </div>
      </div>
      <div className="text-vertical-container">
        <p className="text-vertical">Reviews</p>
      </div>
    </div>

    <div className="doctor-details-container">
      <div className="div">
        <img
          src="https://res.cloudinary.com/df4rsezuj/image/upload/v1665746503/doctorimages2_xnnwwk.jpg"
          alt="lara"
          className="doctor-image"
        />
        <div>
          <h1 className="doctor-name">Dr.Mike</h1>
          <p className="specialization">Dermatologist</p>
        </div>
      </div>
      <div className="text-vertical-container">
        <p className="text-vertical">Reviews</p>
      </div>
    </div>
    <div className="heading-container">
      <p className="heading">What do you need?</p>
    </div>

    <div className="container">
      <div className="service-container">
        <div className="service-image-container">
          <img
            src="https://res.cloudinary.com/df4rsezuj/image/upload/v1665762244/IMG_20221014_184742_uvgv65.png"
            alt="consultation"
            className="service-image"
          />
        </div>
        <div className="service-title-container">
          <p className="service-title">Consultation</p>
        </div>
      </div>

      <div className="service-container">
        <div className="service-image-container">
          <img
            src="https://res.cloudinary.com/df4rsezuj/image/upload/v1665762259/IMG_20221014_184755_vzi4e4.png"
            alt="consultation"
            className="service-image"
          />
        </div>
        <div className="service-title-container">
          <p className="service-title">Lab Reports</p>
        </div>
      </div>

      <div className="service-container">
        <div className="service-image-container">
          <img
            src="https://res.cloudinary.com/df4rsezuj/image/upload/v1665762194/ei_1665752884831-removebg-preview_efmltp.png"
            alt="consultation"
            className="service-image"
          />
        </div>
        <div className="service-title-container">
          <p className="service-title">Doctor</p>
        </div>
      </div>

      <div className="service-container">
        <div className="service-image-container">
          <img
            src="https://res.cloudinary.com/df4rsezuj/image/upload/v1665807935/ei_1665807531589-removebg-preview_e4kk2g.png"
            alt="consultation"
            className="service-image"
          />
        </div>
        <div className="service-title-container">
          <p className="service-title">Medicine</p>
        </div>
      </div>

      <div className="service-container">
        <div className="service-image-container">
          <img
            src="https://res.cloudinary.com/df4rsezuj/image/upload/v1665807925/ei_1665807558367-removebg-preview_g6tqgg.png"
            alt="consultation"
            className="service-image"
          />
        </div>
        <div className="service-title-container">
          <p className="service-title">Emergency</p>
        </div>
      </div>
    </div>
  </div>
)

export default Home
