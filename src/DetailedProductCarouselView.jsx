import React, { Component } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import ReactSlick from 'react-slick';

import "./DetailedProductView.css";


export default class DetailedProductCarouselView extends Component {
    render() {
        const {
            rimProps,
            rsProps,
            imageData,
            alt
        } = this.props;

        return (
            <ReactSlick
                {...{
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }}
                {...rsProps}
            >
                {imageData.map((src, index) => (
                    <div key={index}>
                        <ReactImageMagnify
                            {...{
                                smallImage: {
                                    alt: alt,
                                    isFluidWidth: true,
                                    src: src.small,
                                    sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                                },
                                largeImage: {
                                    src: src.large,
                                    width: 1426,
                                    height: 2000
                                },
                                lensStyle: { backgroundColor: 'rgba(0,0,0,.5)' }
                            }}
                            {...rimProps}
                        />
                    </div>
                ))}
            </ReactSlick>
        );
    }
}