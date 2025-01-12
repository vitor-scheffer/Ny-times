import { Link } from "react-router-dom";
import styles from "./FirstNews.module.css";

const News = ({ mainNews, descricao, isBorder }) => {
  const mainExists = mainNews && Object.keys(mainNews).length > 0;
  const urlSearch = mainNews?.url ? mainNews.url.slice(22, -5) : '';

  return (
    <>
      {mainExists ? (
        <>
          <div
            className={styles.text}
            style={{
              borderBottom: isBorder ? "1px solid #dfdfdf" : "",
            }}
          >
            <Link to={`/detalhenoticia/${urlSearch.replaceAll("/", "---")}/`}>
              <h3>{mainNews.title}</h3>
              <p>{descricao ? descricao : ""}</p>
            </Link>
          </div>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
};
export default News;
