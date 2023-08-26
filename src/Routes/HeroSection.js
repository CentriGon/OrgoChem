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
        <button style={{fontSize: 32 + "px",padding: 10 + "px"}} onClick={goToCards}> Start </button>
    </div>
}
