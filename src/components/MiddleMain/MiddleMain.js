import News from "../FirstNews/News";
import styles from "./MiddleMain.module.css";

const MiddleMain = ({ middleNews }) => {
  const middleExists = middleNews.length > 0;
  const imageUrl = middleNews[0]?.multimedia?.find((media) => media.url)?.url;

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
            <img
              src={
                imageUrl ||
                "https://ropercenter.cornell.edu/sites/default/files/styles/800x600/public/Images/New-York-Times-Logo8x6_0.png?itok=7YqGOSMA"
              }
              alt="News Image"
            />
          </section>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
};
export default MiddleMain;
