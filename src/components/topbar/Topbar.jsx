import './topbar.scss';
import {Person,Mail} from '@material-ui/icons'

function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">genius.</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+1 835 679 09 19</span>

                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>sofiadurkan@gmail.com</span>
                    </div>

                </div>
                <div className="right">
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>

                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Topbar;
