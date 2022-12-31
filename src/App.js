import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './App.css'
// import NewsItems from './components/NewsItems/NewsItems';

function App() {

  const [data, setData] = useState("");

  const [tempArr, setTempArr] = useState([]);

  const [inpNews, setInpNews] = useState("");
  const db = []

  useEffect(() => {
    async function loadData() {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${data}&from=2022-11-30&sortBy=publishedAt&apiKey=4b188a626f864cfd916725e0bfc4039c`)
      // console.log(response);



      // console.log(response.data.articles);

      // db.forEach(element , i=> {
      //    console.log(element , i);
      // });

      for (let i = 0; i <= 10; i++) {
        const temp = response.data.articles[i];

        db.push(temp)

        // const urlToImage = db[i].urlToImage;
        // setUrlToImage(urlToImage);
        // console.log(urlToImage);

        // const description = db[i].description;
        // setDescription(description)
        // console.log(description);
      }
      // console.log(db)

      setTempArr(db)

  

    }


    loadData();

  }, [data])

  const newsMAP =  tempArr.map((ele) => {
    return (
      <div className='col-md-4'>
      <div className='news-card'>
          <img className='news-img' src={ele.urlToImage} />
          <h5 className='mt-3'>{ele.title}</h5>
          <p>{ele.description}</p>
      </div>
  </div>
    )
  })

  // console.log(tempArr);

  return (

    <>
   
      <div>
        <div className='conteiner my-3'>

          <form>
            <input
              type="text"
              placeholder="Enter City Name"
              className="search-city mt-2 mb-4"
              value={inpNews}
              onChange={(e) => {
                setInpNews(e.target.value);
              }}
            />
            <br></br>
            <button
              type="button"
              className="btn btn-outline-dark search-btn"
              onClick={() => setData(inpNews)}>
              SUBMIT
            </button>
          </form>
        </div>

        <div className='container'>
          <div className='row'>
          {
            newsMAP
          }
          </div>
        </div>
      </div>
    </>
  )
}

export default App