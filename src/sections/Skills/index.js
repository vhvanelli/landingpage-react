import React from 'react';

import { Container, Title, Text, SkillsContainer, Skill } from './styles';
const Who = () => {
    return (
        <Container>
            <Title>My Skills</Title>
            <Text>Everyday, I practising, reading book and watching tutorials to gain<br/>
            a new skills, these skills helpes me to build my projects in the <br/> future</Text>
            <SkillsContainer>
                <Skill>
                    <h3>Languages</h3>
                    <ul>
                        <li>CSS3(SCSS, LESS)</li>
                        <li>HTML5</li>
                        <li>JavaScript(ES6)</li>
                        <li>PHP</li>
                        <li>Python</li>
                    </ul>
                </Skill>
                <Skill>
                    <h3>Methods & Tools</h3>
                    <ul>
                        <li>BEM, ITCSS, OOCSS</li>
                        <li>NPM, Webpack</li>
                        <li>Progressive Web Apps</li>
                        <li>UX principles</li>
                    </ul>
                </Skill>
                <Skill>
                    <h3>Frameworks & Libs</h3>
                    <ul>
                        <li>Drupal</li>
                        <li>Django</li>
                        <li>JQuery, React(Redux), Vue</li>
                        <li>Twing, Jinja, Mustache</li>
                        <li>Google Apps & APIs</li>
                    </ul>
                </Skill>
                <Skill>
                    <h3>Additional</h3>
                    <ul>
                        <li>Git</li>
                        <li>UNIX server administration</li>
                        <li>Vagrant, Composer, Drush</li>
                        <li>Photoshop,Sketch</li>
                        <li>Agile, Waterfall</li>
                    </ul>
                </Skill>
            </SkillsContainer>
        </Container>
    );
}

export default Who;