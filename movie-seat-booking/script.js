window.onload = function () {
    const container = document.querySelector('.container');
    const seats = document.querySelectorAll('.row .seat:not(.occupied)');

    let count = document.getElementById('count');
    let total = document.getElementById('total');
    const movieSelect = document.getElementById('movie');

    let ticketPrice = +movieSelect.value; // + changes it to an integer (short version)

    // movie select event
    movieSelect.addEventListener('change', e => {
        ticketPrice = +e.target.value;
        updateSelectedCount();
    });

    // seat click event
    container.addEventListener('click', (e) => {
        // check to see what is clicked on contains the class seat and doesnt contain the class occupied
        if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
            // toggle used to change between unselected and selected seats
            e.target.classList.toggle('selected');

            updateSelectedCount();
        }
    });

    //update total and count
    function updateSelectedCount() {
        const selectedSeats = document.querySelectorAll('.row .seat.selected');

        let selectedSeatsCount = selectedSeats.length;

        count.textContent = selectedSeatsCount;
        total.textContent = selectedSeatsCount * ticketPrice;
    }
}