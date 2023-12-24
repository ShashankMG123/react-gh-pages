import React from 'react';
import './SideBar.css'
import { ChevronDown, MailOutline, PhonePortraitOutline, LocateOutline, LogoLinkedin, LogoInstagram } from 'react-ionicons';



function Sidebar() {
    return(
        <React.Fragment>
            <aside className="sidebar" data-sidebar>
        
                <div className="sidebar-info">
            
                    <figure className="avatar-box">
                    <img src="/react-gh-pages/images/my-avatar.png" alt="Shashank Giridhara" width="80" />
                    </figure>
            
                    <div className="info-content">
                    <h1 className="name" title="Shashank Giridhara">Shashank Giridhara</h1>
            
                    <p className="title">Software Engineer</p>
                    </div>

                    <button className="info_more-btn" data-sidebar-btn>
                        <span>Show Contacts</span>
                        <ChevronDown color={"var(--orange-yellow-crayola)"}/>
                    </button>

                </div>
            
                <div className="sidebar-info_more">
            
                    <div className="separator"></div>
            
                    <ul className="contacts-list">
            
                    <li className="contact-item">
                        <div className="icon-box">
                            <MailOutline color={"var(--orange-yellow-crayola)"}/>
                        </div>
                        <div className="contact-info">
                        <p className="contact-title">Email</p>
            
                        <a href="mailto:shashank.girimn@gmail.com" className="contact-link">smgiridh@usc.edu</a>
                        </div>
            
                    </li>
            
                    <li className="contact-item">
                        <div className="icon-box">
                            <PhonePortraitOutline color={"var(--orange-yellow-crayola)"}/>
                        </div>
                        <div className="contact-info">
                        <p className="contact-title">Phone</p>
                        <a href="tel:+12133522795" className="contact-link">+1 (213) 913-5413</a>
                        </div>
            
                    </li>
            
                    <li className="contact-item">   
                        <div className="icon-box">
                            <LocateOutline color={"var(--orange-yellow-crayola)"}/>
                        </div> 
                        <div className="contact-info">
                        <p className="contact-title">Location</p>
                        <address>Los Angeles, California, USA</address>
                        </div>
            
                    </li>
            
                    </ul>
            
                    <div className="separator"></div>
                    <ul className="social-list">
                        <li className="social-item">
                            <a href="https://www.linkedin.com/in/shashank-giridhara-4175a41a9/" className="social-link">
                                <LogoLinkedin  color={"var(--light-gray-70)"}/>
                            </a>
                        </li>

                        <li className="social-item">
                            <a href="https://www.instagram.com/shashank_giridhar/" className="social-link">
                                <LogoInstagram color={"var(--light-gray-70)"}/>
                            </a>
                        </li>

                    </ul>
                </div>
        
            </aside>
        </React.Fragment>
    );
}

export default Sidebar;