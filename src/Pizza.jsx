const Pizza = ({ menu }) => {
  //   console.log(props);
  //   const { menu } = props;
  console.log(menu);
  return (
    <div className="pizza" key={menu.key}>
      <h1>{menu.name}</h1>
      <p>{menu.description}</p>
      <img src={menu.image} alt={menu.name} />
    </div>
  );

  // const pizzaList = menu.map((menu, index) => {
  //   return (
  //     <div className="pizza" key={index}>
  //       <h1>{menu.name}</h1>
  //       <p>{menu.description}</p>
  //       <img src={menu.img}></img>
  //     </div>
  //   );
  // });

  // return <>{pizzaList}</>;
};

export default Pizza;
