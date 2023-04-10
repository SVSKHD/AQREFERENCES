import {Helmet} from "react-helmet"
const AqSeo = ({title , description , canonical , keywords , keyphrases}) =>{
    
return(
    <>
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta name="keywords" content={keywords}/>
        <meta name="keyphrase" content={keyphrases}/>
        <meta name="robots" content="index, follow"/>
        {/* link */}
        <link rel="canonical" href={canonical} />
    </Helmet>
    </>
)
}
export default AqSeo