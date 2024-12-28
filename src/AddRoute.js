import React from "react";
import "./AddRoute.css";

export default function AddRoute() {
  return (
    <div className="AddRoute border">
      <h3>Route</h3>
      <hr />
      <form>
        <div>
          <div className="d-flex">
            <span className="flex-fill">Where From</span>{" "}
            <input
              className="flex-fill p-2 mb-2"
              placeholder="Enter an address or location.."
            />
          </div>
          <div className="d-flex">
            <span className="flex-fill">Where to</span>{" "}
            <input
              className="flex-fill p-2 mb-2"
              placeholder="Enter an address or location.."
            />
          </div>
          <div>
            <button className="btn btn-outline-secondary">
              <i class="fa-solid fa-circle-plus me-2"></i>Add via Point
            </button>
          </div>
        </div>
      </form>
      <form>
        <div>
          <div className="d-flex">
            <span className="flex-fill">Allow Partial Routes</span>{" "}
            <input type="checkbox" />
            <div className="info">
              <p>
                Suggest aternative pick-up or drop-pff points along the route.
                They can also suggest a different price.
              </p>
            </div>
          </div>

          <div className="d-flex">
            <span className="flex-fill">Detour Possibiltiy</span>{" "}
            <input
              className="flex-fill"
              placeholder="Max 5 minnutes from my route"
            />
          </div>
          <div className="info">
            <p>
              Let passengers know how far you'r willing to deviate from your
              route to pick them up or drom them off.
            </p>
          </div>
        </div>
      </form>

      <button className="btn btn-primary">Next</button>
    </div>
  );
}
