// import React from "react";
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";
import Section from "./Components/Section";
import "./style.css"


let sectionData = [
         {
            title: "Skills",
            description: "A versatile and seasoned Full Stack Developer with over 5 years of comprehensive experience in software development. Proficient in MERN (MongoDB, Express.js, React.js, Node js) Stack and equipped with knowledge of Python Django and Ruby on Rails. Demonstrates robust understanding of data structures, underpinning a firm foundation in problem-solving. Additionally skilled inep foy comolea neD apicarions, Eameit dn dgamie, eh peoure cmgments, evergie a solococoed set ad a colaborio Sies to ccane er enie oluion tht defficiency and improve the overall user experience."
         },
         {
            title: "Qualifications",
            description: "An accomplished Full Stack Developer and seasoned instructor with a B.Tech in Computer Science from SRM University. With over 5 years of experience at tech giants like Amazon and Microsoft, my portfolio includes projects across sectors such as edtech, e-commerce, and collaborative software like Teams. I've excelled in leadership roles, managing multiple teams and projects, and demonstrated my proficiency in Al and Machine Learning through professional training. Beyond practical work, I've enriched the tech community by teaching over 10,000 students, imparting knowledge and nurturing future talent. My strong foundation in Data Structures and Algorithms aids in effective problem-solving and crafting efficient solutions. Adept at working with agile methodologies, version control systems, and test-driven development, I have consistently delivered high-quality software while meeting strict deadlines. This blend of experience, technical skills, leadership, and teaching represents a unique combination, making me well-equipped to tackle complex challenges and drive innovation in any tech-driven"
         },
         {
            title: "Projects",
            description: "A selection of my most recent projects includes a collaborative software platform for remote teams, an e-commerce website for a local business, and an educational app for students. I've also developed a chatbot for customer service and an AI-powered recommendation engine for an online retailer. These projects showcase my ability to work across various sectors and technologies, delivering high-quality software that meets the needs of diverse users. I'm passionate about creating innovative solutions that drive business growth and enhance the user experience. I look forward to discussing these projects in more detail and sharing my insights on the development process and the challenges I faced along the way."
         }

]

const App = () => {

    return(
        <div>
            <Navbar />
            <AboutMe />

            {
                sectionData.map((item, index)=>(
                    // item = {title, description}
                    <Section 
                      title={item.title}
                      descrip={item.description}
                    />
                ))

            }
            


        </div>
    )
}



export default App;




// conditions=>  ternory operator

// loops => hof => map, filter, reduce