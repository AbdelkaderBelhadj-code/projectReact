import axios from 'axios'
const url = "http://localhost:3000/products"


export function getProducts(){
    return axios.get(url);
}
export async function addProduct(product){return await axios.post(url,product)}
export async function updateProducts(id,product){return await axios.put(`${url}/${id}`,product)}
export async function deleteProduct(id){return await axios.delete(`${url}/${id}`)}