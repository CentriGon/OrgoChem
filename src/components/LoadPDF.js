import { useEffect } from "react"



export const PDF = (props) => {

    useEffect(() => {
        window.addEventListener("resize", () => {
            try {
                let cover = document.querySelector(".pdf-top-cover");
                let pdf = document.querySelector(".pdf0");
                console.log(pdf.offsetLeft)
                cover.style.cssText = "top: " + (pdf.offsetTop-5) + "px; left: " + (pdf.offsetLeft-5) + "px; width: " + (pdf.clientWidth + 30) +  "px;"
            }
            catch (e) {
                // console.log(e)
            }
        })
        let cover = document.querySelector(".pdf-top-cover");
            let pdf = document.querySelector(".pdf0");
            cover.style.cssText = "top: " + (pdf.offsetTop-5) + "px; left: " +(pdf.offsetLeft-5) + "px; width: " + (pdf.clientWidth + 30) +  "px;"
    }, [])

    return <div className={"pdf-container"}>
        <div className={"pdf-top-cover"}></div>
        <iframe src={props.SRC} className={`pdf0`}></iframe>
        <div className="pdf-buttons">
            <button onClick={() => {props.prevPage()}}> Previous page </button>
            <button onClick={() => {props.startQuiz()}}> Take Page Quiz </button>
            <button onClick={() => {props.nextPage()}}> Next page </button>
        </div>
    </div>
}
