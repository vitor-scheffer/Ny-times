import styles from './TopAside.module.css';

const TopAside = ({mainAside}) => {
    const topExists = Object.keys(mainAside).length > 0;

    return (
      <>
      {topExists ? (
        <>
        <div className={styles.flexContainer}>
          <img src={mainAside[0].multimedia[1].url} alt="" />
          <span><small>{}</small></span>
          <h3>{mainAside[0].title}</h3>
          <p>{mainAside[0].abstract}</p>
          
        </div>
        </>
      ) : (<div></div>) }
      
      
      </>
    )
  }
export default TopAside