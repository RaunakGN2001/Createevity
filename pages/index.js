import { Box, Text } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Tabbar from "../components/Tabbar";
import { fetchCategories } from "../http";


export async function getServerSideProps(context) {

  // fetch articles
  // const 


  // fetch categories
  const { categoryData } = await fetchCategories();

  // console.log(data.data);

  return {
    props: {
      categories: {
        items: categoryData.data,
      }
    }
  }
}


export default function Home({categories}) {
  return (
    <div>
      <Tabbar categoriesArray={categories.items}/>
    </div>
  )
}
