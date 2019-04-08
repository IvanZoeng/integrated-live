import axios from 'axios'

let instance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 3000,
})

export async function getAllCategories() {
  let info = await instance.get('categories');
  return info.data;
}

export async function getCategory(category) {
  let info = await instance.get(`category/${category}`)
  return info.data;
}



