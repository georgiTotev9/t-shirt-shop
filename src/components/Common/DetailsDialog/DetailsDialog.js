import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DetailsDialog = ({
    show,
    onClose,
    onContinueShopping,
    onCart,
}) => {
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Added to cart!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Product successfully added to shopping cart!
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={onContinueShopping}>
                    Continue Shopping
                </Button>
                <Button variant='primary' onClick={onCart}>
                    Go To Cart
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DetailsDialog;
