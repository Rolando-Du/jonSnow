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

    if (filterValue === 'accessories') {
      const filteredProducts = products.filter(item => item.category === 'accessories')

      setProductsData(filteredProducts);
    }

    if (filterValue === 'sky') {
      const filteredProducts = products.filter(item => item.category === 'sky')

      setProductsData(filteredProducts);
    }

    if (filterValue === 'pants') {
      const filteredProducts = products.filter(item => item.category === 'pants')

      setProductsData(filteredProducts);
    }

    if (filterValue === 'glove') {
      const filteredProducts = products.filter(item => item.category === 'glove')

      setProductsData(filteredProducts);
    }

    if (filterValue === 'jacket') {
      const filteredProducts = products.filter(item => item.category === 'jacket')

      setProductsData(filteredProducts);
    }

    if (filterValue === 'glasses') {
      const filteredProducts = products.filter(item => item.category === 'glasses')

      setProductsData(filteredProducts);
    }

    if (filterValue === 'shoes') {
      const filteredProducts = products.filter(item => item.category === 'shoes')

      setProductsData(filteredProducts);
    }

    if (filterValue === 'helmet') {
      const filteredProducts = products.filter(item => item.category === 'helmet')

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
          <Row className='row-filter'>
            <Col lg='3' md='6'>
              <div className="filter_widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="accessories">Accessories</option>
                  <option value="shoes">Shoes</option>
                  <option value="jacket">jackets</option>
                  <option value="helmet">Helmet</option>
                  <option value="glasses">Glasses</option>
                  <option value="glove">Glove</option>
                  <option value="pants">Pants</option>
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