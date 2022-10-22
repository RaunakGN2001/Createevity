import { Box, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { Router, useRouter } from 'next/router';
import qs from 'qs';

import React from 'react'
import ArticleList from '../../components/ArticleList';
import Tabbar from '../../components/Tabbar';
import { fetchArticles, fetchCategories } from '../../http';

const Category = ({categories, articles, slug}) => {  

  const formattedCategory = () => {

    
    var slugMod = slug[0].toUpperCase() + slug.slice(1,slug.length);
    // console.log(slugMod);
    for(let i = 0; i < slugMod.length; i++) {
      if(slugMod[i] == '-') slugMod[i] = ' ';
    }

    return slugMod;
  };


  return (
    <>
      <Head>
        <title>Createevity {formattedCategory()} </title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Tabbar categoriesArray={categories.items}/>
      <ArticleList articlesArray={articles.items} />
    </>
  )
}

export async function getServerSideProps({query}) {


  const options = {
    populate: ['author.avatar'],
    sort: ['id:desc'],
    filters: {
      category: {
        slug: query.category,
      },
    }
  };


  const queryString = qs.stringify(options);

  const dataArticle = await fetchArticles(queryString);


  const dataCategory = await fetchCategories();

  return {
    props: {
      categories: {
        items: dataCategory.data.data,
        pagination: dataCategory.data.meta.pagination
      },
      articles : {
        items: dataArticle.data.data,
        pagination: dataArticle.data.meta.pagination,
      },

      slug: query.category,
      
    }
  }

}

export default Category


