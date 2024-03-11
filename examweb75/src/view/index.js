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
    //const url = 'https://examweb75-be.onrender.com/movie';
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
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            width: '900px',
            //   display: 'flex',
            //   flexDirection: 'column',
            //   justifyContent: 'center',
          }}
        >
          <ComHeader />
          <ComMovies
            movies={movies}
            movies_onChange={movies_onChange}
            pages_onChange={pages_onChange}
            page={page}
          />
        </div>
      </div>
    </>
  );
};

export default Web75;
