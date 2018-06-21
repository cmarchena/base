import React from 'react'
const styles = {
  img: {
    width: '100%',
  },
}
export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <h1>Amazing Pandas Eating Things</h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <img style={styles.img} src={node.frontmatter.image} alt="" />
          <h3>
            {node.frontmatter.title}
            <span>— {node.frontmatter.date}</span>
          </h3>

          <p>{node.excerpt}</p>
          <p>
            <a href={node.fields.slug}>Ver más</a>
          </p>
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            image
          }
          excerpt
        }
      }
    }
  }
`
