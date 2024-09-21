"use client";
import scss from "./HappyEnd.module.scss";
import Image from "next/image";
import footer from "@/assets/footer.jpg";

const HappyEnds = () => {
  return (
    <section className={scss.HappyEnd}>
      <div className="container">
        <div className={scss.content}>
          <Image
            className={scss.footer}
            src={footer}
            alt="dfgdfg"
            fill // Новый способ задания layout="fill"
            style={{ objectFit: "cover" }} // Новый способ задания objectFit
          />
        </div>
      </div>
    </section>
  );
};

export default HappyEnds;
