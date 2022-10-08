import React, { useState } from 'react'
import styledComponents from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { mobile } from '../responsive'
import { useLocation } from 'react-router-dom'

const Container = styledComponents.div`

`;
const Title = styledComponents.h1`
    margin: 18px;
`;
const FilterContainer = styledComponents.div`
    display: flex;
    justify-content: space-between;

`;
const Filter = styledComponents.div`
    margin: 18px;
    ${mobile({margin: "0px 20px", display: "flex", flexDirection: "column"})};
`;

const FilterText = styledComponents.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight: "0px"})}
`;

const Select = styledComponents.select`
    padding: 10px;
    margin-right: 20px;
    
`;

const Option = styledComponents.option`

`;

const ProductsList = () => {
const location = useLocation();
const category = location.pathname.split("/")[2];
const [filters, setFilters] = useState({});
const [sort, setSort] = useState("newest");

const handleFilters = (e) =>{
    const value = e.target.value;
    setFilters({
        ...filters,
        [e.target.name]: value,
    })
}

  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>{category}</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select name="color" onChange={handleFilters}>
                    <Option disabled>
                        Color
                    </Option>
                    <Option>black</Option>
                    <Option>white</Option>
                    <Option>light blue</Option>
                    <Option>yellow</Option>
                    <Option>cream</Option>
                    <Option>blue</Option>
                </Select>
                <Select name="size" onChange={handleFilters}>
                    <Option disabled>
                        Size
                    </Option>
                    <Option>XXS</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select onChange={e=>setSort(e.target.value)}>
                    <Option value="newest">Newest</Option>
                    <Option value="asc">Price (asc)</Option>
                    <Option value="desc">Price (desk)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products category={category} filters={filters} sort={sort}/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductsList