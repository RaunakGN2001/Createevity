import { Box, Text } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Tabbar from "../components/Tabbar";
import { fetchCategories } from "../http";


export async function getServerSideProps(context) {

  const {data} = await fetchCategories();

  // console.log(data.data);

  return {
    props: {
      categories: {
        items: data.data,
      }
    }
  }
}


export default function Home({categories}) {
  return (
    <div>
      <Navbar />
      <Tabbar categoriesArray={categories.items}/>
      {/* <Box>
        {categories.items.map((category) => <span key={category.id}>{category.attributes.Title}</span>)}
      </Box> */}
      <Footer />
    </div>
  )
}
