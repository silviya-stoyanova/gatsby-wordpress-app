'use strict'

module.exports = `
    {
        allWordpressPage {
            edges {
                node {
                    id
                    slug
                    status
                    template
                }
            }
        }
        
        allWordpressPost {
            edges {
                node {
                    id  
                    slug
                    status
                    template
                    format
                    title
                    date
                    featured_media{
                        localFile{
                            childImageSharp{
                                resolutions(width:500, height: 200){
                                    src
                                    width
                                    height
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

// allMarkdownRemark(
//     sort: { order: DESC, fields: [frontmatter___date] }
//                 limit: 1000
// ) {
//     edges {
//         node {
//             frontmatter {
//                 path
//             }
//         }
//     }
// }