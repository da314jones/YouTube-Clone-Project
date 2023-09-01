import { Link } from "react-router-dom"

export default function NavBar() {

  return (
    <div className='text-6xl font-bold  navbar-script'>
      <Link to="/">YouTube </Link>
      <Link to="/about"> About</Link>
    </div>
  )
}
