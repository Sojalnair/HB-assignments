import { useNavigate } from "react-router-dom";
import movies from "../data/movies";

export default function Movies() {
    const navigate = useNavigate();

    return ( <
        div >
        <
        h2 > Now Showing < /h2>

        <
        div style = {
            {
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "20px"
            }
        } > {
            movies.map(movie => ( <
                div key = { movie.id }
                onClick = {
                    () => navigate(`/movie/${movie.id}`)
                }
                style = {
                    { cursor: "pointer", textAlign: "center" }
                } >
                <
                img src = { movie.img }
                alt = { movie.title }
                /> <
                p > { movie.title } < /p> < /
                div >
            ))
        } <
        /div> < /
        div >
    );
}