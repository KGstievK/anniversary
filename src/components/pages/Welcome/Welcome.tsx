"use client";
import scss from "./Welcome.module.scss";
import { useEffect, useState } from "react";


const Welcome = () => {
  const [animation, setAnimation] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimation(true);
    }, 3000);
  }, []);

  return (
    <section className={scss.Welcome} style={{
      display: !animation ? "flex" : "none"
    }} >
      <div className="container">
        <div className={scss.content}>
          <div className={scss.We}>
            <div className={scss.We_name}>
              <h1>Чакыруу</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
