const Pizza = ({ menu }) => {
  //   console.log(props);
  //   const { menu } = props;
  console.log(menu);

  const pizzaList = menu.map((menu, index) => {
    return (
      <div className="pizza" key={index}>
        <h1>{menu.name}</h1>
        <p>{menu.description}</p>
      </div>
    );
  });

  return <>{pizzaList}</>;
};

export default Pizza;
