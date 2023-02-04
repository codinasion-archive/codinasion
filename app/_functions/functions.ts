export async function fetchData(url: string): Promise<any> {
  const fetchData = await fetch(url);
  const res = await fetchData.json();
  return fetchData.status === 200 ? res : [];
}
export const dateFun = (date: string) => {
  const newDate = new Date(date);
  return newDate.toDateString();
};
export const imgUrl: string = `https://images.unsplash.com/photo-1605557833955-43b5db995535?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1926&q=80`;

export default function setThemeFun(dispatch: any) {
  switch (localStorage.getItem("theme")) {
    case null || "light":
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      dispatch({ type: "THEME", payload: "dark" });
      break;
    default:
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      dispatch({ type: "THEME", payload: "light" });
      break;
  }
}
