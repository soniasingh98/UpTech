import './App.css';
import React,{useEffect,useState} from 'react';
import News from './News';
function App() {
 const [latests,setlatest]=useState([]);
 const[search,setSearch]=useState('');
 const [query,setquery]=useState('html')
 useEffect(()=>{
  console.log("useeffect")
   getRecipes();
 },[query]);
 const getRecipes=async()=>{
  const response=await fetch( `http://hn.algolia.com/api/v1/search?query=${query}`)
  const data=await response.json();
  console.log(data.hits)
  setlatest(data.hits);

 }
 const updateSearch=e=>{
  setSearch(e.target.value);

 }
 const getSearch=e=>{
  e.preventDefault();
  setquery(search);
  setSearch('');
 }
  return (
    <div className="App">
      <form onSubmit={getSearch} className='search-form'>
        <input placeholder='Type a Technology...' className="search-bar" type="text"value={search} onChange={updateSearch}/>
        <button className="search-button" type='submit'>Search</button>
      </form>
      <div className='news'>
      {latests.map(latest=>(
        <News key={latest.title} title={latest.title} date={latest.created_at} author={latest.author} url={latest.url}/>
      ))}
      </div>
    </div>
  );
}

export default App;
