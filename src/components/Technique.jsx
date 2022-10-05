import styles, { layout } from "../style";
import Button from "./Button";
import CareerCard from "./CareerCard";
import { technique } from "../constants";

const Technique = () => (
  <section id="tecnicatura" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Técnico/a
        <br className="sm:block hidden" />
        en Energía Eléctrica
      </h2>

      <p className={`${styles.paragraph} max-w-[700px] mt-5`}>
        La carrera tiene por objetivo formar técnicos en el campo de la
        generación, operación, administración y gestión de la energía eléctrica
        participando en tareas de instalación, puesta en marcha, operación,
        ensayos, mediciones, mantenimiento y reparación de equipos de energía
        eléctrica. El/la técnico/a tendrá un fundamento sólido en los aspectos
        inherentes a las especificaciones y normas técnicas y de vinculación
        tecnológica, con capacidades para la utilización de tecnología y su
        operación innovadora, y con respeto por los factores sanitarios,
        legales, éticos, ambientales y de seguridad. Los/as egresados/as de la
        Tecnicatura Universitaria en Energía Eléctrica podrán continuar sus
        estudios hasta alcanzar el título de Ingeniero/a Eléctrico/a.
      </p>

      <Button styles={`mt-10`} />
    </div>
    <div className=" max-w-[700px] flex-1 flex flex-col justify-center relative">
      {technique.map((item, index) => (
        <CareerCard
          item={item}
          index={index}
          title={item.title}
          icon={item.icon}
          content={item.content}
        />
      ))}
    </div>
  </section>
);

export default Technique;
