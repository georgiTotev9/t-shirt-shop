import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ConfirmDialog = ({ show, onClose, onConfirm }) => {
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Log out</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to log out?</Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={onClose}>
                    Close
                </Button>
                <Button variant='primary' onClick={onConfirm}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmDialog;
