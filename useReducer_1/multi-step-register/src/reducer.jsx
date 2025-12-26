export const initialState = {
  step: 1,
  values: {
    name: "",
    email: "",
    username: "",
    password: "",
  },
  errors: {},
  isSubmitted: false,
};

export function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        values: {
          ...state.values,
          [action.field]: action.value,
        },
      };

    case "SET_ERRORS":
      return {
        ...state,
        errors: action.errors,
      };

    case "NEXT_STEP":
      return {
        ...state,
        step: state.step + 1,
      };

    case "PREVIOUS_STEP":
      return {
        ...state,
        step: state.step - 1,
      };

    case "SUBMIT_FORM":
      return {
        ...state,
        isSubmitted: true,
      };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
}

export function validateStep(step, values) {
  const errors = {};

  if (step === 1) {
    if (!values.name) errors.name = "Name is required";
    if (!values.email) errors.email = "Email is required";
  }

  if (step === 2) {
    if (!values.username) errors.username = "Username is required";
    if (!values.password) errors.password = "Password is required";
  }

  return errors;
}
