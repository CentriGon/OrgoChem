import { NavBar } from "../components/NavBar"
import { useNavigate } from "react-router-dom"


export const ComingSoon = () => {

    const navigate = useNavigate();


    const goback = () => {
        navigate("/home");
    }

    return <div className="coming-soon">
        <NavBar />
        <h1 style={{marginTop: 20 + "vh"}}> Coming Soon. </h1>
        <button onClick={() => {goback()}}> Back </button>
    </div>
}
