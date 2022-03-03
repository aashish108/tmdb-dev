import { useState, useEffect } from 'react';
import EnterAPIKey from './components/EnterAPIKey';
import Movie from './components/Movie';
import Search from './components/Search'
import Menu from './components/Menu';
import './App.css';

function App() {
  const [apiKey, setAPIKey] = useState('');
  const [page, setPage] = useState('apiKey');
  const [trending, setTrending] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const getTrending = async () => {
      const url = `//api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`;
    
      const myRequest = new Request(url);
    
      const response = await fetch (myRequest);
      const trending = await response.json();
      console.log(trending.results);
    
      setTrending(trending.results);
    }

    const getSearchResults = async () => {
      const url = `//api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${searchTerm}`;
  
      const myRequest = new Request(url);
    
      const response = await fetch (myRequest);
      const searchResults = await response.json();
      console.log(searchResults.results);
      
      setSearchResults(searchResults.results);
    }
    
    console.log('page', page);

    if (page === 'dashboard') {
      getTrending();
    }

    if (page === 'searchResults') {
      getSearchResults();
    }
  }, [page, searchTerm]);

  return (
    <>
      {page !== 'apiKey' && (
        <>
          <Menu setPage={setPage} />
          <div className="grid grid-cols-1 my-10 lg:my-0 lg:p-10">
            <Search setSearchTerm={setSearchTerm} setPage={setPage} />
          </div>
        </>
      )}

      {page === 'apiKey' && (
        <>
          <h1 className="text-8xl text-center p-10">Welcome to TMDB</h1>
          <EnterAPIKey setAPIKey={setAPIKey} setPage={setPage} />
        </>
      )}

      {page === 'dashboard' && (
        <>
          <h1 className='text-6xl lg:text-8xl lg:text-center lg:p-10 my-10 lg:my-0'>Dashboard</h1>
          <h2 className="text-4xl lg:text-center lg:p-10 my-10 lg:my-0">Trending Movies from Last 7 Days</h2>
          <div className='w-fit grid grid-cols-1 lg:grid-cols-3 lg:gap-4 lg:p-10'>
            {trending && trending.map((data, x) => 
              <Movie 
                key={x}
                title={data.title ? data.title : data.name} posterBasePath='https://image.tmdb.org/t/p/original/' 
                poster={data.poster_path}
                vote={data.vote_average}
                voteCount={data.vote_count}
              />
            )}
          </div>
        </>
      )}

      {page === 'searchResults' && (
        <>
          <h1 className="text-6xl lg:text-8xl lg:text-center lg:p-10 my-10 lg:my-0">Searching for {searchTerm}</h1>
          <div className='w-fit grid grid-cols-1 lg:grid-cols-3 lg:gap-4 lg:p-10'>
            {searchResults && searchResults.map((data, x) => 
              <Movie
                key={x}
                title={data.title ? data.title : data.name} posterBasePath='https://image.tmdb.org/t/p/original/'
                poster={data.poster_path}
                vote={data.vote_average}
                voteCount={data.vote_count}
              />
            )}
          </div>
        </>
      )}
    </>
  );
}

export default App;