import { useCallback, useRef, useState} from "react";
import Link from 'next/link'
function SearchComponent(){
  const searchRef = useRef(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(false)
  const [results, setResults] = useState([])

  const searchEndpoint = (query) => `/api/search?q=${query}`
  console.log("Global Scope: "+searchEndpoint)

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query)
    if (query.length) {
      console.log("if statement Scope: "+searchEndpoint(query))
      fetch(searchEndpoint(query))
        .then(res => res.json())
        .then(res => {
          setResults(res.results)
        })
    } else {
      setResults([])
    }
  }, [])
  const onFocus = useCallback(() => {
    setActive(true)
    window.addEventListener('click', onClick)
  }, [])

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false)
      window.removeEventListener('click', onClick)
    }
  }, [])

    return(
       <>
  <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
     onChange={onChange}
     onFocus={onFocus}
     
     
     value={query} />
    <button className="btn-1 from-left my-2 my-sm-0" type="submit">Search</button>
  </form>
<div>
  { active && results.length > 0 && (
        <ul >
          {results.map(({ id, title }) => (
            <li  key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
            {console.log(id)}
            </li>
          ))}
        </ul>
      ) }
    </div>
  )

</>
    )
}

export default SearchComponent