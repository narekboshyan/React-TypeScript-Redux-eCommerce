import React, { useEffect, useState, ChangeEvent, MouseEvent } from "react";
import {
    Button,
    Card,
    Col,
    Form,
    Image,
    ListGroup,
    ListGroupItem,
    Row,
} from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Rating from "../components/Rating";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const ProductScreen: React.FC = () => {
    const [qty, setQty] = useState<number>(1);
    const navigate = useNavigate();

    const { listProductDetails } = useActions();
    const { product, loading, error } = useTypedSelector(
        (state) => state.productDetailsState
    );
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        listProductDetails(id);
    }, []);

    const selectChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setQty(+event.target.value);
    };

    const countInStockHandler = () => {
        let optionData = [];

        for (let i = 0; i < product.countInStock; i++) {
            optionData.push(
                <option key={i + 1} value={i + 1}>
                    {i + 1}
                </option>
            );
        }

        return optionData;
    };

    const addToCardHandler = (event: MouseEvent<HTMLButtonElement>) => {
        navigate(`/cart/${id}?qty=${qty}`);
    };

    return (
        <React.Fragment>
            <Link className="btn btn-light my-3" to="/">
                Go Back
            </Link>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <Row>
                    <Col md={6}>
                        <Image src={product.image} alt={product.name} fluid />
                    </Col>
                    <Col md={3}>
                        <ListGroup variant="flush">
                            <ListGroupItem>
                                <h2>{product.name}</h2>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Rating
                                    value={product.rating || 0}
                                    text={`${product.numReviews} reviews`}
                                    color=""
                                />
                            </ListGroupItem>
                            <ListGroupItem>
                                Price: ${product.price}
                            </ListGroupItem>
                            <ListGroupItem>
                                Description: ${product.description}
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroupItem>
                                    <Row>
                                        <Col>Price:</Col>
                                        <Col>
                                            <strong>${product.price}</strong>
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Row>
                                        <Col>Status:</Col>
                                        <Col>
                                            {product?.countInStock > 0
                                                ? "In Stock"
                                                : "Out Of Stock"}
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                                {product.countInStock > 0 && (
                                    <ListGroupItem>
                                        <Row>
                                            <Col>Qty</Col>
                                            <Col>
                                                <Form.Control
                                                    as="select"
                                                    value={qty}
                                                    onChange={
                                                        selectChangeHandler
                                                    }
                                                >
                                                    {countInStockHandler()}
                                                </Form.Control>
                                            </Col>
                                        </Row>
                                    </ListGroupItem>
                                )}
                                <ListGroupItem>
                                    <Button
                                        className="btn-block w-100"
                                        type="button"
                                        disabled={product.countInStock === 0}
                                        onClick={addToCardHandler}
                                    >
                                        Add To Cart
                                    </Button>
                                </ListGroupItem>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            )}
        </React.Fragment>
    );
};

export default ProductScreen;
