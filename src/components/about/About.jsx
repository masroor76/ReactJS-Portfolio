import './about.css'
import ME2 from '../../assets/me2.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About Me</h2>
            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME2} />
                    </div>
                </div>

                <div className='about__content'>
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>

                        <article className='about__card'>
                            <FiUser className='about__icon' />
                            <h5>Clients</h5>
                            <small>80+ Worldwide</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>80+ Completed</small>
                        </article>
                    </div>

                    <p>
                        Hello, I am Masroor Amir, a Software Engineer with ultimate expertise in React (Frontend Web-App) and Django Backend Development.
                    </p>

                    <a href="/contact" className='btn btn-primary'>Let's Talk</a>

                </div>
            </div>
        </section>
    )
}

export default About