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
      <div className={styles.topNews}>
        <div>
          <News mainNews={mainNews[0]} descricao={mainNews[0].abstract} isBorder/>
          <News mainNews={mainNews[1]} descricao={mainNews[1].abstract} />
        </div>
        <div>
          <img src={mainNews[0].multimedia[1].url} alt='' />
          <p><small>{mainNews[0].multimedia[1].copyright}</small></p>
        </div>  
      </div>
      <div className={styles.bottomNews}>
          <BottomNews mainNews={mainNews[2]}/>
          <div className={styles.line}></div>
          <BottomNews mainNews={mainNews[3]}/>
          <div className={styles.line}></div>
          <BottomNews mainNews={mainNews[4]} />
      </div>
      </section>
      
      </>
    ) : (<div></div>) }
    
    
    </>
  )
}
export default FirstNews