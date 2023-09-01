import { Link } from "react-router-dom"

export default function NavBar() {

  return (
    <div className='navbar-script border'>
      <Link to="/">YouTube </Link>
      <Link to="/about"> About</Link>
    </div>
  )
}
