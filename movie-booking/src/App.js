import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Booking from "./pages/Booking";
import Success from "./pages/Success";

export default function App() {
    return ( <
        BrowserRouter >
        <
        Routes >
        <
        Route path = "/"
        element = { < Movies / > }
        /> <
        Route path = "/movie/:id"
        element = { < MovieDetails / > }
        /> <
        Route path = "/booking"
        element = { < Booking / > }
        /> <
        Route path = "/success"
        element = { < Success / > }
        /> < /
        Routes > <
        /BrowserRouter>
    );
}