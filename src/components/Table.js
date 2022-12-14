import TableRow from "./TableRow";

function Table() {
  let peliculas = [
    {
      titulo: "Billy Elliot",
      duracion: "123",
      rating: "5",
      generos: ["Drama", "Comedia"],
      premios: "2",
    },
    {
      titulo: "Alicia en el pais de las maravillas",
      duracion: "142",
      rating: "4.8",
      generos: ["Drama", "Comedia", "Acción"],
      premios: "3",
    },
  ];

  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Titulo</th>
            <th scope="col">Duración</th>
            <th scope="col">Rating</th>
            <th scope="col">Genero</th>
            <th scope="col">Premios</th>
          </tr>
        </thead>
        <tbody>
          {peliculas.map((pelicula, index) => {
            return <TableRow {...pelicula} key={index} />;
          })}
        </tbody>
        <thead>
          <tr>
            <th scope="col">Titulo</th>
            <th scope="col">Duración</th>
            <th scope="col">Rating</th>
            <th scope="col">Genero</th>
            <th scope="col">Premios</th>
          </tr>
        </thead>
      </table>
    </>
  );
}

export default Table;
