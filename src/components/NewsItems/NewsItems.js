import React from 'react'
import './NewsItems.css'

function NewsItems({urlToImage,title,description}) {
    return (
        <>
            <div className='col-md-4'>
                <div className='news-card'>
                    <img className='news-img' src={urlToImage} />
                    <h5 className='mt-3'>{title}</h5>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

export default NewsItems