import {useEffect , useState} from "react"
import {useParams} from "react-router-dom"
import AquaLayout from "../../Layout/Layout"
import {getCategory} from "../../services/category"


const IndivdualCategoryComponent = () =>{
    const Match = useParams()
    const category = Match.name
    
    const [products , setProducts] = useState([])
    const [Category , setCategory] = useState({})
    const [Loading , setLoading] = useState(false)

    useEffect(()=>{

    },[])

    const getProductsByCategory = () =>{
       setLoading(true)
      getCategory(category).then((res)=>{
        setCategory(res.data.category)
        setProducts(res.data.products)
        setLoading(false)
      })
      .catch((err)=>{
        setLoading(false)
      })
    }








return(
    <>
    <AquaLayout>
        <h1>Categories</h1>
    </AquaLayout>
    </>
)
}
export default IndivdualCategoryComponent