import { useReducer } from "react";
import { reducer, initialState, validateStep } from "./reducer";

import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNext = () => {
    const errors = validateStep(state.step, state.values);

    if (Object.keys(errors).length > 0) {
      dispatch({ type: "SET_ERRORS", errors });
      return;
    }

    dispatch({ type: "SET_ERRORS", errors: {} });
    dispatch({ type: "NEXT_STEP" });
  };

  if (state.isSubmitted) {
    return (
      <div className="app-container success">
        <h2>Registration Successful ✅</h2>
        <button onClick={() => dispatch({ type: "RESET_FORM" })}>
          Register Again
        </button>
      </div>
    );
  }

  return (
    <div className="app-container">
      <h1>Multi-Step Registration</h1>
      <p className="progress">Step {state.step} / 3</p>

      {state.step === 1 && (
        <StepOne
          values={state.values}
          errors={state.errors}
          dispatch={dispatch}
          onNext={handleNext}
        />
      )}

      {state.step === 2 && (
        <StepTwo
          values={state.values}
          errors={state.errors}
          dispatch={dispatch}
          onNext={handleNext}
        />
      )}

      {state.step === 3 && (
        <StepThree values={state.values} dispatch={dispatch} />
      )}
    </div>
  );
}

export default App;

