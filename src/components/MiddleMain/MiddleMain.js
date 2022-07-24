import News from '../FirstNews/News'
import styles from './MiddleMain.module.css'

const MiddleMain = ({middleNews}) => {
  const middleExists = Object.keys(middleNews).length > 0;

  return (
    <>
    {middleExists ? (
      <>
      <section className={styles.flexContainer}>
      {/* <nav className={styles.navNews}>
        <a href="#"><strong>Russia-Ukraine War</strong></a>
        <ul className={styles.listaNews}>
          <li><a href="#">Maps: Russia's Invasion</a></li>
          <li><a href="#">Photos</a></li>
          <li><a href="#">Ukraine’s War Dead</a></li>
          <li><a href="#">Attacks on Civilians</a></li>
        </ul>
      </nav> */}
        <div>
          <News isBorder mainNews={middleNews[0]} descricao={middleNews[0].abstract}/>
          <News mainNews={middleNews[1]}/>
        </div>
        <img src={middleNews[0].multimedia[1].url} alt="" />  
      </section>
      </>
    ) : (<div></div>) }
    </>
  )
}
export default MiddleMain