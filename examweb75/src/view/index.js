import { useEffect, useState } from 'react';
import axios from 'axios';
import ComMovies from './ComMovies';
import ComHeader from './ComHeader';

const Web75 = () => {
  const [movies, set_movies] = useState();
  const [page, set_page] = useState(1);

  useEffect(() => {
    get_all_movies();
  }, []);
  const movies_onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const get_all_movies = async () => {
    const url = 'https://examweb75-be.onrender.com/movie';
    const response = await axios.get(url);

    if (response) {
      set_movies(response.data.data);
    }
  };

  const pages_onChange = (e) => {
    set_page(e);
  };

  return (
    <>
      <ComHeader />
      <ComMovies
        movies={movies}
        movies_onChange={movies_onChange}
        pages_onChange={pages_onChange}
        page={page}
      />
    </>
  );
};

export default Web75;
