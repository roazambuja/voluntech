import volunteering from "../../components/VolunteeringCard/volunteering";
import { causes } from "../SignUp/Organization";

function Datalist(): JSX.Element {
  const volunteeringCategories = volunteering.map((v) => v.category);
  const fullList = Array.from(new Set([...causes, ...volunteeringCategories])).sort();

  return (
    <datalist id="categories">
      {fullList.map((item, key) => (
        <option key={key} value={item}>
          {item}
        </option>
      ))}
    </datalist>
  );
}

export { Datalist };
