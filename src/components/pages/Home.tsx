"use client"
import FormGuest from "./FormGuest/FormGuest"
import Gps from "./Gps/Gps"
import HappyEnds from "./HappyEnd/HappyEnds"
import NikhahSection from "./Nikhah/NikhahSection"
import SoTimes from "./SoTime/SoTimes"
import Timer from "./Timer/Timer"
import Timing from "./Timing/Timing"
import MaintenancePage from "./UnderMaintenance/MaintenancePage"

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
      {/* <NikhahSection/>
      <SoTimes/>
      <Timer/>
      <Gps/>
      <Timing/>
      <FormGuest/>
      <HappyEnds/> */}
      <MaintenancePage/>
    </div>

  )
}

export default Home