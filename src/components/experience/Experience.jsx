import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have?</h5>
            <h2>My Experience</h2>

            <div className='container experience__container'>
                <div className='experience__forntend'>
                    <h3>Front End Development</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__detail-icon' />
                            <div>
                                <h4>React JS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__detail-icon' />
                            <div>
                                <h4>Material UI</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__detail-icon' />
                            <div>
                                <h4>Next JS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__detail-icon' />
                            <div>
                                <h4>TypeScript</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__detail-icon' />
                            <div>
                                <h4>JavaScript ES6+</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__detail-icon' />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__detail-icon' />
                            <div>
                                <h4>Tailwind CSS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className='experience__backend'>
                    <h3>Back End Development</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__detail-icon' />
                            <div>
                                <h4>Python Django</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__detail-icon' />
                            <div>
                                <h4>Express JS</h4>
                                <small className='text-light'>Intermediate</small></div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__detail-icon' />
                            <div>
                                <h4>PostgreySQL</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__detail-icon' />
                            <div>
                                <h4>MySQL</h4>
                                <small className='text-light'>Beginner</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__detail-icon' />
                            <div>
                                <h4>MongoDB</h4>
                                <small className='text-light'>Intermediate</small></div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience