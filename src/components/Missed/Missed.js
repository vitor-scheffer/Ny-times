import styles from './Missed.module.css';

const Missed = ({missed, isBorder}) => {
  const missedExists = Object.keys(missed).length > 0;

  return (
    <>
    {missedExists ? (
      <>
      <div className={styles.flexContainer} style={{borderBottom: isBorder ? '1px solid #dfdfdf' : '' }}>
        <h3>{missed[0].title}</h3>
        <img src={missed[0].multimedia[2].url} alt="" />
      </div>
      </>
    ) : (<div></div>) }
    
    
    </>
  )
}
export default Missed