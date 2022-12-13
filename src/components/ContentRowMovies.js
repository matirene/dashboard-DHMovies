import Card from "./Card";

function ContentRowMovies() {
  let moviesInDB = {
    title: "Movies in Data Base",
    color: "primary",
    number: "21",
    icon: "clipboard-list",
  };

  let totalAwards = {
    title: " Total awards",
    color: "success",
    number: "79",
    icon: "award",
  };

  let actorsQuantity = {
    title: "Actors quantity",
    color: "warning",
    number: "49",
    icon: "user-check",
  };

  let cardProps = [moviesInDB, totalAwards, actorsQuantity];

  return (
    <div className="row">
      {cardProps.map((element, index) => {
        return <Card
          {...element} key={index}
        />
      })}
    </div>
  );
}

export default ContentRowMovies;
