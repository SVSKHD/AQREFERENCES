import {FaHome} from "react-icons/fa"
import {Button} from "react-bootstrap"
import NF from "./NF.jpg"

const NotFoundComponent = () =>{
return(
    <>
    <div>
    <div className="text-center">
        <img src={NF} alt="not-found" height="400"/>
        <br/>
        <Button href="/" variant="secondary" size="sm">
          <FaHome size={20}/>
        </Button>
    </div>
    </div>
    </>
)
}
export default NotFoundComponent