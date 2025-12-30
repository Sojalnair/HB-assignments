export default function Success() {
    const data = JSON.parse(localStorage.getItem("booking"));
    const bookingId = "BK" + Math.floor(Math.random() * 100000);

    return ( <
        div >
        <
        h2 > Seat Booked Successfully🎉 < /h2>

        <
        p > < b > Booking ID: < /b> {bookingId}</p >
        <
        p > < b > Name: < /b> {data.name}</p >
        <
        p > < b > Email: < /b> {data.email}</p >
        <
        p > < b > Mobile: < /b> {data.mobile}</p >
        <
        /div>
    );
}