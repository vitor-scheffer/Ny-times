import { Link } from 'react-router-dom'

const bottomNews = ({mainNews}) => {
    const mainExists = Object.keys(mainNews).length > 0;

    return (
      <>
      {mainExists ? (
        <>
        <div>
          <Link to={`/detalhenoticia/${mainNews.title}/${mainNews.abstract}`}>
            <h3>{mainNews.title}</h3>
          </Link>
        </div>
        </>
      ) : (<div></div>) }
      
      
      </>
    )
  }
export default bottomNews