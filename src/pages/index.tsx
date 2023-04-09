import { gql, GraphQLClient } from "graphql-request";

export const getStaticProps = async () => {
  interface IVideos {
    createdAt: Date;
    description: string;
    id: string;
    publishedAt: Date;
    seen: boolean;
    slug: string;
    tags: [string];
    title: string;
    thumbnail: [string];
    mp4: [string];
  }
  interface IVideoData {
    videos: IVideos;
  }
  const url =
    "https://api-ap-south-1.hygraph.com/v2/clg9abtj5283t01um9b41h8ec/master";
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODEwNTkyOTQsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NsZzlhYnRqNTI4M3QwMXVtOWI0MWg4ZWMvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6IjAxODA1MDlkLWY4OWQtNGM5My1iMDk0LWJjZTMzYjBhNTBlOSIsImp0aSI6ImNsZzluYXN0bjJhd3kwMXVrMnlvczYxdG4ifQ.CbLjS7zuD1Wd13AJbYJucMwsqF7TTPGWW89bc5iGDKhvH96YDXH1yiFJ474QQO-xnvqUuvewZWlTzMJPWxhX5BoSvKE06iOxYt0tWkzMdw_RCvptvzNT6zNf3EHMQVp-571LPgSz516Kpd5TFXCWQ9-6wptopi2SiJPsJFnVdlltD-UxYT1fH3Ej9UOIzrpcFhNdYqstVa8Cu8hqatvzebhbiTUmO2ihnqBxF7GIAHYIGM8AkkJZmd_S7p_slY5VoHLDqGprbqswidO2OkYHuv84dtMWxF_4shmVxNEha9nbEZrbYvRBHXS69dsPrWTKlWD8GETVd8qXmAv1tjPd_J8tjoyuYui6_JGYZ2s0zo8LocWGpFHkCbZ2nv__uDORz1jktK4uKaolxQ4Vmhy_-pZGjXMBHITEgtbYgr-N2FoX7Ylr8_24dQV-DmesOikbS7x6uu_Sg_V8eOmKv--voh8IUgPHn7eWrl82wE0GS8qM5TwtdALMvOijRdZX7RmkRhXNRsSkiO39J3tM837heE0pCTS4vAmbn8YfhJo4k3xg-U9CbbaLRRtPFN_ETys55jeOY0O3u3Os99FpcWrIDwZmh2GntylJRPyLnllU9sgLv_wziP4CZHIZ82gpYHKJ1civeXr-rtc-A8ynBOcGEzV3EHTmDFfIhGSKg9q6r2U",
    },
  });
  const query = gql`
    query Videos {
      videos {
        createdAt
        description
        id
        publishedAt
        seen
        slug
        tags
        title
        thumbnail {
          url
        }
        mp4 {
          url
        }
      }
    }
  `;

  const data: IVideoData = await graphQLClient.request(query);
  const videos = data.videos;
  return {
    props: {
      videos,
    },
  };
};

const Home = ({ videos }) => {
  console.log(videos);
  return <div className="bg-green-100">Hello</div>;
};

export default Home;
