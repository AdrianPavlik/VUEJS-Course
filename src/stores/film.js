import { defineStore } from "pinia"

export const useFilmStore = defineStore({
     id: "film",
     state: () => ({
          chosenFilms: [],
     }),
     actions: {
          addFilmToStore(film) {
               this.chosenFilms.push(film)
          },
          removeFilmFromStore(film) {
               const targetIndex = this.chosenFilms.findIndex((obj) => obj.id === film.id)
               this.chosenFilms.splice(targetIndex, 1)
          }
     },
     getters: {
          getChosenFilmsLength(state) {
               return state.chosenFilms.length;
          },
          getFilmById: (state) => (id) => {
               const foundFilm = state.chosenFilms.find((film) => film.id === id);
               return foundFilm || "Not found";
          }
     }
}) 