import React, { useState } from 'react';
import Container from '../layout/container';
import Badge from '../ui/badge';
import Filter from './filter';
import Select from '../ui/select';
import CatalogList from '../ui/catalog-list';
import Pagination from '../ui/pagination';

export default function Catalog({ options, products }) {
    const [productsList, setProductsList] = useState(products);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(6);
    const lastProductIndex = currentPage * productsPerPage;
    const firstProductIndex = lastProductIndex - productsPerPage;
    const currentProducts = productsList.slice(firstProductIndex, lastProductIndex);

    const handleSubmit = (evt, values, checkedMilk, checkedCountries) => {
        evt.preventDefault();
        let newArr = [...products];

        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i].price < values[0] || newArr[i].price > values[1]) {
                newArr.splice(i, 1);
                i--;
            }
        }

        if (checkedMilk !== 'Неважно') {
            for (let i = 0; i < newArr.length; i++) {
                if (newArr[i].milk !== checkedMilk) {
                    newArr.splice(i, 1);
                    i--;
                }
            }
        } else {
            newArr = [...products];
        }

        if (checkedCountries.length) {
            for (let i = 0; i < newArr.length; i++) {
                if (!checkedCountries.includes(newArr[i].country)) {
                    newArr.splice(i, 1);
                    i--;
                }
            }
        }

        setProductsList(newArr);
    }

    const handleReset = (evt) => {
        evt.preventDefault();
        setProductsList(products);
    }

    const handleSelectChange = (evt) => {
        let newArr = [...productsList];
        if (evt.target.value === 'default') {
            setProductsList(products);
        } else if (evt.target.value === 'ascending') {
            newArr = newArr.sort((a, b) => a.price > b.price ? 1 : -1);
            setProductsList(newArr);
        } else if (evt.target.value === 'descending') {
            newArr = newArr.sort((a, b) => a.price < b.price ? 1 : -1);
            setProductsList(newArr);
        }
    }

    return (
        <section className='catalog'>
            <div className="catalog__heading">
                <Badge>Каталог</Badge>
                <h2 className='catalog__title'>Каталог кофейных напитков</h2>
            </div>
            <Container className={'catalog__container'}>
                <Filter options={options} onSubmit={handleSubmit} onReset={handleReset} />
                <div className='catalog__wrapper'>
                    <Select className={'catalog__select'} handleSelectChange={handleSelectChange} />
                    <CatalogList list={currentProducts} />
                    <Pagination className={'catalog__pagination'} totalProducts={productsList.length} productsPerPage={productsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </div>
            </Container>
        </section>
    )
}