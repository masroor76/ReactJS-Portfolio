import './services.css'
import ME8 from '../../assets/5.jpg'
import { RiReactjsLine } from 'react-icons/ri'
import { SiDjango } from 'react-icons/si'
import { SiExpress } from 'react-icons/si'
import { SiFiverr } from 'react-icons/si'
import { SiUpwork } from 'react-icons/si'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer?</h5>
            <h2>My Services</h2>
            <div className='container about__container'>
                <div className='about__me1'>
                    <div className='about__me-image1'>
                        <img src={ME8} alt="About Image" />
                    </div>
                </div>

                <div className='about__content'>
                    <div className="about__cards">
                        <article className='about__card1'>
                            <RiReactjsLine className='about__icon1' />
                            <h5>React JS</h5>
                            <small>1+ Years Working</small>
                        </article>

                        <article className='about__card1'>
                            <SiDjango className='about__icon1' />
                            <h5>Django</h5>
                            <small>1+ Years Working</small>
                        </article>

                        <article className='about__card1'>
                            <SiExpress className='about__icon1' />
                            <h5>Express JS</h5>
                            <small>1+ Years Working</small>
                        </article>
                    </div>

                    <p>
                        Hello, I am offering React Development (Frontend Web-App) with Best Custom Designs in pure CSS, Material UI, Tailwind CSS and BootStrap.
                    </p>


                    <div className='services__links'>
                        <a href='www.fiverr.com/codedude1' target='_blank' className='services__links-a'><SiFiverr /></a>
                        <a href="https://www.upwork.com" target='_blank' className='services__links-a'><SiUpwork /></a>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Services