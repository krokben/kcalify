import Image from "next/image";
import { FC } from "react";

export interface IFood {
  id: number;
  name: string;
  kcal: number;
  grams: number;
  image: string;
}

const Food: FC<IFood> = ({ id, name, kcal, grams, image }) => (
  <div>
    <Image src={image} width={100} height={100} alt={name} />
    <div>{(grams / 100) * kcal}</div>
  </div>
);

export default Food;
