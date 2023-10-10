import logo from "../../assets/Vector.svg";
import "./navbar.css"
import help from '../../assets/question-fill.svg'
import settings from '../../assets/settings-3-fill.svg'
import notify from '../../assets/notification-2-fill.svg'
export default function Navbar() {
  return (
//     <nav className="navbar bg-body-tertiary bg-white">
//     <div className="container-fluid flex-row">
//       <a className="navbar-brand"><img src={logo} alt="" /></a>
//       <form className="d-flex flex " role="search">
//         <input className="form-control me-2" type="search" placeholder="Search"/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </nav>
<nav className="navbar bg-white">
<div className="container-fluid">
<div className='d-flex'>
<a className="navbar-brand" href="#">
    <img src={logo}/>
  </a>
<form className="d-flex searchBar " role="search">
  <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
  {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
</form>
</div>


<>
<div className='d-flex flex-row-reverse'>
<div className="dropdown p-2">
<button className="btn btn-secondary bt-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
username
</button>
</div>
<div className="p-2">
<a className="navbar-brand" href="#">
    <img src={notify} width="30" height="24"/>
  </a>
  <a className="navbar-brand" href="#">
    <img src={settings} width="30" height="24"/>
  </a>
</div>
<div className="p-2">

<a className="navbar-brand" href="#">
    <img src={help} width="30" height="24"/>
</a>
help
</div>
</div>

</>
</div>
</nav>
  )
}
