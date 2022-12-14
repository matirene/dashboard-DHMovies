function TableRow(props) {
  return (
    <tr>
      <td>{props.titulo}</td>
      <td>{props.duracion}</td>
      <td>{props.rating}</td>
      <td>
        {props.generos.map((genero, index) => {
          return <li key={index}>{genero}</li>;
        })}
      </td>
      <td>{props.premios}</td>
    </tr>
  );
}

export default TableRow;
