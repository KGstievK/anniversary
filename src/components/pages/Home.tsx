"use client"
import Dad from "./Dad/Dad"
import FormGuest from "./FormGuest/FormGuest"
import Gps from "./Gps/Gps"
import Map from "./Map/Map"
import NikhahSection from "./Nikhah/NikhahSection"
import SoTimes from "./SoTime/SoTimes"
import Timer from "./Timer/Timer"

const Home = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: "center",
      justifyContent: "flex-start",
      gap: '50px',
      position: "relative",
      background: "#FFF",
      margin: "20px 20px",
      borderTop: "2px solid gold", 
      borderLeft: "2px solid gold",
      borderRight: "2px solid gold",
      borderBottom: "2px solid gold",
      filter: "drop-shadow(1px 1px 20px yellow)",

    }}>
      <NikhahSection/>
      <SoTimes/>
      <Timer/>
      <Gps/>
      <Map/>
      {/* <Dad/> */}
      <FormGuest/>
    </div>

  )
}

export default Home