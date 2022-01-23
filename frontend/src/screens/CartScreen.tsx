import React, { ChangeEvent, useEffect, useState } from "react";
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
import { Link } from "react-router-dom";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Message from "../components/Message";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { removeFromCart } from "../redux/actions/cartActions";

interface ICartScreenProps {}

const CartScreen: React.FC<ICartScreenProps> = (props) => {
    const [quantity, setQuantity] = useState(1);
    const productId = useParams();
    const location = useLocation();
    const qty = location.search ? +location.search.split("=")[1] : 1;
    const { addToCart, removeFromCart } = useActions();

    const navigate = useNavigate();

    const { cartItems } = useTypedSelector((state) => state.cart);
    const { product } = useTypedSelector((state) => state.productDetailsState);

    useEffect(() => {
        if (productId) {
            addToCart(productId.id, qty);
        }
        // }, [addToCart, productId, qty]);
    }, [productId, qty]);

    const selectChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setQuantity(+event.target.value);
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
    const removeFromCartHandler = (id: string) => {
        removeFromCart(id);
    };
    const checkoutHandler = () => {
        navigate("/login?redirect=shipping");
    };
    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <Message variant="info">
                        Your cart is empty <Link to="/">Go Back</Link>
                    </Message>
                ) : (
                    <ListGroup variant="flush">
                        {cartItems.map((item) => (
                            <ListGroupItem key={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fluid
                                            rounded
                                        />
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/product/${item.product}`}>
                                            {item.name}
                                        </Link>
                                    </Col>
                                    <Col md={2}>${item.price}</Col>
                                    <Col md={2}>
                                        <Form.Control
                                            as="select"
                                            value={item.qty}
                                            onChange={selectChangeHandler}
                                        >
                                            {countInStockHandler()}
                                        </Form.Control>
                                    </Col>
                                    <Col md={2}>
                                        <Button
                                            type="button"
                                            variant="light"
                                            onClick={() =>
                                                removeFromCartHandler(
                                                    item.product
                                                )
                                            }
                                        >
                                            <i className="fas fa-trash"></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                )}
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroupItem>
                            <h2>
                                Subtotal (
                                {cartItems.reduce(
                                    (acc, cur) => acc + cur.qty,
                                    0
                                )}
                                ) items
                            </h2>
                            $
                            {cartItems.reduce(
                                (acc, cur) => acc + cur.qty * cur.price,
                                0
                            )}
                        </ListGroupItem>
                        <ListGroupItem>
                            <Button
                                type="button"
                                className="btn-block w-100"
                                disabled={cartItems.length === 0}
                                onClick={checkoutHandler}
                            >
                                PROCEED TO CHECKOUT
                            </Button>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    );
};

export default CartScreen;
