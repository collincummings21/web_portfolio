import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg'



function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Typescript'} progress={'30%'} width={'30%'} />
                <SkillsSection skill={'React Js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Node Js'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Python'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'Lua'} progress={'0%'} width={'0%'} />
                <SkillsSection skill={'Java'} progress={'15%'} width={'15%'} />
                <SkillsSection skill={'Web Design'} progress={'75%'} width={'75%'} />
                <SkillsSection skill={'UI/Ux Design'} progress={'76%'} width={'76%'} />
            </div>
            
            <Tittle title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Web design'} 
                    text={'Worked on front end website development using HTML5, CSS3, Java Script, Adobe Illustrator, and Wordpress'}
                />
                <ServicesSection image={intelligence} title={'Automation'} 
                text={'Developed a web crawler fetching data using python '}
                />
                <ServicesSection image={gamedev} title={'Backend '} 
                text={'Implemented a chat application using MongoDB and React with a rest api using chatengine.io '}
                />


            </div>

        </div>
    )
}

export default AboutPage;