import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    id="contacto"
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Contactanos</h2>
      <div className="flex justify-between flex-wrap ">
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          CENTRO INTEGRAL DE ATENCIÓN AL ESTUDIANTE:
          <br />
          (011) 2078-5200
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          ATENCION DE LUNEAS A VIERNES DE 10 A 19HS:
          <br />
          gestionestudiantil@unahur.edu.ar
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-16`}>
          O COMUNICATE CON TU INSTITUTO ESCRIBIENDO A:
          <br />
          ingenieria@unahur.edu.ar
        </p>
      </div>
    </div>
  </section>
);

export default CTA;
