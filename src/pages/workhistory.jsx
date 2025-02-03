import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "./styles/workhistory.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMobile} from "@fortawesome/free-solid-svg-icons";
import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";

import INFO from "../data/user";
import SEO from "../data/seo";


const experiences = [
   {
      title: "Service Centre Analyst",
      company: "University of Derby, Derby, UK",
      period: "Jan 2024 – Present",
      description: [
        "Delivered IT support for 30,000+ users, resolving technical issues using Azure Portal, Microsoft Admin Centre tools, Azure Active Directory and Microsoft Intune.Delivered IT support for 30,000+ users, resolving technical issues using Azure Portal, Microsoft Admin Centre tools, Azure Active Directory and Microsoft Intune.",
        "Manage user records using SQL database",
        "Providing expert menu recommendations and taking accurate orders.",
        "Proactively managed and resolved complex service recovery scenarios, ensuring minimal disruption to university functions.",
        "Spearheaded a project proposal to automate multi-factor authentication resets, optimizing resource utilization.",
        "Maintained an up-to-date knowledge base, enhancing team efficiency and first-time fix rates."
      ]
   },
  {
    title: "Website Developer Intern",
    company: "AVA RD&D (CIC), Nottingham, UK",
    period: "Apr 2023 – Jul 2023",
    description: [
      "Designed and developed AVA’s initial website using WordPress, PHP and CSS, ensuring responsive design optimized for all devices.",
      "Conducted competitive analysis to align the website with industry standards and the company’s brand vision.",
      "Created and implemented WCAG-compliant accessibility features to cater to diverse user needs.",
      "Developed training manuals for future website management and ensured successful project delivery on time."
    ]
  },
  {
    title: "Frontend Developer",
    company: "Start Something Studios, Singapore",
    period: "Sept 2021 – Sept 2022",
    description: [
      "Led development of interactive web applications and web-based games using ReactJS, PixiJS, and AFrame, for creative marketing campaigns.",
      "Optimised page load times with lazy loading, skeletal screens, and image compression to improve performance.",
      "Utilized React Testing Library to deliver high-quality, thoroughly tested components.",
      "Collaborated with multifunctional teams to transform creative concepts into functional applications.",
      "Conducted A/B testing for UI components, leveraging Optimizely to improve landing page conversions and call- to-action performance."
    ]
  },
  {
    title: "Mobile App Developer",
    company: "HummingSoft, Kuala Lumpur, Malaysia",
    period: "Nov 2020 – Jul 2021",
    description: [
      "Directed the development of 'Site Diary,' a pioneering mobile application for construction management, utilizing React Native, JavaScript, and Redux.",
      "Enhanced usability and performance for iOS and Android platforms through UI optimization and iterative testing.",
      "Overcame platform-specific constraints and stringent timelines, successfully deploying the app on the App Store and Google Play Store.",
      "Collaborated with cross-functional teams to deliver key milestones, maintaining adherence to Agile workflows and project deadlines."
    ]
  }
];

const WorkHistory = () => {
   useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "workhistory");

  return (
   <React.Fragment>
      <Helmet>
         <title>{`Projects | ${INFO.main.title}`}</title>
         <meta name="description" content={currentSEO.description} />
         <meta
            name="keywords"
            content={currentSEO.keywords.join(", ")}
         />
      </Helmet>
      <div className="page-content">
         <NavBar active="workhistory" />
         <div className="content-wrapper">
            <div className="projects-logo-container">
               <div className="projects-logo">
                  <Logo width={46} />
               </div>
            </div>
            <div className="workhistory-container">
               <div className="container">
                  <h2 className="section-title">Work History</h2>
                  <div className="timeline">
                     {experiences.map((exp, index) => (
                        <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                           <div className="timeline-content">
                              {/* {exp.icon} */}
                              <h3 className="job-title">{exp.title}</h3>
                              <h4 className="company">{exp.company}</h4>
                              <p className="period">{exp.period}</p>
                              <ul className="job-description">
                                 {exp.description.map((desc, idx) => (
                                 <li key={idx}>{desc}</li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
            <div className="page-footer">
               <Footer />
            </div>
         </div>
      </div>
   </React.Fragment>
  );
};

export default WorkHistory;