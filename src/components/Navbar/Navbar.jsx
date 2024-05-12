import './Navbar.css'
function Navbar() {

  function clickSkill() {
    window.scrollTo({top: 620, behavior: "smooth"})
  }
  function clickProject() {
    window.scrollTo({top: 1060, behavior: "smooth"})
  }
  function clickAcademic() {
    window.scrollTo({top: 1650, behavior: "smooth"})
  }
  function clickContact() {
    window.scrollTo({top: 2200, behavior: "smooth"})
  }
  function clickHome() {
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  return (
    <div className="navbar">
      <div className="sub-navbar1">
        <div className="sub-navbar1-right">
          <p onClick={()=> clickSkill()} className='nav-option ski'>Skills</p>
          <p onClick={()=> clickProject()} className='nav-option dd'>Projects</p>
          <p onClick={()=> clickAcademic()} className='nav-option acad'>Academics</p>
        </div>
        <p onClick={()=> clickContact()} className='nav-option ss'>Contact</p>
      </div>
      <div onClick={()=> clickHome()} className="sub-navbar2">HOME</div>
    </div>

  )
}

export default Navbar