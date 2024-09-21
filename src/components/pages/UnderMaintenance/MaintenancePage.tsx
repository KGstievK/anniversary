import scss from "./UnderMaintenance.module.scss";

const MaintenancePage = () => {
  return (
    <section className={scss.UnderMaintenance}>
      <div className="container">
        <div className={scss.content}>
          <h1>Сайт временно недоступен</h1>
          <h1>код: 404</h1>
          <p>Мы скоро вернемся!</p>
        </div>
      </div>
    </section>
  );
};

export default MaintenancePage;
