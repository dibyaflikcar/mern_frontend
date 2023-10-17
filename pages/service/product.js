import axios from "axios";

const API = axios.create({
    baseURL: process.env.apiUrl,
    // baseURL: "https://dummyjson.com",
  });
  
//   API.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     let token = localStorage.getItem("token");
//     config.headers["Authorization"] = "Bearer " + token;
//     return config;
//   });
  
  const productapi = {};

  productapi.getproductDetails = async (id) => {
    try {
      const res = API.get('/products/'+id);
      return res;
    } catch (error) {
      return error.response;
    }
  };

  productapi.getcategoryProduct = async (id) => {
    try {
      const res = API.get('/products/category/'+id);
      return res;
    } catch (error) {
      return error.response;
    }
  };

  

  productapi.getProducts = async () => {
    try {
      const res = API.get('/products');
      return res;
    } catch (error) {
      return error.response;
    }
  };

  productapi.getCategories = async () => {
    try {
      const res = API.get('/products/categories');
      return res;
    } catch (error) {
      return error.response;
    }
  };

  


  export { productapi };