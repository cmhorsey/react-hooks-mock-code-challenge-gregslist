import React from "react"
import ListingCard from "./ListingCard"

function ListingsContainer({ listings, setListings }) {
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => {
          return (
            <ListingCard
              key={listing.id}
              description={listing.description}
              location={listing.location}
              image={listing.image}
            />
          )
        })}
      </ul>
    </main>
  )
}

export default ListingsContainer
