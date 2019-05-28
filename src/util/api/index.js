import axios from 'axios'

let instance = axios.create({
  baseURL: process.env.NODE_ENV !== 'production' ? 'http://localhost:3000/' : 'http://106.14.120.30:3000/',
  timeout: 10000,
})

export async function getAllCategories() {
  let info = await instance.get('categories');
  return info.data;
}

export async function getCategory(category) {
  let info = await instance.get(`category/${category}`)
  return info.data;
}



