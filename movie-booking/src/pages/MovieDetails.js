import { useParams, useNavigate } from "react-router-dom";
import movies from "../data/movies";

export default function MovieDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const movie = movies.find(m => m.id === Number(id));

    return ( <
        div >
        <
        h2 > { movie.title } < /h2> <
        p > Genre: Action < /p> <
        p > Duration: 2 h 30 m < /p>

        <
        button onClick = {
            () => navigate("/booking") } >
        Book Seat <
        /button> <
        /div>
    );
}