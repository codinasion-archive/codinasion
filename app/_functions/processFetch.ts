import { fetchData } from "./functions";

export async function fetchDaves(devs: any, dispatch: any) {
  const url: string = `https://api.github.com/repos/codinasion/program/contributors?page=${
    devs.page + 1
  }`;
  const data = await fetchData(url);
  dispatch({
    type: "DEVS",
    payload: {
      data,
      page: devs.page + 1,
    },
  });
  // console.log("function call", devs);
}