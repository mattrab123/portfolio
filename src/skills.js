import './css/subPage.css';
import './css/App.css';
import React from 'react';
import skillsObj from './data/skills.json';

const Skills = () => {
    return (
      <div id={"skillsPage"} className={"subPageStyle"}> 
            <h2 className={"pageHeadingStyle bannerHeader"}>Skills</h2>
            <h3 className={"bannerHeader3"}>____</h3>
            <div className="skill-cards-container">
                {skillsObj.map((skill, index) => (
                    <div key={index} className="skill-card">
                        {skill.skillLogo && (
                            <img className="skill-logo" src={require(`./data/${skill.skillLogo}`)} alt={skill.name} />
                        )}
                        <h2 className="skill-name">{skill.name}</h2>
                        <div className="sub-skills">
                            {skill.subSkills.map((subSkill, subIndex) => (
                                <div key={subIndex} className="sub-skill">
                                    {subSkill}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
      </div>  
    );
};


export default Skills;