import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/users", () => {
    return HttpResponse.json([
      {
        name: "bruce wayne",
      },
      {
        name: "Clark Kent",
      },
      {
        name: "Princess Diana",
      },
    ]);
  }),
];
