import axios from 'axios';
import './App.css'
import React, { useEffect, useState } from 'react'
import ImgNews from './assets/newspaper.png'

function App() {

  const [data, setData] = useState("");

  const [tempArr, setTempArr] = useState([]);

  const [inpNews, setInpNews] = useState("");
  const db = []

  useEffect(() => {
    async function loadData() {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${data}&from=2022-12-01&sortBy=publishedAt&apiKey=b3c517bb2e7f4e99aac6dcda6089489f`)
      // console.log(response);


      for (let i = 0; i <= 10; i++) {
        const temp = response.data.articles[i];

        db.push(temp)

      }
      // console.log(db)

      setTempArr(db)
    }

    loadData();

  }, [data])

  const newsMAP = tempArr.map((ele) => {
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
          <div className='form-options'>
            <div className='row'>
              <div className='col-md-3'>
                <img className='imgNews' src={ImgNews} />
              </div>
              <div className='col-md-9'>
                <form>
                  <input
                    type="text"
                    placeholder="Enter Keyword to find realted News"
                    className="search-news mt-2 mb-4"
                    value={inpNews}
                    onChange={(e) => {
                      setInpNews(e.target.value);
                    }}
                  />
                  <br></br>
                  <button
                    type="button"
                    className="btn search-btn"
                    onClick={() => setData(inpNews)}>
                    <b>SUBMIT</b>
                  </button>
                </form></div>
            </div>
          </div>
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