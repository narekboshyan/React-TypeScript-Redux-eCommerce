import { Fragment, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Product from "../components/Product";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const HomeScreen: React.FC = () => {
    const { loading, error, products } = useTypedSelector(
        (state) => state.productListState
    );
    const { listProducts } = useActions();

    useEffect(() => {
        listProducts();
    }, []);

    return (
        <Fragment>
            <h1>Latest Products</h1>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <Row>
                    {Array.isArray(products) &&
                        products.map((prod) => (
                            <Col sm={12} md={6} lg={4} xl={3} key={prod.name}>
                                <Product product={prod} />
                            </Col>
                        ))}
                </Row>
            )}
        </Fragment>
    );
};

export default HomeScreen;
