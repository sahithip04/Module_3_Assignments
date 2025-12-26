function StepOne({ values, errors, dispatch, onNext }) {
  const isDisabled = !values.name || !values.email;

  return (
    <div>
      <h2>Step 1: Personal Details</h2>

      <input
        placeholder="Name"
        value={values.name}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "name",
            value: e.target.value,
          })
        }
      />
      {errors.name && <div className="error">{errors.name}</div>}

      <input
        placeholder="Email"
        value={values.email}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            field: "email",
            value: e.target.value,
          })
        }
      />
      {errors.email && <div className="error">{errors.email}</div>}

      <div className="buttons">
        <button disabled={isDisabled} onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default StepOne;
