import PropTypes from 'prop-types'
import Image from 'next/image'
import Rating from 'react-rating'

import { MdStarOutline, MdStarRate  } from 'react-icons/md'

export default function ProductCard(props) {
    return(
        <div className='flex flex-col items-center text-center bg-white text-black w-1/6 rounded-lg'>
            <Image src={props.image} alt={props.title} height={'100'} width={'100'} loading={'lazy'} style={{width: 'auto', height: 'auto'}}/>
            
            <div>{props.title}</div>
            <div>{props.price}</div>
            <div>
                <Rating
                    readonly={true}
                    fractions={2}
                    initialRating={props.rating.rate}
                    emptySymbol={<MdStarOutline width={16} height={16} alt=''/>}
                    fullSymbol={<MdStarRate width={16} height={16} alt=''/>}
                />
                {props.rating.rate} ({props.rating.count})
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired
}

/*
category: "men's clothing"
description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
id: 1
image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
price: 109.95
rating: {rate: 3.9, count: 120}
title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
*/