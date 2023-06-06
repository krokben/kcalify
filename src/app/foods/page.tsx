import Food, { IFood } from "../components/Food";

const getFoods = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/foods`);
  if (!res.ok) {
    console.error(res);
  }
  return res.json();
};

const Foods = async () => {
  const foods: IFood[] = await getFoods();

  return (
    <>
      <h1>Foods</h1>
      <ul>
        {foods.map((food) => (
          <li key={food.id}>
            <Food {...food} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Foods;
