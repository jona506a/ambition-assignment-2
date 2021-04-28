import { useState, useEffect } from "react";
import { handleSearch } from "./helpers/breweryHelpers";
import './App.css';

function App() {

  const [ search_input, setSearchInput ] = useState('Self portrait')
  const [ search_results, setSearchResults ] = useState([])
  const [ amount_loaded, setAmountLoaded ] = useState(0)

  const getData = async (search_input,  amount) => {
    const results = await handleSearch(search_input, amount)
    setSearchResults(results)
    setAmountLoaded(amount)
    console.log(results)
  };

  return (
    <div className="App">

      <div>
          <form _lpchecked="1">
            <div className="form-row">
              <div className="form-group col-md-12"><label for="search">Search</label>
                  <input type="text" className="form-control"
                    id="search" placeholder="New York" value={search_input} 
                    onChange={e => setSearchInput(e.target.value)}>
                  </input>
                </div>
                  
              <button className="btn btn-primary" onClick={()=>getData(search_input, 5)} type='button'>Search</button>
            </div>
          </form>
          <ul className="list-group list-group-flush py-2">
            { search_results.length > 0
              ? 
              <div className="search_results">
                {
                  search_results.map((anObjectMapped, index) => {
                    return(
                      <li class="list-group-item">
                        <div>
                          <div class="card-body">
                            <h5 class="card-title">{anObjectMapped.name}</h5>
                            <h6 class="card-subtitle mb-2">{anObjectMapped.brewery_type}</h6>
                            <h6 class="card-subtitle mb-2 text-muted">{anObjectMapped.street} - {anObjectMapped.state}</h6>
                            { anObjectMapped.website_url
                              ?
                              <a href={anObjectMapped.website_url} class="card-link">Link to website</a>
                              :
                              null
                            }
                          </div>
                        </div>
                      </li>
                    );
                  })
                }
              </div>
              : 
              undefined
            }
          </ul>
        { search_results.length > 0
          ?
          <nav className="load-more-container">
            <button id="load-more" className="btn-secondary" type='button' onClick={() => getData(search_input, amount_loaded + 5)}>Load more</button>
          </nav>
          :
          null
        }
      </div>
    </div>
  );
}

export default App;
