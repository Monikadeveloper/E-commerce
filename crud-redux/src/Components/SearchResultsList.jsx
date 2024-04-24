import React from 'react'
import './Banner.css'
const SearchResultsList = ({ results }) => {
  const handleSubmit = () => {}
  return (
    <>
      {results.map((result, id) => {
        return (
          <>
            <div className="card">
              <p className="card-title">{result.title}</p>
              <p className="card-price">Price: {result.price}</p>
              <p className="card-rating">Rating: {result.rate}</p>
              <div className="card-body">
                <img
                  src={result.image}
                  alt="image"
                  style={{ height: '200px', width: '200px', margin: '10px' }}
                />
              </div>
              <button
                type="button"
                className="btn btn-warning"
                onClick={(id) =>
                  handleSubmit(
                    result.id,
                    result.title,
                    result.price,
                    result.image
                  )
                }
              >
                Add to cart
              </button>
            </div>
          </>
        )
      })}
    </>
  )
}

export default SearchResultsList
