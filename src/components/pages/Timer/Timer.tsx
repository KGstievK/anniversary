"use client";

import { Oswald } from "next/font/google";
import scss from "./Timer.module.scss";

const oswald = Oswald({ subsets: ["latin"] });

const Timer: React.FC = () => {
  return (
    <section className={scss.Timer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.titlee}>
            <div className={scss.line}></div>
            <h1>Чакыруу!</h1>
            <div className={scss.line}></div>
          </div>
          <div className={scss.ourDay}>
            <p className={oswald.className}>
            Урматтуу биздин коноктор! Сиздерди белгилүү жашка толушун салтанаттуу белгилөөгө арналган майрам тоюбузга кадырлуу коногубуз болуп кетүүгө чакырабыз
            </p>
            <p className={oswald.className}>Саат 17:00</p>
            <h1>
              Той ээлери: ???
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timer;
