import React from "react";
import "./OfferRide.css";

export default function OfferRide() {
  return (
    <div className="OfferRide">
      <form className="border">
        <h3 className="border text-start ">Details</h3>
        <div className="row">
          <div className="col-3">
            <div className="text-end">Price Per Seat</div>
            <div className="text-end">
              <a href="/">More Info</a>
            </div>
          </div>
          <div className="col-9">
            <div>
              <input placeholder="Panaji→Ponda" className="w-100 p-2" />
            </div>
            <div>
              <p className="secondary-text">
                We suggest a price based on the distance of your trip adn what
                day of the week you are travelling. You are free to adjust the
                price.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-3 text-end">Seats</div>
          <div className="col-9">
            <input placeholder="3" className="w-100 p-2" />
          </div>
        </div>

        <div className="row">
          <div className="col-3 text-end">Luggage</div>
          <div className="col-9">
            <input
              placeholder="Medium - eg. weekend bag"
              className="w-100 p-2"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-3 text-end">Prefrences</div>
          <div className="col-9">
            <div className="row">
              <div className="col-6">
                <input type="checkbox" />
                Music
              </div>
              <div className="col-6">
                <input type="checkbox" />
                Smoking
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <input type="checkbox" />
                Animals
              </div>
              <div className="col-6">
                <input type="checkbox" />
                Children
              </div>
            </div>
          </div>
        </div>
      </form>

      <form className="border ">
        <div className="row mt-3">
          <div className="col-3">Instant Booking</div>
          <div className="col-9 d-flex">
            <input type="checkbox" className="m-2" />
            <p>
              Allow instant booking.
              <br />
              linket passengers book without waiting for your confirmation.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-3">Comfort</div>
          <div className="col-9 d-flex ">
            <input type="checkbox" className="m-2" />
            <p>
              Max. two people in the back seat. <br />
              Guarantee a maximum of 2 people in the back seat. Preffered by
              Passengers.
            </p>
          </div>
        </div>
      </form>

      <form className="border">
        <div className="row mt-3">
          <div className="col-3">Comments</div>
          <div className="col-9">
            <div className="row">
              <input
                className="w-100 p-2"
                placeholder="Provide relevant information about your car that might help passengers."
              />
            </div>

            <div className="row">
              {" "}
              <p>
                Do not enter any contact details in this field. They will be
                shared once passenger's bookings confirmed.
              </p>
            </div>
          </div>
        </div>
        <div className="border d-flex">
          <input type="checkbox" className="pt-3 m-3" />
          <p>
            When you share a ride, we handle the payments on your behalf. To
            continue to do this, we need you to accept our{" "}
            <a href="/">Payment faciliator agreement</a>
          </p>
        </div>
        <div className="row d-flex justify-content-between align-items-center m-1">
          <div className="col-auto">
            <button className="btn btn-primary">Back</button>
          </div>
          <div className="col-auto">
            <button className="btn btn-primary">Create Ride</button>
          </div>
        </div>
      </form>
    </div>
  );
}
