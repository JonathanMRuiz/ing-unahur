import styles, { layout } from "../style";
import Button from "./Button";
import Modal from "./Modal";

const Technique = () => (
  <div
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col `}
  >
    <section id="tecnicatura" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Tecnico/a en Energia Electrica</h2>

        <p className={`${styles.paragraph} max-w-[700px] mt-5`}>
          La carrera tiene por objetivo formar técnicos en el campo de la
          generación, operación, administración y gestión de la energía
          eléctrica participando en tareas de instalación, puesta en marcha,
          operación, ensayos, mediciones, mantenimiento y reparación de equipos
          de energía eléctrica. El/la técnico/a tendrá un fundamento sólido en
          los aspectos inherentes a las especificaciones y normas técnicas y de
          vinculación tecnológica, con capacidades para la utilización de
          tecnología y su operación innovadora, y con respeto por los factores
          sanitarios, legales, éticos, ambientales y de seguridad. Los/as
          egresados/as de la Tecnicatura Universitaria en Energía Eléctrica
          podrán continuar sus estudios hasta alcanzar el título de Ingeniero/a
          Eléctrico/a.
        </p>
        <p>Duracion aproximada: 2 Años y medio</p>

        <div className="flex items-center mt-10">
          <a
            href="https://unahur.edu.ar/wp-content/uploads/2021/05/Tecnicatura-Universitaria-en-Energia-Electrica.pdf"
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

export default Technique;
