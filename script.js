'use strict';

const bookings = [];

const createBooking = function (flightNum,
    numPassengers=0,price=0) {
    const booking = {
        flightNum,
        numPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
};

createBooking("123");