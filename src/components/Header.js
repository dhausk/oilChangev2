import './HeaderStyle.css';
import { Link } from 'react-router-dom';


function NavHeader(props) {
    const signIn = props.loggedIn
    const signInButton = (signIn)=> {
        if(signIn){
            return <h3>LoggedIn</h3>
        }else {
            return <h3>Sign Up or Login Here</h3>
        }
    }; 
    
    
    return (    
        < header className="App-header" >
            <div className="title-div">
                <h1 className="title">Oil Change</h1>
                <p className="app-intro">When did I do that again...</p>
                <p>{signIn} </p>
            </div>
            <nav className="header-nav" >
                <Link to="/">
                    <button className="nav-button" >Home</button>
                </Link>
                <Link to="/Vehicles">
                    <button className="nav-button" >Vehicles</button>
                </Link>
                <Link to="/About">
                    <button className="nav-button" >About</button>
                </Link>
            </nav>
            {/* {signInButton} */}
        </header >
    );
}

export default NavHeader;