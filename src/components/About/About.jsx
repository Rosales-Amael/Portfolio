/* eslint-disable react/no-unescaped-entities */
import { Image } from '@chakra-ui/react';
import './About.scss';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <img
            src="https://i.ibb.co/2KN4TFz/working.png"
            alt="about"
            id="about-img"
          />
          <div className="about-text">
            <h3>A propos de moi</h3>

            <p>
              Développeur Web FullStack polyvalent et passionné depuis
              l'adolescence, je suis en mesure de créer des applications Web
              dynamiques et adaptés. Je maîtrise et utilise un large éventail de
              langages de programmation, de frameworks et de librairies tierces
              qui garantissent une expérience utilisateur optimale. Je me tiens
              également au courant des technologies émergentes afin de mettre en
              œuvre des solutions innovantes et d'améliorer l'efficacité des
              projets sur lesquels je travaille.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
