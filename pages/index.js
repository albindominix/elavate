// Importing necessary components and hooks
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "./api/fakeStoreApi";
import { useContext, useEffect, useState } from "react";
import Display from "@/components/Display";
import { GlobalContext } from "@/context/context";
import Sidebar from "@/components/Sidebar";

// Home component - main page of the application
export default function Home() {
  // Accessing the 'search', 'setSearch', 'setCategory', and 'category' states from the global context using useContext hook.
  const { search, setSearch, setCategory, category } = useContext(GlobalContext);

  // State to store the fetched data from the API
  const [data, setData] = useState([]);

  // State to store the filtered products based on search query
  const [filtered, setFiltered] = useState([]);

  // Fetch product data from the API based on the selected category
  useEffect(() => {
    fetchData();
    setSearch(''); // Reset the search query when the category changes
  }, [category]);

  // Filter products based on search query whenever the search query or data changes
  useEffect(() => {
    performSearch();
  }, [search, data]);

  // Fetch data from the API based on the selected category
  const fetchData = async () => {
    let url = "https://fakestoreapi.com/products";
    if (category !== "all") {
      url = `https://fakestoreapi.com/products/category/${category}`;
    }
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
  };

  // Filter products based on the search query
  async function performSearch() {
    const filteredData = data.filter((item) => {
      if (search === "") {
        return item;
      } else if (item.title.toLowerCase().includes(search.toLowerCase())) {
        return item;
      }
    });
    setFiltered(filteredData);
  }

  return (
    <main className="">
      {/* Sidebar component for displaying category selection */}
      <Sidebar />
      <Wrapper>
        <div className="mt-8">
          {/* Display component to render the filtered products */}
          <Display products={filtered} />
        </div>
      </Wrapper>
    </main>
  );
}

// export async function getStaticProps() {
//   const products = await fetchDataFromApi();

//   return {
//       props: { products },
//   };
// }
