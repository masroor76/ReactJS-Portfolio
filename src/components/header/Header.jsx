import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'

const Header = () => {
    return (
        <header>
            <div className='container header__container'>
                <h5>Hello I'm</h5>
                <h1>Masroor Amir</h1>
                <h5 className='text-light'>Full Stack Web Developer</h5>
                <CTA />

                <div className='me'>
                    <img src={ME} />
                </div>
            </div>
        </header>
    )
}

export default Header