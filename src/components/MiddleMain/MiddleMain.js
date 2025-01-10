import News from "../FirstNews/News";
import styles from "./MiddleMain.module.css";

const MiddleMain = ({ middleNews }) => {
  const middleExists = middleNews.length > 0;

  return (
    <>
      {middleExists ? (
        <>
          <section className={styles.flexContainer}>
            <div>
              <News
                isBorder
                mainNews={middleNews[0]}
                descricao={middleNews[0].abstract}
              />
              <News mainNews={middleNews[1]} />
            </div>
            <img src={middleNews[0]?.multimedia[1]?.url} alt="" />
          </section>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
};
export default MiddleMain;
