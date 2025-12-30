import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Booking() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        email: "",
        mobile: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("booking", JSON.stringify(form));
        navigate("/success");
    };

    return ( <
        form onSubmit = { handleSubmit } >
        <
        h2 > Book Your Seat < /h2>

        <
        input placeholder = "Name"
        required onChange = { e => setForm({...form, name: e.target.value }) }
        /><br / > < br / >

        <
        input type = "email"
        placeholder = "Email"
        required onChange = { e => setForm({...form, email: e.target.value }) }
        /><br / > < br / >

        <
        input placeholder = "Mobile"
        required onChange = { e => setForm({...form, mobile: e.target.value }) }
        /><br / > < br / >

        <
        button type = "submit" > Submit < /button> <
        /form>
    );
}