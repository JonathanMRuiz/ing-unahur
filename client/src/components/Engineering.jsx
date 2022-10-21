import styles, { layout } from "../style";
import Button from "./Button";
import Modal from "./Modal";

const Engineering = () => (
  <div
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col `}
  >
    <section id="ingenieria" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Ingeniero/a Eléctrico/a</h2>

        <p className={`${styles.paragraph} max-w-[700px] mt-5`}>
          El/la ingeniero/a poseerá una sólida formación teórica y técnica que
          le permitirá participar en la proyección y dirección responsable de
          plantas de energía eléctrica, como también en la participación de
          procesos industriales vinculados. Estará capacitado/a para
          desarrollarse en todos los niveles del sector energético, como así
          también del sector productivo. Contará con una perspectiva integral
          inspirada en la concepción de la energía como un derecho para la
          población. Estará capacitado para el diseño, la construcción y los
          ensayos de sistemas de potencia complejos. Poseerá capacidades para
          abordar sistemas complejos desde la faz organizativa y de gestión.
          Tendrá formación en aspectos técnicos y legales que se manifiestan en
          el área de prestación de servicios eléctricos y será capaz de asesorar
          y auditar. Será capaz de investigar para comprender, generar y
          utilizar de manera crítica su profesión. *Serán reconocidas las
          materias de quienes hayan cursado la Tecnicatura Universitaria en
          Energía Eléctrica.
        </p>

        <div className="flex items-center mt-10">
          <a
            href="https://unahur.edu.ar/wp-content/uploads/2021/05/PLANES-DE-ESTUDIO-2018_Ingenieria_Electrica.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <Button />
          </a>
          <Modal
            title="Requisitos para cursar tecnicatura"
            text="Acreditar estudios secundarios completos y finalizar la cursada del Curso de Preparación Universitario. Excepcionalmente, los mayores de 25 años que no posean título secundario, según lo establece el Artículo 7º de la Ley de Educación Superior 24.521, podrán ingresar siempre que demuestren los conocimientos necesarios a través de las evaluación que realice la Universidad dos veces al año en fecha anterior al inicio del Curso de Preparación Universitario."
          />
        </div>
      </div>
    </section>
  </div>
);

export default Engineering;
