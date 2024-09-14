import scss from "./Map.module.scss";
const Map = () => {
  return (
    <section className={scss.Map}>
      <div className="container">
        <div className={scss.content}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d517.9522047295325!2d74.64178897992123!3d42.8239725118821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb50042aaafe7%3A0xa1ab68c8bc7c4bca!2sRoyal!5e0!3m2!1sru!2skg!4v1726314850749!5m2!1sru!2skg" width="600" height="450" loading="lazy"></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;
