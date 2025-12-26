function StepTwo({ values, errors, dispatch, onNext }) {
  const disabled = !values.username || !values.password;

  return (
    <>
      <h2>Step 2: Account Details</h2>

      <input
        type="text"
        placeholder="Username"
        value={values.username}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "username",
            value: e.target.value,
          })
        }
      />
      {errors.username && <div className="error">{errors.username}</div>}

      <input
        type="password"
        placeholder="Password"
        value={values.password}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "password",
            value: e.target.value,
          })
        }
      />
      {errors.password && <div className="error">{errors.password}</div>}

      <div className="buttons">
        <button
          className="secondary"
          onClick={() => dispatch({ type: "PREVIOUS_STEP" })}
        >
          Back
        </button>

        <button disabled={disabled} onClick={onNext}>
          Next
        </button>
      </div>
    </>
  );
}

export default StepTwo;
