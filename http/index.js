import axios from 'axios'

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_API_KEY}`
    },
});

// fetch Categories

export const fetchCategories = async () => api.get('/api/categories');



// fetch Articles

export const fetchArticles = async (queryString) => api.get(`/api/articles?${queryString}`);



// for fetching single article
export const fetchArticleBySlug = async (queryString) => api.get(`/api/articles?${queryString}`);