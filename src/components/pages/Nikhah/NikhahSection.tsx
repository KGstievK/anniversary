import scss from "./NikhahSection.module.scss";
import { Oswald, Montserrat, Playfair_Display } from "next/font/google";
import bg from "@/assets/bg.jpg";
import Image from "next/image";



const montserrat = Montserrat({
  subsets: ["latin"],
  // weight: "400", // Укажите нужный вес (например, 400)
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: "400", // Укажите нужный вес (например, 400)
});

const oswald = Oswald({ subsets: ["latin"] });

const NikhahSection = () => {
  return (
    <section className={scss.NikhahSection}>
      <div className="container">
        <Image
          className={scss.back}
          src={bg}
          alt=""
          layout="fill"
          objectFit="cover"
        />
        <h1 className={playfairDisplay.className}>Белгилүү</h1>
        <div className={scss.content}>
          <div className={scss.name}>
            <div className={scss.we}>
              {/* <Image className={scss.floral1} src={floral1} alt="" /> */}
              <div className={scss.floral1}>
                <h1 className={oswald.className}>50</h1>
                <p>Жаш</p>
                <h2>Кубат Курманбек уулу</h2>
              </div>
              <div className={scss.date}>
                <h2 className={oswald.className}>ОКТЯБРЯ</h2>
                <div className={scss.day}>
                  <h3 className={oswald.className}>18</h3>
                  <p className={oswald.className}>2024</p>
                </div>
                <h2 className={oswald.className}>ШАРШЕМБИ</h2>
              </div>
              <div className={scss.time}>
              </div>
            </div>
          </div>
          <div className={scss.name}>
            <div className={scss.we}>
              <div className={scss.dateCopy}>
                <h2 className={oswald.className}>ОКТЯБРЯ</h2>
                <div className={scss.day}>
                  <h3 className={oswald.className}>18</h3>
                  <p className={oswald.className}>2024</p>
                </div>
                <h2 className={oswald.className}>ШАРШЕМБИ</h2>
              </div>
              <div className={scss.timeCopy}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NikhahSection;
