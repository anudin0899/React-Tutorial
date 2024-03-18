import React from 'react';
import BootstrapCard from '../../Components/Cards/BootstrapCard/bootstrapCard';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import './pagination.css'
import Header from '../../Components/Header/Header';


const Pagination = () => {

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);

    const fetchProduct = async () => {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();

        if (data && data.products) {
            setProducts(data.products)
        }
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    const handlePageSelector = (selectedPage) => {
        if (selectedPage >= 1 &&
            selectedPage <= products.length / 5 &&
            selectedPage !== page
        )
            setPage(selectedPage);
    }



    return (
        <div className='page'>
            <Header />
            <div className='containers'>
                <div className='wrap'>
                    {products.length > 0 && (
                        <div className='flex' style={{ gap: "10px", flexWrap: "wrap" }}>
                            {products.slice(page * 5 - 5, page * 5).map((product) => {
                                return (
                                    <BootstrapCard data={product} />
                                )
                            })}

                        </div>
                    )}
                    {products.length > 0 && (
                        <div className='pagination flex' >
                            <span onClick={() => handlePageSelector(page - 1)}><FaLongArrowAltLeft /></span>
                            {[...Array(products.length / 5)].map((_, i) => {
                                return (
                                    <span
                                        className={page === i + 1 ? "pagination__selected" : ""}
                                        onClick={() => handlePageSelector(i + 1)}
                                        key={i}>{i + 1}
                                    </span>);
                            })}
                            <span onClick={() => handlePageSelector(page + 1)}><FaLongArrowAltRight /></span>
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
}

export default Pagination;
