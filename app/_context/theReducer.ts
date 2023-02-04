type actionType = {
  type: string;
  payload: any;
};

const reducer = (state: any, action: actionType) => {
  switch (action.type) {
    case "THEME":
      return { ...state, theme: action.payload };
    case "DEVS":
      // console.log(state.devs, action.payload, "layout ", action.payload.page);
      return {
        ...state,
        devs: {
          data: [...state.devs.data, ...action.payload.data],
          page: action.payload.page,
          call: action.payload.call,
        },
      };
    default:
      return state;
  }
};
export default reducer