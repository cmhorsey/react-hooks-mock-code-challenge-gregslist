import React, { useEffect, useState } from "react"
import Header from "./Header"
import ListingsContainer from "./ListingsContainer"

function App() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((res) => res.json())
      .then((data) => setListings(data))
  }, [])

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listings} setListings={setListings} />
    </div>
  )
}

export default App
