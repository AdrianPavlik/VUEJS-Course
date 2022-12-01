import { HttpClient } from "./HttpClient";

export const FilmService = {
     async getAll() {
          return await HttpClient.get("/api/films")
     }
}