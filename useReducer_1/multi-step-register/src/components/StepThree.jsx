function StepThree({ values, dispatch }) {
  return (
    <>
      <h2>Step 3: Review & Submit</h2>

      <p><strong>Name:</strong> {values.name}</p>
      <p><strong>Email:</strong> {values.email}</p>
      <p><strong>Username:</strong> {values.username}</p>

      <div className="buttons">
        <button
          className="secondary"
          onClick={() => dispatch({ type: "PREVIOUS_STEP" })}
        >
          Back
        </button>

        <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>
          Submit
        </button>
      </div>
    </>
  );
}

export default StepThree;

