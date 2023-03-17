import Link from "next/link";

const PlanetsList = ({
  data,
  page,
}: {
  data: Array<{
    name: string;
    id: string;
    page: num
  }>;
}) => {
  return (
    <div>
      <h1>Planets</h1>
      <ul>
        {data.map((planet) => (
          <li key={planet.id}>
            
            <Link href={`/planets/2`}>{planet.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanetsList;