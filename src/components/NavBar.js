import { useNavigate } from "react-router-dom"

export const NavBar = () => {

    const navigate = useNavigate();

    return <div className="nav-bar">
        <div className="left-side">
            <img src={require("../images/logo-removebg-preview.png")} alt="logo" onClick={() => {navigate("/")}}/>
        </div>
        <div className="right-side">
            <button> Sign In </button>
            <button> Sign out </button>
        </div>
    </div>
}
