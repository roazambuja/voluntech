import { useEffect, useState } from "react";
import { SearchInput, Search as SearchArea } from "./styles";
import { Search } from "react-feather";
import { searchAll, SearchInterface } from "../../services/search";
import { Loader } from "../../components/Loader";
import { Text } from "../../styles/global";
import { Datalist } from "./datalist";
import SearchResults from "./SearchResults";
import { getFollowedUpdates, UpdatesInterface } from "../../services/updates";
import ProjectCard from "./FeedCard";
import { PaginationButtons } from "../../components/PaginationButtons";

function Home(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const [search, setSearch] = useState<string>("");
  const [searchResponse, setSearchResponse] = useState<SearchInterface>();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const [updates, setUpdates] = useState<UpdatesInterface[]>();
  const [updatesPage, setUpdatesPage] = useState<number>(1);
  const [updatesTotalPages, setUpdatesTotalPages] = useState<number>(1);

  async function handleSearch(page: number = 1) {
    try {
      setLoading(true);
      let response = await searchAll(`${search}&page=${page}&limit=10`);
      const { data, pagination } = response.data;
      setSearchResponse(data);
      setTotalPages(pagination.totalPages);
    } catch (error: any) {
      setErrorMessage("Ocorreu um erro ao realizar a busca.");
    } finally {
      setLoading(false);
    }
  }

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
      handleSearch(newPage);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCurrentPage(1);
    handleSearch();
  };

  const handleUpdatesPageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= updatesTotalPages) {
      setUpdatesPage(newPage);
      getUpdates(newPage);
    }
  };

  async function getUpdates(page: number = 1) {
    try {
      setLoading(true);
      const response = await getFollowedUpdates(page, 20);
      const { data, pagination } = response.data;
      setUpdates(data);
      setUpdatesTotalPages(pagination.totalPages);
    } catch (error: any) {
      setErrorMessage("Ocorreu um erro ao buscar as atualizações.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUpdates();
  }, []);

  return (
    <>
      <SearchArea onSubmit={handleSubmit}>
        <Search />
        <SearchInput
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          list="categories"
          placeholder="Buscar"
        />
      </SearchArea>
      <Datalist />

      {loading ? (
        <Loader />
      ) : errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : searchResponse ? (
        <>
          <SearchResults data={searchResponse} />
          <PaginationButtons
            current={currentPage}
            total={totalPages}
            forwardFunction={() => handlePageChange(currentPage + 1)}
            backFunction={() => handlePageChange(currentPage - 1)}
          />
        </>
      ) : (
        updates &&
        (updates.length === 0 ? (
          <Text>Ainda não existem atualizações para serem exibidas!</Text>
        ) : (
          <>
            {updates.map((item: UpdatesInterface, key) => (
              <ProjectCard key={key} data={item} />
            ))}
            <PaginationButtons
              current={updatesPage}
              total={updatesTotalPages}
              forwardFunction={() => handleUpdatesPageChange(updatesPage + 1)}
              backFunction={() => handleUpdatesPageChange(updatesPage - 1)}
            />
          </>
        ))
      )}
    </>
  );
}

export default Home;
