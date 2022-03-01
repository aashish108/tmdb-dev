import { useState } from 'react';

const Search = ({setSearchTerm, setPage }) => {
  const [searchValue, setSearchValue] = useState('');
  const onChange = event => setSearchValue(event.target.value); 
  const onClick = () => {
    console.log('searchValue ' + searchValue);
    setSearchTerm(searchValue);
    setPage('searchResults');
  }

  return (
    <div className="grid grid-cols-3">
      <input value={searchValue} type="text" placeholder="Enter Search Term" className="col-span-2 border-2 border-black lg:p-2 lg:h-10" onChange={onChange} />
      <button className="col-span-1 border-2 border-black text-center lg:h-10 lg:mx-10" onClick={onClick}>Search</button>
    </div>
  )
}

export default Search;
