import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Box from '../components/box'
import Button from '../components/button'
import React , {useState} from "react"

export default function Home() {

  const [check,setCheck] = useState(false)

  return (
    <div className={styles.wrap}>
      <Head>
        <title>Frontend Mentor | Pricing component with toggle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.info}>

        <h1>Our Pricing</h1>

        <div className={styles.track}>

          <p>Annually</p>

          <div className={styles.toggle}>

            <input type="checkbox"  className={styles.input} id="switch" 
            
            onClick={()=>
            setCheck(!check)}/>

            <label for="switch" className={styles.label}>Switch</label>

          </div>

          <p>Monthly</p>

        </div>

      </div>

      <div className={styles.container}>

        <Box color="white">

          <h3>Basic</h3>
          

          {check?(

          <p className={styles.money}> $<span className={styles.price}>19.99</span></p>

          ):<p className={styles.money}> $<span className={styles.price}>199.99</span></p>}   

          <p className={styles.line}>500 GB Storage</p>
          <p className={styles.line}> 2 Users Allowed</p>
          <p className={styles.line}>Send up to 3 GB</p>

          <Button color="blue">

            LEARN MORE

          </Button>

        </Box>

        
        <Box color="blue">

          <h3>  Professional</h3>

          {check?(

          <p className={`${styles.money} ${styles.color}`}> $<span className={`${styles.price} ${styles.color}`}>24.99</span></p>

          ):<p className={`${styles.money} ${styles.color}`}> $<span className={`${styles.price} ${styles.color}`}>249.99</span></p>}   
          
          <p className={styles.line}>1 TB Storage</p>
          <p className={styles.line}> 5 Users Allowed</p>
          <p className={styles.line}>Send up to 10 GB</p>

          <Button color="white">

            LEARN MORE

          </Button>

        </Box>

        
        <Box color="white">

          <h3>Master</h3>

          {check?(

          <p className={styles.money}> $<span className={styles.price}>39.99</span></p>

          ):<p className={styles.money}> $<span className={styles.price}>399.99</span></p>}   
          
          <p className={styles.line}>2 TB Storage</p>
          <p className={styles.line}> 10 Users Allowed</p>
          <p className={styles.line}>Send up to 20 GB</p>

          <Button color="blue">

            LEARN MORE

          </Button>

        </Box>

      </div>

      <div className={styles.attribution}>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Andro87</a>.
      </div>

      
    </div>
  )
}
