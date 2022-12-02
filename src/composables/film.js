import { FilmService } from "../services/FilmService";

export function useFilm() {
     const getFilms = async () => {
          try {
               const { data } = await FilmService.getAll()
               return data;
          } catch (error) {
               console.log(error)
          }
     }

     const addFilm = async () => {
          const film = {
               checked: true,
               description: "description 1",
               favorite: true,
               img: "img 3",
               name: "TopGun",
               price: 20,
          }
          try {
               const { data } = await FilmService.addFilm(film)
               return data;
          } catch (error) {
               console.log(error)
          }
     }
     return {
          getFilms,
          addFilm
     }
}