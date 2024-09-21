"use client"
import FormGuest from "./FormGuest/FormGuest"
import Gps from "./Gps/Gps"
import HappyEnd from "./HappyEnd/HappyEnd"
// import Map from "./Map/Map"
import NikhahSection from "./Nikhah/NikhahSection"
import SoTimes from "./SoTime/SoTimes"
import Timer from "./Timer/Timer"
import Timing from "./Timing/Timing"
import Welcome from "./Welcome/Welcome"

const Home = () => {
  return (
    <div style={{
      // display: 'flex',
      // flexDirection: 'column',
      // alignItems: "center",
      // justifyContent: "flex-start",
      // gap: '50px',
      // position: "relative",
    }}>
      <NikhahSection/>
      <SoTimes/>
      <Timer/>
      <Gps/>
      <Timing/>
      {/* <Map/> */}
      <FormGuest/>
      <HappyEnd/>
    </div>

  )
}

export default Home