import axios from 'axios';
import React, { useState } from 'react'
import './App.css'

function App() {

  const [data, setData] = useState("");

  const getNews = () => {
    axios.get("https://newsapi.org/v2/everything?q=twitter&from=2022-11-30&sortBy=publishedAt&apiKey=e583e41919dc42cbb7553fe611ee327b")

      .then((response) => {
        
        // console.log(response);

        setData(response.data.articles)
      })
  }

  return (
    <>
      <div>
        <div className='conteiner my-3'>
          <button className='btn btn-primary' onClick={getNews}>Fetch News</button>
        </div>

        <div className='container'>
          <div className='row'>

          {
            data && data.map((value)=>{
              return(
                <div className='col-md-4'>
                <div className='news-card'>
                  <img className='news-img' src={value.urlToImage} />
                  <h5 className='mt-3'>{value.title}</h5>
                  <p>{value.description}</p>
                </div>
                </div>
              )
            })
          }
         
          </div>
        </div>
      </div>
    </>
  )
}

export default App