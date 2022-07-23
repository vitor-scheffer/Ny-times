import News from './News'
import BottomNews from './BottomNews'
import styles from './FirstNews.module.css';


const FirstNews = ({mainNews}) => {
  const mainExists = Object.keys(mainNews).length > 0;

  return (
    <>
    {mainExists ? (
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
      <div className={styles.topNews}>
        <div>
          <News mainNews={mainNews[0]} descricao={mainNews[0].abstract} isBorder/>
          <News mainNews={mainNews[1]} descricao={mainNews[1].abstract} />
        </div>
        <div>
          <img src={mainNews[0].multimedia[0].url} alt='' />
          <p><small>{mainNews[0].multimedia[0].copyright}</small></p>
        </div>  
      </div>
      <div className={styles.bottomNews}>
          <BottomNews mainNews={mainNews[2]}/>
          <div className={styles.line}></div>
          <BottomNews mainNews={mainNews[2]}/>
          <div className={styles.line}></div>
          <BottomNews mainNews={mainNews[2]} />
      </div>
      </section>
      
      </>
    ) : (<div></div>) }
    
    
    </>
  )
}
export default FirstNews