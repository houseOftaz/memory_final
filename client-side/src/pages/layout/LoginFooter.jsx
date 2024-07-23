
import { Link } from "react-router-dom"


const LoginFooter = ({ linkTo, label, className }) => {

  return (
    <Link to={linkTo}
          className={className}>
            {label}
    </Link> 
  )
}

export default LoginFooter
