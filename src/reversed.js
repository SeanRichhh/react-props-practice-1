import {reverse} from "./helpers"

function Reverse(props){
    return(
        <p className="name-reversed">
        Also, {props.name} backwards is {reverse(props.name)}
      </p>
    )
}


export default Reverse