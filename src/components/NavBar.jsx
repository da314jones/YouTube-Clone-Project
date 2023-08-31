import { useLocation, Link } from 'react-router-dom'


export default function NavBar({}) {
  const location = useLocation();

  return (
    <div className='navbar'>
      <Link to="/">You Tube </Link>
      <Link to="about"> About</Link>
    </div>
  )
}
