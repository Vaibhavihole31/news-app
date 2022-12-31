import axios from 'axios';
import React, { useState } from 'react'
import './App.css'
import NewsItems from './components/NewsItems/NewsItems';

function App() {

  const [data, setData] = useState("");

  const getNews = () => {
    axios.get("https://newsapi.org/v2/everything?q=cricket&from=2022-11-30&sortBy=publishedAt&apiKey=e583e41919dc42cbb7553fe611ee327b")

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
            data && data.map((data,i)=>{
              return(
               <NewsItems
               key={i}
               urlToImage={data.urlToImage}
               title={data.title}
               description={data.description}
               />
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