import './Skills.css'
import frontend from '../../assets/frontend.svg'
import backend from '../../assets/backend1.svg'
function Skills() {

  return (
    <div className='body1'>
      <h1>SKILLS</h1>
      <div className="content">
        <div className="frontend">
          <img src={frontend} alt="" />
          <h3>Frontend</h3>
          <ul>
            <li>• HTML</li>
            <li>• CSS</li>
            <li>• Javascript</li>
            <li>• Bootstrap</li>
            <li>• React</li>
          </ul>
        </div>
        <div className="backend">
          <img src={backend} alt="" />
          <h3>Backend</h3>
          <ul>
            <li>• Node.js</li>
            <li>• Express.js</li>
            <li>• MongoDB</li>
            <li>• Mongoose</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills;