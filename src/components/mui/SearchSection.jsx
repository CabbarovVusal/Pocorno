import { Box, Modal, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../css/searchsection.css";

const style = {
    position: 'fixed',
    top: 0,
    right: 0,
    height: 'fit-content',
    width: '100%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const SearchSection = ({ open, handleCloseSearchButton }) => {
    const [inputValue, setInputValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [defaultResult, setDefaultResult] = useState([]);

    const handleChangeValue = async (e) => {
        const value = e.target.value;
        setInputValue(value);

        if (value === "") {
            setSearchResults([]);
            return;
        }

        try {
            const response = await axios.get("../../../a.json");
            const products = response.data.shop_by.gifts;

            const filteredResults = products.filter(product =>
                product.name.toLowerCase().includes(value.toLowerCase())
            );
            setSearchResults(filteredResults);
        } catch (error) {
            console.error("Error fetching the data", error);
        }
    };

    const getDataDefaultResult = async () => {
        try {
            const response = await axios.get("../../../a.json");
            const defaultProduct = response.data.shop_by.gifts.slice(0, 3);
            setDefaultResult(defaultProduct);  // Set the default result to state
        } catch (error) {
            console.error("Error fetching the data", error);
        }
    };

    useEffect(() => {
        getDataDefaultResult();
    }, []);

    return (
        <Modal open={open} onClose={handleCloseSearchButton} className='search-modal'>
            <Box sx={style} className="search-box flex justify-center">
                <Box className="search-box__inner">
                    <Box className="search-input">
                        <input
                            onChange={handleChangeValue}
                            value={inputValue}
                            name="search"
                            id="search"
                            className='search-input__inner'
                            placeholder='What are you looking for?'
                        />
                    </Box>

                    <Box className="product-item">
                        <Typography className='product-count'>
                            {searchResults.length > 0 ? `${Math.min(searchResults.length, 3)} of ${searchResults.length} results` : "Popular Search Terms"}
                        </Typography>

                        <Box>
                            {searchResults.length > 0 ? (
                                searchResults.slice(0, 3).map((product, index) => (
                                    <Box className="product-list" key={index}>
                                        <Box className="products">
                                            <img src={product.imageUrl} alt={product.name} className='product-img' />
                                            <p className="product-title">{product.name}</p>
                                        </Box>
                                        <p className="product-paragraph">PRODUCT</p>
                                    </Box>
                                ))
                            ) : (
                                defaultResult.map((item, index) => (
                                    <Box className="product-list" key={index}>
                                        <Box className="products">
                                            <img src={item.imageUrl} alt={item.name} className='product-img' />
                                            <p className="product-title">{item.name}</p>
                                        </Box>
                                        <p className="product-paragraph">PRODUCT</p>
                                    </Box>
                                ))
                            )}
                        </Box>
                    </Box>

                    <button className="close-modal" onClick={handleCloseSearchButton}>X</button>
                </Box>
            </Box>
        </Modal>
    );
};

export default SearchSection;
