import { useState } from 'react';

const EnterAPIKey = ({ setAPIKey, setPage }) => {
  const [apiKeyValue, setApiKeyValue] = useState('');
  const onChange = event => setApiKeyValue(event.target.value); 
  const onClick = () => {
    setAPIKey(apiKeyValue);
    setPage('dashboard');
  }

  return (
    <div className='text-center p-10'>
      <input value={apiKeyValue} type="text" placeholder="Enter TMDB API Key" className="border-2 border-black p-2" onChange={onChange} />
      <button className="border-2 border-black p-2 mx-10" onClick={onClick}>Submit</button>
    </div>
  )
}

export default EnterAPIKey;
