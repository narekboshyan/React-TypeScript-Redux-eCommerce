import * as React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

interface IProductProps {
    product: {
        _id: string;
        image: string;
        name: string;
        price: number;
        numReviews: number;
        rating: number;
    };
}

const Product: React.FC<IProductProps> = ({ product }) => {
    const { image, name, rating, numReviews, price, _id } = product;

    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/product/${_id}`}>
                <Card.Img src={image} variant="top" />
            </Link>

            <Card.Body>
                <Link to={`/product/${_id}`}>
                    <Card.Title as="div">
                        <strong>{name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as="div">
                    <Rating
                        value={rating}
                        text={`${numReviews} reviews`}
                        color="#f8e825"
                    />
                </Card.Text>
                <Card.Text as="h3">${price}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Product;
