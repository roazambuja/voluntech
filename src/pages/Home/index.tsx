import { useState } from "react";
import { Filters, SearchInput, Search as SearchArea, FilterButton } from "./styles";
import { Search } from "react-feather";

function Home(): JSX.Element {
  const [search, setSearch] = useState<string>();
  const [filter, setFilter] = useState<
    "all" | "projects" | "organizations" | "volunteering" | "city"
  >("all");

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(search);
  }

  return (
    <>
      <SearchArea onSubmit={handleSearch}>
        <Search />
        <SearchInput
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          list={filter === "volunteering" ? "categories" : ""}
          placeholder="Buscar"
        />
      </SearchArea>
      <datalist id="categories">
        <option value="Apoio psicológico">Apoio psicológico</option>
        <option value="Aulas">Aulas</option>
        <option value="Comunicação">Comunicação</option>
        <option value="Cozinha">Cozinha</option>
        <option value="Cuidados médicos">Cuidados médicos</option>
        <option value="Distribuição de materiais">Distribuição de materiais</option>
        <option value="Doação financeira">Doação financeira</option>
        <option value="Entretenimento">Entretenimento</option>
        <option value="Lar Temporário">Lar Temporário</option>
        <option value="Limpeza">Limpeza</option>
        <option value="Logística">Logística</option>
        <option value="Trabalho Manual">Trabalho Manual</option>
        <option value="Transporte">Transporte</option>
        <option value="Triagem de doações">Triagem de doações</option>
        <option value="Veterinário">Veterinário</option>
      </datalist>
      <Filters>
        <FilterButton selected={filter === "projects"} onClick={() => setFilter("projects")}>
          Projetos
        </FilterButton>
        <FilterButton
          selected={filter === "organizations"}
          onClick={() => setFilter("organizations")}
        >
          Organizações
        </FilterButton>
        <FilterButton selected={filter === "city"} onClick={() => setFilter("city")}>
          Cidade
        </FilterButton>
        <FilterButton
          selected={filter === "volunteering"}
          onClick={() => setFilter("volunteering")}
        >
          Voluntariado
        </FilterButton>
      </Filters>
    </>
  );
}

export default Home;
