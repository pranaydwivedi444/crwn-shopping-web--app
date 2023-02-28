import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import SHOP_DATA from "../shop-data.js";
import {
  addCollectionAndDocuments,
  getCategoriesandDocuments,
} from "../utility/firebase/firebase.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});
export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setcategoriesMap] = useState({});
  //collecting back data of shop from data base
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesandDocuments();
      console.log(categoryMap);
      setcategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);
  //uploading data of shop
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
