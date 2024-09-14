"use client"
import scss from './Gps.module.scss'

const Gps = () => {
  return (
    <section className={scss.Gps}>
      <div className="container">
        <div className={scss.content}>
          <h1>АДРЕС:</h1>
          <p>Город Бишкек, Улица Мадиева, 18/1</p>
          <p>Ресторан: <br /> <strong>ROYAL</strong></p>
        </div>
      </div>
    </section>
  )
}

export default Gps