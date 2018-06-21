import React from 'react'

export default ({ data }) => (
  <div>
    <h1>{data.site.siteMetadata.title}</h1>
  </div>
)

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
