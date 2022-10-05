import styles, { layout } from "../style";
import Button from "./Button";
import CareerCard from "./CareerCard";
import { engineering } from "../constants";

const Technique = () => (
  <section id="ingenieria" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Ingeniero/a
        <br className="sm:block hidden" />
        Eléctrico/a
      </h2>

      <p className={`${styles.paragraph} max-w-[700px] mt-5`}>
        El/la ingeniero/a poseerá una sólida formación teórica y técnica que le
        permitirá participar en la proyección y dirección responsable de plantas
        de energía eléctrica, como también en la participación de procesos
        industriales vinculados. Estará capacitado/a para desarrollarse en todos
        los niveles del sector energético, como así también del sector
        productivo. Contará con una perspectiva integral inspirada en la
        concepción de la energía como un derecho para la población. Estará
        capacitado para el diseño, la construcción y los ensayos de sistemas de
        potencia complejos. Poseerá capacidades para abordar sistemas complejos
        desde la faz organizativa y de gestión. Tendrá formación en aspectos
        técnicos y legales que se manifiestan en el área de prestación de
        servicios eléctricos y será capaz de asesorar y auditar. Será capaz de
        investigar para comprender, generar y utilizar de manera crítica su
        profesión. *Serán reconocidas las materias de quienes hayan cursado la
        Tecnicatura Universitaria en Energía Eléctrica.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className="flex-1 flex flex-col justify-center relative">
      {engineering.map((item, index) => (
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
