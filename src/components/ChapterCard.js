import { useNavigate} from "react-router-dom"


export const ChapterCard = (props) => {

    const navigate = useNavigate();

    const goToChap = (postFix) => {
        navigate("/chapter/" + props.chapNum + "/" + postFix)
        
    }

    return <div className="chapter-card" onClick={(e) => {goToChap("textbook"); e.stopPropagation();}}>

        <img src={props.SRC} alt="chapter 12 preview image" />
        <h2> {props.chapName}</h2>
        <div className="card-icons">
            <img src={require("../images/notes icon.png")} onClick={(e) => {goToChap("notes"); e.stopPropagation();}} alt="Notes icon" title="Notes" className="left-icon"/>
            <img src={require("../images/textBookIcon.png")} onClick={(e) => {goToChap("textbook"); e.stopPropagation();}} alt="Text book icon" title="Text book"/>
            <h1 className="qmark" title="Take Quiz" onClick={(e) => {goToChap("quiz"); e.stopPropagation();}} > ? </h1>
        </div>
    </div>
}
