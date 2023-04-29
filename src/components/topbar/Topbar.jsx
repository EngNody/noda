import "./topbar.scss"
import {Person,Mail} from '@material-ui/icons';


const Topbar = () => {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
        <a href="#intro" className="logo">genuis.</a>
        <div className="itemcontainer">
        <Person className="icon"/>
        <span>+447775543</span>
        </div>
        <div className="itemcontainer">
        <Mail className="icon" />
        <span>totatota1990253@gmail.com</span>
        </div>
        </div>
        <div className="right">

        </div>
    </div>
    </div>
  );
}

export default Topbar;
