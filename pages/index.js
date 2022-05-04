import styles from '../styles/containers.module.css';

import TeamPlaatje from '../public/plaatjes/team.svg';
import AccessibilityPlaatje from '../public/plaatjes/accessibility.svg';
import DevelopmentPlaatje from '../public/plaatjes/development.svg';
import { Navigatie } from '../components/navigatie';
import { Footer } from '../components/footer';
import { Projectkaart } from '../components/projectkaart';
import { CacaoVanJou } from '../public/plaatjes/CacaoVanJou.svg';
import { Verhaalkaart } from '../components/verhaalkaart';

export default () => {
  return (
    <>
      <Navigatie />

      <main className={styles.container}>
        <h1>
          Hi, ik ben Naomi. Vandaag volg ik een masterclass react.js op de
          Haagse Hogeschool 🏫
        </h1>
        <section className={styles.cardContainer}>
          {/* <Projectkaart
            titel="Heart Nederland"
            beschrijving="Development"
            Plaatje={CacaoVanJou}
            paginaUrl="/projecten/ikea"
          />
          <Projectkaart
            titel="Heart Nederland"
            beschrijving="Development"
            Plaatje={CacaoVanJou}
            paginaUrl="/projecten/ikea"
          /> */}
          <Verhaalkaart>
            <h2>Accessibility first</h2>
            <p>Meer over accessibility lezen</p>
            <img src="https://i.postimg.cc/2SKd0Kzw/Screenshot-2022-04-22-at-11-29-03.png" />
            <figcaption>
              Foto van een prachtige animatie die laat zien dat hoe je een
              website met code kan bouwen, zoals deze.
            </figcaption>
          </Verhaalkaart>
        </section>
      </main>

      <Footer />
    </>
  );
};
