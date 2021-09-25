export const initialState = {
  showModal: false,
  error: false,
  errorMessage: '',
};

const modalReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_MODAL_ERROR':
      return {
        showModal: true,
        error: true,
        errorMessage: action.payload,
      };
    case 'SHOW_MODAL_SUCCESS':
      return {
        showModal: true,
        error: false,
        errorMessage: '',
      };
    case 'CLOSE_MODAL':
      return {
        showModal: false,
        error: false,
        errorMessage: '',
      };
    default:
      return state;
  }
};

export default modalReducer;
