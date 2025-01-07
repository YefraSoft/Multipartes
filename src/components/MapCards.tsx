import { cardHeaderData } from "../assets/staticObjets.ts";
import CardButton from "../components/Card-button";

export default function MapCards() {
  return (
    <>
      {cardHeaderData.map((data, index) => (
        <CardButton key={index} {...data} />
      ))}
    </>
  );
}
