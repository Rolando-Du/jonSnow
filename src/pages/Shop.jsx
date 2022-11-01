import React, { useState } from 'react';

import CommonSection from "../components/UI/CommonSection";
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';

import '../styles/shop.css';

import products from '../assets/data/products';
import ProductsList from '../components/UI/ProductsList';


const Shop = () => {

  const [productsData, setProductsData] = useState(products)

  const handleFilter = e => {

    const filterValue = e.target.value
    if (filterValue === 'snowboard') {
      const filteredProducts = products.filter(item => item.category === 'snowboard')

      setProductsData(filteredProducts);
    }

    if (filterValue === 'accesorio') {
      const filteredProducts = products.filter(item => item.category === 'accesorio')

      setProductsData(filteredProducts);
    }

    if (filterValue === 'sky') {
      const filteredProducts = products.filter(item => item.category === 'sky')

      setProductsData(filteredProducts);
    }

    if (filterValue === 'pantalon') {
      const filteredProducts = products.filter(item => item.category === 'pantalon')

      setProductsData(filteredProducts);
    }

    if (filterValue === 'guante') {
      const filteredProducts = products.filter(item => item.category === 'guante')

      setProductsData(filteredProducts);
    }

    if (filterValue === 'campera') {
      const filteredProducts = products.filter(item => item.category === 'campera')

      setProductsData(filteredProducts);
    }

    if (filterValue === 'gafa') {
      const filteredProducts = products.filter(item => item.category === 'gafa')

      setProductsData(filteredProducts);
    }

    if (filterValue === 'bota') {
      const filteredProducts = products.filter(item => item.category === 'bota')

      setProductsData(filteredProducts);
    }

    if (filterValue === 'casco') {
      const filteredProducts = products.filter(item => item.category === 'casco')

      setProductsData(filteredProducts);
    }
  };

  const handleSearch = e => {
    const searchTerm = e.target.value

    const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
    setProductsData(searchedProducts)
  }

  return (
    <Helmet title='Shop'>
      <CommonSection title='Products' />

      <section>
        <Container>
          <Row>
            <Col lg='3' md='6'>
              <div className="filter_widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="accesorio">Accesorios</option>
                  <option value="bota">Botas</option>
                  <option value="campera">Camperas</option>
                  <option value="casco">Cascos</option>
                  <option value="gafa">Gafas</option>
                  <option value="guante">Guantes</option>
                  <option value="pantalon">Pantalones</option>
                  <option value="sky">Sky</option>
                  <option value="snowboard">Snowboard</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='6' className='text-end'>
              <div className="filter_widget">
                <select>
                  <option>Sort By</option>
                  <option value="asecending">Asecending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg='6' md='12'>
              <div className="search_box">
                <input type="text" placeholder="Search....." onChange=
                  {handleSearch} />
                <span><i className="ri-search-line"></i></span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            {
              productsData.length === 0 ?
                <h1 className='text-center fs-4'>No products are found!</h1>
                : <ProductsList data={productsData} />
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;