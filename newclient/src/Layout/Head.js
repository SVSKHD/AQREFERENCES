import {Helmet} from "react-helmet"

const AquaHead = (props) =>{
return(
    <>
    <Helmet>
        <title>{props.title}</title>
    </Helmet>
    </>
)
}

export default AquaHead