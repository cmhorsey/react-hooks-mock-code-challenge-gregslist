import React, { useState } from "react"

function Search({ listings, setListings, originalListings }) {
  const [search, setSearch] = useState("")

  function handleSubmit(event) {
    event.preventDefault()

    if (search === "") {
      setListings(originalListings)
    } else {
      const listingsToDisplay = listings.filter((listing) =>
        listing.description.includes(search)
      )
      setListings(listingsToDisplay)
    }
  }

  function handleSearchChange(event) {
    setSearch(event.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={handleSearchChange}
      />
      <button type="submit">🔍</button>
    </form>
  )
}

export default Search
