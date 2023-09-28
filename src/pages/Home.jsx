import { useState, useEffect } from 'react';

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from '../assets/data/products';

import Helmet from "../components/Helmet/Helmet";
import '../styles/home.css';

import { Container, Row, Col } from "reactstrap";
import sambuchitoImg from '../assets/images/banner-1.png';

import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";

import counterImg from '../assets/images/banner.png';

import Clock from '../components/UI/Clock';


const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [accesorioProducts, setAccesorioProducts] = useState([]);
  const [guanteProducts, setGuanteProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);



  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === 'casco'
    );

    const filteredBestSalesProducts = products.filter(
      (item) => item.category === 'campera'
    );


    const filteredAccesorioProducts = products.filter(
      (item) => item.category === 'accesorio'
    );

    const filteredGuanteProducts = products.filter(
      (item) => item.category === 'guante'
    );

    const filteredPopularProducts = products.filter(
      (item) => item.category === 'snowboard'
    );


    setTrendingProducts(filteredTrendingProducts)
    setBestSalesProducts(filteredBestSalesProducts)
    setAccesorioProducts(filteredAccesorioProducts)
    setGuanteProducts(filteredGuanteProducts)
    setPopularProducts(filteredPopularProducts)
  }, []);

  return (
    <Helmet title={'Home'}>
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero_content">
                <p className="hero_subtitle">Trending product in {year}</p>
                <h2>Renew all your snow equipment.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nobis aperiam labore,
                  ex in totam quisquam velit dolorem recusandae autem molestiae.</p>
                <motion.button whileTap={{ scale: 1.2 }}
                  className="buy_btn">
                  <Link to='/shop'>SHOP NOW</Link>
                </motion.button >
              </div>
            </Col>

            <Col lg='6' md='6' >
              <div className="hero_img">
                <img src={sambuchitoImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />
      <section className="trending_products">
        <Container>
          <Row>
            <Col lg='12' className="text-center">
              <h2 className="section_title">Trending Products</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="best_sales">
        <Container>
          <Row>
            <Col lg='12' className="text-center">
              <h2 className="section_title">Best Sales</h2>
            </Col>

            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer_count">
        <Container>
          <Row>
            <Col lg='6' md='12' className='count_down-col'>
              <div className='clock_top-content'>
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Snowboard</h3>
              </div>
              <Clock />

              <motion.button
                whileTap={{ scale: 1.2 }}
                className='buy_btn store_btn'>
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>

            <Col lg='6' md='12' className='text-end counter_img'>
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new_arrivals">
        <Container>
          <Row>
            <Col lg='12' className="text-center mb-5">
              <h2 className="section_title">New Arrivals</h2>
            </Col>
            <ProductsList data={accesorioProducts} />
            <ProductsList data={guanteProducts} />
          </Row>
        </Container>
      </section>

      <section className="popular_category">
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className="section_title">Popular in Category</h2>
            </Col>
            <ProductsList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home;