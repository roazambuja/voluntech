import { useState } from "react";
import { SearchInput, Search as SearchArea, ChangePage, ChangePageButton } from "./styles";
import { ChevronLeft, ChevronRight, Search } from "react-feather";
import { searchAll, SearchInterface } from "../../services/search";
import { Loader } from "../../components/Loader";
import { Text } from "../../styles/global";
import { Datalist } from "./datalist";
import SearchResults from "./SearchResults";

function Home(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const [search, setSearch] = useState<string>("");
  const [searchResponse, setSearchResponse] = useState<SearchInterface>();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [itemsPerPage] = useState<number>(10);

  async function handleSearch(page: number = 1) {
    try {
      setLoading(true);
      let response = await searchAll(`${search}&page=${page}&limit=${itemsPerPage}`);
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
      ) : (
        searchResponse && (
          <>
            <SearchResults data={searchResponse} />
            <ChangePage>
              <ChangePageButton
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft />
                Anterior
              </ChangePageButton>
              <span>
                {currentPage} / {totalPages}
              </span>
              <ChangePageButton
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Próxima
                <ChevronRight />
              </ChangePageButton>
            </ChangePage>
          </>
        )
      )}
    </>
  );
}

export default Home;
