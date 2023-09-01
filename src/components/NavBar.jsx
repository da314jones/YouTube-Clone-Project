import { Link } from "react-router-dom"

export default function NavBar() {

  return (
    <div className='navbar text-gold-700'>
      <Link to="/">YouTube </Link>
      <Link to="/about"> About</Link>
    </div>
  )
}
