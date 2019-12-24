import React from 'react'

const Reservation = () => {
    return (
        <section id="reservation" className="reservation">
        <div className="container text-center header">
        <h2>Make a Reservation</h2>
        </div>
        <div className="row">
            <div className="form-holder col-lg-10 mx-auto text-center">
            
            <form id="reservation-form" method="get" action="#">

            <div className="row justify-content-center reservation">
            <label for="name" className="col-md-6 unique"> Name 
                <input id="name" name="name" type="text" ></input></label>
                <label for="email" className="col-md-6 unique">Email
                <input id="email" name="email" type="email" ></input></label>
                <label for="number" className="col-md-6 unique">Contact Number
                <input id="number" name="number" type="text" ></input></label>
                <label for="people" className="col-md-6 unique">How many People?
                <input id="people" name="people" type="number" min="1" required=""></input></label>
                <label for="date" className="col-md-6 unique">Date 
                <input id="date" name="date" type="text" data-language="en" ></input></label>
                <label for="time" className="col-md-6 unique">Time 
                <input id="time" name="time" type="text" ></input></label>
                <label for="request" className="col-md-12 unique">Special Requests 
                <textarea id="request" className="unique" name="request"></textarea></label>
                <div className="col-lg-12 text-center">
                <div class="col-md-12">
                <button type="submit" className="btn-unique">Reserve my table</button>
                </div>
            </div>
        </div>

            </form>

            </div>
        </div>
        </section>
            
    )
}

export default Reservation