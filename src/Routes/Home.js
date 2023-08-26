import { NavBar } from "../components/NavBar"
import { ChapterCard } from "../components/ChapterCard"


export const Home = () => {



    return <div className="home">
        <NavBar />
        <div className="cards">
            <ChapterCard SRC={require("../images/Screenshot 2023-08-23 093422.png")} chapName="Chapter 12 - Saturated Hydrocarbons" chapNum={12}/>
            
        </div>
    </div>
}
