import React from 'react'
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { addtofavaction, removetofavaction } from '../../store/actions/favorite.action';

function Moviecard({ movie }) {
  const dispatch = useDispatch();
  const { favlist } = useSelector(state => state);

  // Check if the movie is in the favorites list
  const isFavorite = favlist.some(item => item.imdbID === movie.imdbID);

  return (
    <div className='p-[20px] rounded-sm border-[2px] shadow-sm'>
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Title}</h2>
      <div className='flex justify-between items-center'>
        <p>Year: {movie.Year}</p>
        <button 
          onClick={() => 
            isFavorite ? dispatch(removetofavaction(movie.imdbID)) : dispatch(addtofavaction(movie))
          }
        >
          {isFavorite ? 
            <MdFavorite className="text-red-500" /> : 
            <MdFavoriteBorder />
          }
        </button>
      </div>
    </div>
  );
}

export default Moviecard;
