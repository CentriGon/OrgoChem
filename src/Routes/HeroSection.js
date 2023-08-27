import { NavBar } from "../components/NavBar"
import "../styles/HeroSection.css"
import { useNavigate} from "react-router-dom"

export const HeroSection = () => {

    const navigate = useNavigate();

    const goToCards = () => {
        navigate("/home");
    }


    return <div className="hero-section">
        <NavBar />
        <h1 style={{marginTop: 20 + "vh"}}> Gov School Organic Chemistry</h1>
        <h4 style={{color: "yellow", fontSize: 20 + "px", maxWidth: 500 + "px", textAlign: "center"}}> Note: The server for fetching questions turns off after 15 minutes of inactivity. If there is an error fetching questions, give it a few minutes</h4>
        <button style={{fontSize: 32 + "px",padding: 10 + "px"}} onClick={goToCards}> Start </button>
    </div>
}
