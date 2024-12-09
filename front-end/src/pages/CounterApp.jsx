import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../reduxtoolkit/TodoSlice";

function CounterApp() {
  const showResult = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <>
      <div
        className="container-fluid text-center justify-content-center align-items-center d-flex "
        style={{ height: "90vh" }}
      >
        <div className="shadow bg-white px-5 py-5 card  ">
          <h1>Counter App</h1>
          <div className="row mt-4 d-flex justify-content-center align-items-center ">
            <div className="col-md-4">
              <button
                onClick={() => dispatch(increment())}
                type="button"
                class="btn btn-outline-success"
                aria-label="Close"
              >
                Increment +
              </button>
            </div>
            <div className="col-md-4">{showResult}</div>
            <div className="col-md-4">
              <button
                onClick={() => dispatch(decrement())}
                type="button"
                class="btn btn-outline-danger"
                disabled={showResult == 0}
              >
                Decrement -
              </button>
            </div>
          </div>
          <div className="text-center mt-4">
            <button
              onClick={() => dispatch(reset())}
              className="btn btn-outline-dark"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CounterApp;
