import styles from './SportsNews.module.css'

const SportsNews = ({sports}) => {
  const sportsExists = Object.keys(sports).length > 0;

  return (
    <>
    {sportsExists ? (
    <div className={styles.containerFlex}>
      <div>
        <h3>{sports.title}</h3>
        <p>{sports.abstract}</p>
      </div>
      <div>
       <img src={sports.multimedia[1].url} alt="" />
        <p><small>{sports.multimedia[1].copyright}</small></p>
      </div>
    </div>
  
    ) : (<div></div>) }
    </>
    
  )
}
export default SportsNews