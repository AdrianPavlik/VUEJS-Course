import { HttpClient } from "./HttpClient";

export const FilmService = {
     async getAll() {
          return await HttpClient.get("/api/films")
     },
     async addFilm(object) {
          return await HttpClient.post("/api/films", object)
     }
}