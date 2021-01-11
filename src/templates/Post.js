import React from "react";
import { graphql } from "gatsby";

export default function Page({ data, pageContext }) {
  const video = data.allWpPost.edges[0].node.acf.video;

  return (
    <div>
      <video
        autoPlay
        muted
        loop
        src={video.localFile.url}
      />
    </div>
  );
}

export const query = graphql`
  query ContentQuery($id: String) {
    allWpPost(filter: { id: { eq: $id } }) {
      edges {
      node {
        acf {
          video {
            altText
            localFile {
              url
            }
          }
        }
      }
    }
  }
  }
`;
