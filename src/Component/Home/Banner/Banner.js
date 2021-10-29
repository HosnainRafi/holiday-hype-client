import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner1.jfif'
import banner2 from '../../../images/banner2.jfif'
import banner3 from '../../../images/banner3.jfif'
import banner4 from '../../../images/banner4.jfif'

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="Lalbagh Fort"
                    />
                    <Carousel.Caption>
                        <h3>Lalbagh Fort</h3>
                        <p>Lalbagh Fort is an incomplete 17th-century Mughal fort complex that stands before the Buriganga River in the southwestern part of Dhaka, Bangladesh.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Ahsan Manzil"
                    />

                    <Carousel.Caption>
                        <h3>Ahsan Manzil</h3>
                        <p>Ahsan Manzil used to be the official residential palace and seat of the Nawab of Dhaka. The building is situated at Kumartoli</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner4}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Cox's Bazar Beach</h3>
                        <p>Cox's Bazar Beach, located at Cox's Bazar, Bangladesh, is the longest natural sea beach in the world running 150 kilometres. and 3rd longest beach </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="St. Martin's Island"
                    />

                    <Carousel.Caption>
                        <h3>St. Martin's Island</h3>
                        <p>St. Martin's Island is a small island in the northeastern part of the Bay of Bengal, about 9 km south of the tip of the Cox's Bazar.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;