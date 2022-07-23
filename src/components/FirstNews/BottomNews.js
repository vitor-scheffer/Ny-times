const bottomNews = ({mainNews}) => {
    const mainExists = Object.keys(mainNews).length > 0;

    return (
      <>
      {mainExists ? (
        <>
        <div>
          <h3>{mainNews.title}</h3>
        </div>
        </>
      ) : (<div></div>) }
      
      
      </>
    )
  }
export default bottomNews