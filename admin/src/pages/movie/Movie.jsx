import { Link, useHistory, useLocation } from 'react-router-dom'
import './movie.css'
import { Publish } from '@material-ui/icons'
import { useContext, useEffect,useState } from 'react'
import { updateMovies } from '../../context/movieContext/apiCalls'
import { MovieContext } from '../../context/movieContext/MovieContext'
export default function Product() {
  const location = useLocation()
  const history = useHistory()
  const movie = location.movie
  const [data, setData] = useState({
title: "",
year: "",
genre: "",
limit: ""
  })
  const {dispatch} = useContext(MovieContext)
  useEffect(() => {
    setData(movie)
  }, [movie])

  const handleChange = (e) => {
    const {name,type,value,files} = e.target
    switch (type) {
      case files:
        setData({...data,[name]: files[0]})
        break;
      default:
        setData({...data,[name]: value})
        break;
    }
  }

  const handleCreate = (e) => {
    e.preventDefault()
    updateMovies(data,dispatch)
  }
  
  
  return (
    <div className='product'>
      <div className='productTitleContainer'>
        <h1 className='productTitle'>Movie</h1>
        <Link to='/newmovie'>
          <button className='productAddButton'>Create</button>
        </Link>
      </div>
      <div className='productTop'>
        <div className='productTopRight'>
          <div className='productInfoTop'>
            <img src={movie.img} alt='' className='productInfoImg' />
            <span className='productName'>{movie.title}</span>
          </div>
          <div className='productInfoBottom'>
            <div className='productInfoItem'>
              <span className='productInfoKey'>id:</span>
              <span className='productInfoValue'>{movie._id}</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>genre:</span>
              <span className='productInfoValue'>{movie.genre}</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>year:</span>
              <span className='productInfoValue'>{movie.year}</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>limit:</span>
              <span className='productInfoValue'>{movie.limit}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='productBottom'>
        <form className='productForm' onSubmit={handleCreate}>
          <div className='productFormLeft'>
            <label>Movie Title</label>
            <input name="title" type='text' value={data.title} onChange={handleChange} />
            <label>Year</label>
            <input name="year" type='text' value={data.year} onChange={handleChange} />
            <label>Genre</label>
            <input name="genre" type='text' value={data.genre} onChange={handleChange} />
            <label>Limit</label>
            <input name="limit" type='text' value={data.limit} onChange={handleChange} />
            <label>Trailer</label>
            <input type='file' onChange={handleChange} />
            <label>Video</label>
            <input type='file' onChange={handleChange} />
          </div>
          <div className='productFormRight'>
            <div className='productUpload'>
              <img src={movie.img} alt='' className='productUploadImg' />
              <label htmlFor='file'>
                <Publish />
              </label>
              <input type='file' id='file' style={{ display: 'none' }} />
            </div>
            <button type="submit" className='productButton'>Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}
