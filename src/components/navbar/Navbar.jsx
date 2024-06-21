
import logo from '../../assets/logo.svg'
import offers from '../../assets/offersIcon.svg'
import './Navbar.css'
export default function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div>
          <img style={{height: "54px", width: "224px"}} src={logo} alt='Logo'/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0   mt-3 mt-lg-0  ">
            <li className="nav-item d-flex  align-items-center">
              <img className='me-2  me-lg-0' src={offers} alt='' />
              <a className="nav-link active" aria-current="page" href="#">Offers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Destinations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Events</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Ships</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
          <div className="d-flex" role="search">
            <button className='blueBtn me-2'>Find a Cruise</button>
            <button className='ms-2 whiteBtn'>Web Check-in</button>
          </div>
        </div>
      </div>
    </nav>


  )
}
