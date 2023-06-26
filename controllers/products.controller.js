
import query from "../db/utils.js";

const findAll = async () => {
  return query("SELECT ProductID, Name, Price, CategoryID, OnSale, StockLevel FROM products");
};

const findOne = async (id) => {
  return query("SELECT ProductID, Name, Price, CategoryID, OnSale, StockLevel FROM products WHERE ProductID = ?", [
    id
  ]);
};

const addOne = async (products) => {
  return await query("INSERT INTO products SET ?", [products]);
}

const updateOne = async (id, products) => {
  return await query("UPDATE products SET ? WHERE ProductID = ?", [
    products,
     products.ProductID
    ]);
}

const removeOne = async (id) => {
  return await query("DELETE FROM products WHERE ProductID = ?", [id]);
}

export default {
  findAll,  
  findOne,
  addOne,
  updateOne,
  removeOne,
  }