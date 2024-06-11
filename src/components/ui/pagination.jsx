import React from 'react';
import Button from './button';

export default function Pagination ({ className, totalProducts, productsPerPage, currentPage, setCurrentPage }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className={className ? `${className} pagination` : 'pagination'}>
            <Button className={'pagination__prev'} onClick={() => (currentPage - 1) > 0 ? setCurrentPage(currentPage - 1) : null}></Button>
            <ul className='pagination__pages'>
                {pageNumbers.map((pageNumber, index) => (
                    <li className='pagination__page' key={index}>
                        <Button className={currentPage === pageNumber ? 'pagination__button pagination__button--active' : 'pagination__button'} onClick={() => setCurrentPage(pageNumber)}>{pageNumber}</Button>
                    </li>
                ))}
            </ul>
            <Button className={'pagination__next'} onClick={() => ((currentPage + 1) <= pageNumbers.length) ? setCurrentPage(currentPage + 1) : null}></Button>
        </div>
    )
}