import { ingenieriaLogo } from "../assets";

import styles from "../style";
const Home = () => {
  return (
    <div>
      <section
        id="home"
        className={`flex md:flex-row flex-col ${styles.paddingY}`}
      >
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-gray ss:leading-[100.8px] leading-[75px]">
              Ingenieria Electrica <br className="sm:block hidden" />{" "}
              <span>Unahur</span>{" "}
            </h1>
          </div>

          <p className={`${styles.paragraph} text-black max-w-[470px] mt-5`}>
            El Instituto de Tecnología e Ingeniería se propone formar técnicos y
            profesionales con sólida formación académica en carreras
            prioritarias para el desarrollo productivo de Hurlingham, la
            provincia de Buenos Aires y el país. Se caracteriza por ofrecer
            carreras poco convencionales y enfocadas en las necesidades de
            crecimiento del sector industrial, las PyMES y el sector público. La
            formación para la producción y el trabajo son los ejes principales
            sobre los cuales se estructuran sus carreras.
          </p>
        </div>

        <div
          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
        >
          <img src={ingenieriaLogo} alt="logo" />

          {/* gradient start */}
          {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
          {/* gradient end */}
        </div>
      </section>
    </div>
  );
};

export default Home;
