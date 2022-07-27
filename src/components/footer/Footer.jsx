import './footer.css'
import {ImFacebook} from 'react-icons/im'
import {RiInstagramFill} from 'react-icons/ri'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
    return (

        <footer>
            <a href='#' className='footer__logo'>Code Dude</a>

            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Experience</a></li>
                <li><a href='#'>Services</a></li>
                <li><a href='#'>Portfolio</a></li>
                <li><a href='#'>Testimonials</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>

            <div className='footer__socials'>
                <a href='https://facebook.com'><ImFacebook/></a>
                <a href='https://instagram.com'><RiInstagramFill/></a>
                <a href='https://twitter.com'><FaTwitter/></a>
            </div>

            <div className='footer__copyright'>
                <small>&copy; Code Dude - All rights Reservered</small>
            </div>
        </footer>
    )
}

export default Footer