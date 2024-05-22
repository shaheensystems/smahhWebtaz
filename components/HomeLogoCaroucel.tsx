import React from 'react'
import Image from 'next/image'
import styles from '../styles/logoCarousel.module.css'
import WhitecliffeLogo from '../public/assets/logo-whitecliffe.png'
import AmazonLogo from '../public/assets/logo-amazon.png'
import CompanyLogo from '../public/assets/logo-company.png'
import GoogleLogo from '../public/assets/logo-google.png'
import MicrosoftLogo from '../public/assets/logo-microsoft.png'
import CiscoLogo from '../public/assets/logo-cisco.png'

const HomeLogoCaroucel = () => {
  return (
    <div className={styles.logos}>
      <div className= {styles.logos_slide}>
        <Image className={styles.logos_slide_image} src={WhitecliffeLogo} alt='Whitecliffe Logo' />
        <Image className={styles.logos_slide_image} src={AmazonLogo} alt='Amazon Logo' />
        <Image className={styles.logos_slide_image} src={GoogleLogo} alt='Firebase Logo' />
        <Image className={styles.logos_slide_image} src={CompanyLogo} alt='Mcrosoft Logo' />
        <Image className={styles.logos_slide_image} src={MicrosoftLogo} alt='Mcrosoft Logo' />
        <Image className={styles.logos_slide_image} src={CiscoLogo} alt='Cisco Logo' />
      </div>
      <div className= {styles.logos_slide}>
        <Image className={styles.logos_slide_image} src={WhitecliffeLogo} alt='Whitecliffe Logo' />
        <Image className={styles.logos_slide_image} src={AmazonLogo} alt='Amazon Logo' />
        <Image className={styles.logos_slide_image} src={GoogleLogo} alt='Firebase Logo' />
        <Image className={styles.logos_slide_image} src={CompanyLogo} alt='Mcrosoft Logo' />
        <Image className={styles.logos_slide_image} src={MicrosoftLogo} alt='Mcrosoft Logo' />
        <Image className={styles.logos_slide_image} src={CiscoLogo} alt='Cisco Logo' />
      </div>    
  </div>
    
      
  )
}

export default HomeLogoCaroucel