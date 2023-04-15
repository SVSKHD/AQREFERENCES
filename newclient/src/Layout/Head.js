import { Helmet } from "react-helmet";

const AquaHead = (props) => {
  return (
    <>
      <Helmet>
        <title>{props.title}</title>
        <meta name="Description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="twitter:app:country" content="in" />
        <meta name="twitter:app:country" content="in" />
        <meta name="twitter:app:country" content="in" />
        {/* opengrapgh */}
        <meta name="og:title" content={props.title} />
        <meta name="og:type" content="movie" />
        <meta name="og:url" content={props.canurl} />
        <meta name="og:image" content={props.images} />
        <meta name="og:site_name" content="Aquakart" />
        <meta name="og:description" content={props.description} />
        <meta name="robots" content="index,follow" />
        {/* links */}
        <link rel="canonical" href={props.canurl} />
        {/* twitter cards */}
        <meta name="twitter:card" value="summary" />
        <meta name="twitter:url" content={props.canurl} />
        <meta name="twitter:domain" content="aquakart.co.in" />
        <meta name="twitter:creator" content="@aquakart8" />
        <meta name="twitter:image" content={props.images} />
      </Helmet>
    </>
  );
};

export default AquaHead;
