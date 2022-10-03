import { Box, Text } from "@chakra-ui/react";
import ArticleList from "../components/ArticleList";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Tabbar from "../components/Tabbar";
import { fetchArticles, fetchCategories } from "../http";


export async function getServerSideProps(context) {


  const options = {
    populate: ['author.avatar'],
    sort: ['id:desc'],
  };

  // fetch articles
  const dataArticle = await fetchArticles();


  // fetch categories
  const dataCategory = await fetchCategories();

  // console.log(dataCategory.data.data);

  console.log(dataArticle.data.data);

  return {
    props: {
      categories: {
        items: dataCategory.data.data
      },

      articles: {
        items: dataArticle.data.data,
        pagination: dataArticle.data.meta.pagination,
      }
    }
  }
}


export default function Home({categories, articles}) {
  return (
    <div>
      <Tabbar categoriesArray={categories.items}/>
      <ArticleList articlesArray={articles.items} />
    </div>
  )
}
