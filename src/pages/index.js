import React from "react"

const Home = ({ data }) => {
  console.log(data)
  return <div>At our WordPress page we have 301 published MapPlaces, and in graphql we get: <strong>{data.allWpMapPlace.totalCount}</strong></div>
}

export default Home

export const query = graphql`
query MapPlaces {
  allWpMapPlace {
    totalCount
  }
}
`
