
import { Grid } from '@mui/material'
import Image from 'next/image'
import CounterSection from './Components/HomeSection/CounterSection'
import WhatWeWillDo from './Components/HomeSection/WhatWeWillDo'
import ReadyToWork from './Components/HomeSection/ReadyToWork'
import Header from './Components/Ui/Header'
import Banner from './Components/HomeSection/Banner'
// import styles from './page.module.css'

export default function Home() {
  return (
    <Grid container sx={{ justifyContent: 'center', alignItems: "center" }}>


      <Banner />

      <CounterSection />

      {/* WHAT WE WILL DO and OUR PROJECT SECTION is heare */}
      <WhatWeWillDo />

      {/* READY TO WORK TOGOTHER and OUR PARTNER section is here */}
      <ReadyToWork />

    </Grid>
  )
}
