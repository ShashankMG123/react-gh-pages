import React from 'react'
import MyDesign from  "../../Icons/icon-design.svg"
import MyDev from "../../Icons/icon-dev.svg"
import './MainContent.css'

const MainContent = () => {
    return(
            <article className="about  active" data-page="about">
        
                <header>
                <h2 className="h2 article-title">About me</h2>
                </header>
        
                <section className="about-text">
                    <p>
                        I am a dedicated Computer Science graduate student at USC with a rich background as a Software Engineer at Microsoft, where I accumulated 3 years of experience. 
                        Skilled in C#, Python, and various frameworks. My academic focus is to pursue and specialize in Natural Language Processing.
                    </p>
            
                    <p>
                        My academic journey includes a Master's degree from USC and a Bachelor's with a specialization in Algorithms. 
                        I am committed to contributing my technical proficiency and growth mindset to drive impactful results in any professional setting.
                    </p>
                </section>
        
                <section className="service">
        
                <h3 className="h3 service-title">What i'm doing</h3>
        
                <ul className="service-list">
        
                    <li className="service-item">
        
                    <div className="service-icon-box">
                        <img src={MyDev} alt="design icon" width="40" />
                    </div>
        
                    <div className="service-content-box">
                        <h4 className="h4 service-item-title">Software Engineering</h4>
        
                        <p className="service-item-text">
                        Advanced software engineering delivering top-tier solutions.
                        </p>
                    </div>
        
                    </li>
        
                    <li className="service-item">
        
                    <div className="service-icon-box">
                        <img src={MyDesign} alt="Web development icon" width="40" />
                    </div>
        
                    <div className="service-content-box">
                        <h4 className="h4 service-item-title">Web development</h4>
        
                        <p className="service-item-text">
                        High-quality development of sites at the professional level.
                        </p>
                    </div>
        
                    </li>
        
                </ul>
        
                </section>
        
                <section className="testimonials">
        
                    <h3 className="h3 testimonials-title">Testimonials</h3>
            
                    <ul className="testimonials-list has-scrollbar">
            
                        <li className="testimonials-item">
                        <div className="content-card" data-testimonials-item>
            
                            <h4 className="h4 testimonials-item-title" data-testimonials-title>Stanly Mathew Tomas</h4>
            
                            <div className="testimonials-text" data-testimonials-text>
                            <p>
                                Shashank has joined from college after completing two internships with Microsoft. 
                                He always stays on top of things and could drive the work he owns independently while 
                                proactively collaborating with team members and partner teams to get things done. 
                                He is flexible and willing to pick up and learn new things. 
                                One thing I observed is that he will call out any concern or feedback without holding back. 
                                He is dependable, fun-loving and an incredible team player. He will be a fabulous addition to any team. 
                                Wishing you the best in your career and all your future endeavours.
                            </p>
                            </div>
            
                        </div>
                        </li>
            
                </ul>
                
                </section>
        
            </article>
    )
}

export default MainContent;