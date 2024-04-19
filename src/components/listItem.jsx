/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

function List(props) {
    
   
    const itemList = props.items;

    const itemLists = itemList.map((item) =>  <Link to="/"><li key={item}>{item}</li></Link>)

    return itemLists

    
   
}

export default List