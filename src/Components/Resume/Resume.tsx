import React from 'react'
import { BookOutline, BriefcaseOutline } from 'react-ionicons';

const aStyle = {
    "display": "inline",
    "white-space": "nowrap",
    "color": "var(--vegas-gold)"
}

const downloadStyle = { 
    "color": "var(--orange-yellow-crayola)",
    "float": "right" as "right"
  }

function Resume() {
    return(
            <article className="resume active" data-page="resume">
                <header>
                    <h2 className="h2 article-title">Resume</h2>
                </header>
                <a style={downloadStyle} href="https://drive.google.com/uc?export=download&id=1G9d2hu3ijGa2AA4eVykMHqqZyrSroiaw" download="Shashank_Giridhara_Resume">Download</a>
                <section className="timeline">

                    <div className="title-wrapper">
                        <div className="icon-box">
                            <BookOutline color={"var(--orange-yellow-crayola)"}/>
                        </div>
                        <h3 className="h3">Education</h3>
                    </div>

                    <ol className="timeline-list">

                        <li className="timeline-item">

                        <h4 className="h4 timeline-item-title">University of Southern California</h4>

                        <span>August 2023 — May 2025</span>

                        <p className="timeline-text">
                            Coursework: Advanced Database Management Systems, Analysis of Algorithms
                        </p>

                        </li>

                        <li className="timeline-item">

                        <h4 className="h4 timeline-item-title">PES University</h4>

                        <span>May 2017 — May 2021</span>

                        <p className="timeline-text">
                            GPA: 9.22/10
                            Coursework: Operating systems, Big Data, Cloud Computing, Machine Learning, Information Retrieval
                            Graduated with a specilization in Algorithms and computing
                        </p>
                        <ol className="timeline-list">
                            <li className="timeline-item">
                                <h4 className="h4 timeline-item-title timeline-nested-list-title">Undergraduate researcher</h4>

                                <span>August 2020 — May 2021</span>

                                <p className="timeline-text">
                                    ● Analyzed the impact of various JVM Garbage Collection algorithms and parameters contributing to throughput and
                                    latency of Big Data workloads built over Storm and Kafka.<br />
                                    ● Presented the study at the 2021 2nd Global Conference for Advancement in Technology IEEE Conference. Paper
                                    published:<a style={aStyle} className="research-paper" href="https://ieeexplore.ieee.org/abstract/document/9587808"> Link</a> <br />
                                </p>
                            </li>
                            <li className="timeline-item">
                            <h4 className="h4 timeline-item-title timeline-nested-list-title">Undergraduate researcher</h4>

                            <span>May 2019 — December 2019</span>

                            <p className="timeline-text">
                                ● Enhanced ML library performance, such as TensorFlow, through FPGA-accelerated matrix multiplications<br />
                                ● Employed a streaming DMA AFU for efficient data transfer between the Host and FPGA<br />
                            </p>
                            </li>
                        </ol>
                        </li>


                    </ol>

                    </section>
                    <section className="timeline">

                        <div className="title-wrapper">
                        <div className="icon-box">
                            <BriefcaseOutline color={"var(--orange-yellow-crayola)"}/>
                        </div>

                        <h3 className="h3">Experience</h3>
                        </div>

                        <ol className="timeline-list">

                        <li className="timeline-item">

                            <h4 className="h4 timeline-item-title">Software Engineer L59/60</h4>

                            <span>2021 — 2023</span>

                            <p className="timeline-text">
                            ● Implemented an improved search system using Azure Cognitive Search for the Edge Extension store; Designed a
                            ranking algorithm and a dataflow pipeline to support ~80 locales and ~240 regions.<br />
                            ● Improved resiliency of data flow pipelines to keep data fresh; Leveraged time-triggered Azure functions to handle
                            new restrictions applied on extensions on priority. Integrated Bing's spell check to decrease zero-result queries by 5%.<br />
                            ● Led a team to set up experimentation infrastructure for the Extensions store to facilitate controlled feature rollout
                            using browser APIs to facilitate client-server communication.<br />
                            ● Assumed responsibility as Pump and Branch sheriff to keep Edge up-to-date with Chromium and maintain code
                            hygiene. This involved coordinating with Pump deputies across geos to land the next version of Edge Beta.
                            ● Received an Edge India All-Star Award for demonstrating a growth mindset and promoting workplace inclusion<br />
                            <i>Tech Stack - C# MVC, C++, Python, Redis, Kusto, Cosmos, Git, Angularjs, Redux, MaterialUI, Figma, FAST</i>
                            </p>

                        </li>

                        <li className="timeline-item">

                            <h4 className="h4 timeline-item-title">Software Engineering Intern</h4>

                            <span>2021 — 2021</span>

                            <p className="timeline-text">
                            Automated processes to detect malicious extensions being reported by users enhancing the security of edge extensions
                            </p>

                        </li>

                        <li className="timeline-item">

                            <h4 className="h4 timeline-item-title">Software Engineering Intern</h4>

                            <span>2020 — 2020</span>

                            <p className="timeline-text">
                            Developed an efficient real-time data retrieval system for dynamic search query completion
                            </p>

                        </li>

                        </ol>

                        </section>
            </article>
    )
}

export default Resume;