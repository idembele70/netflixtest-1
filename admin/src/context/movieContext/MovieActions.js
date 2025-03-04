export const getMoviesStart = () => ({
  type: 'GET_MOVIES_START',
})
export const getMoviesSuccess = (movies) => ({
  type: 'GET_MOVIES_SUCCESS',
  payload: movies,
})
export const getMoviesFailure = () => ({
  type: 'GET_MOVIES_FAILURE',
})

export const createMovieStart = () => ({
  type: 'CREATE_MOVIE_START',
})
export const createMovieSuccess = (movie) => ({
  type: 'CREATE_MOVIE_SUCCESS',
  payload: movie,
})
export const createMovieFailure = () => ({
  type: 'CREATE_MOVIE_FAILURE',
})

export const updateMovieStart = () => ({
  type: 'UPDATE_MOVIE_START',
})
export const updateMovieSuccess = (movie) => ({
  type: 'UPDATE_MOVIE_SUCCESS',
  payload: movie,
})
export const updateMovieFailure = () => ({
  type: 'UPDATE_MOVIE_FAILURE',
})

export const deleteMoviesStart = () => ({
  type: 'DELETE_MOVIES_START',
})
export const deleteMoviesSuccess = (id) => ({
  type: 'DELETE_MOVIES_SUCCESS',
  payload: id,
})
export const deleteMoviesFailure = () => ({
  type: 'DELETE_MOVIES_FAILURE',
})
export const updateMoviesStart = () => ({
  type: 'UPDATE_MOVIES_START',
})
export const updateMoviesSuccess = (movie) => ({
  type: 'UPDATE_MOVIES_SUCCESS',
  payload: movie,
})
export const updateMoviesFailure = () => ({
  type: 'UPDATE_MOVIES_FAILURE',
})
