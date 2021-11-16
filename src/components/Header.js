import '../styling/HeaderStyle.css';
import { Link } from 'react-router-dom';

function NavHeader(props) {
  const signIn = props.loggedIn
  const signInButton = (signIn) => {
    console.log(signIn)
    if (signIn === false) {
      return <button>Sign or log in here</button>;
    } else {
      return <h5>Logged In</h5>;
    };
  }; //displays sign in button or if the user is logged in on header

  return (
    < header className="App-header" >
      <div className="title-div">
        <h1 className="title">Oil Change</h1>
        <p className="slogan">When did I do that again...</p>
      </div>
      <nav className="header-nav" >
        <Link to="/">
          <button className="nav-button" >Home</button>
        </Link>
        <Link to="/Profile">
          <button className="nav-button">My Profile settings</button>
        </Link>
        <Link to="/Vehicles">
          <button className="nav-button" >My Vehicles</button>
        </Link>
        {/* <Link to="/About">
					<button className="nav-button" >About</button>
				</Link> */}
      </nav>
      <div className="signUpIn">
        {signInButton(signIn)}
      </div>
    </header >
  );
}

export default NavHeader;