import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import BuyPointCard from "./buy-point-card";
import { useContext } from "react";
import { ProductContext } from "@/providers/products-provider";

interface BuyPointsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BuyPointsModal = ({ isOpen, onClose }: BuyPointsModalProps) => {
  const products = useContext(ProductContext);

  return (
    <>
      {products && (
        <Modal isOpen={isOpen} size="lg" onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody className="mb-3">
              <div className="flex gap-4 justify-between">
                {products.map((product) => {
                  return (
                    <BuyPointCard
                      key={product.id}
                      product={product}
                      onClose={onClose}
                    />
                  );
                })}
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default BuyPointsModal;
