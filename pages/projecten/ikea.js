import { Footer } from '../../components/footer';
import { Navigatie } from '../../components/navigatie';
import styles from '../../styles/containers.module.css';

export default () => {
  return (
    <>
      <Navigatie />

      <main className={styles.container}>
        <h1>Wat leuk, je bekijkt mijn eerste project</h1>
        <p>
          Scroll gerust door de verschillende mogelijkheden die je op mijn
          website kan vinden. Dit is een vultekst by the way.
        </p>
        <Footer />
      </main>
    </>
  );
};
