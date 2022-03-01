const Movie = ({title, posterBasePath, poster, vote, voteCount}) => {

  return (
    <div className='my-10 lg:my-0'>
      <img className="w-screen" src={posterBasePath + poster} alt={title} />
      <p className="font-bold">{title}</p>
      <p>Rating: {vote} Number of votes: {voteCount}</p>
    </div>
  );
}

export default Movie;
