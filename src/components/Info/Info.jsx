const Info = ({
  details: {
    poster_path,
    original_title,
    release_date,
    genres,
    overview,
    vote_average,
  },
}) => {
  return (
    <div>
      <h2>{`${original_title} (${release_date.slice(0, 4)})`}</h2>
      <img src={`http://image.tmdb.org/t/p/w500${poster_path}`} width="250" alt="poster" />
      <p>{`User Score ${Math.round(vote_average * 10)}%`}</p>
      <h3>Owerview</h3>
      <p>{overview}</p>
      <h4>Genres</h4>
      <p>{genres.map(genre => genre.name).join(' ')}</p>
    </div>
  );
};

export default Info;