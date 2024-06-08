import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import BuyPointCard from "./buy-point-card";

interface BuyPointsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BuyPointsModal = ({ isOpen, onClose }: BuyPointsModalProps) => {
  return (
    <>
      <Modal isOpen={isOpen} size="lg" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="mb-3">
            <div className="flex gap-4 justify-between">
              <BuyPointCard points={10} price={20} />
              <BuyPointCard points={50} price={60} />
              <BuyPointCard points={100} price={120} />
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BuyPointsModal;
