type initialStateType = {
  theme: string;
  devs: {
    data: string[];
    page: number;
  };
};
const initialState: initialStateType = {
  theme: "dark",
  devs: { data: [], page: 0 },
};

export default initialState;
