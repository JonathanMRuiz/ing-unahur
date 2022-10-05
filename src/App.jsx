import styles from "./style";
import {
  Technique,
  CTA,
  Footer,
  Navbar,
  Stats,
  Hero,
  Engineering,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        <Stats />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Technique />
        <Engineering />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
