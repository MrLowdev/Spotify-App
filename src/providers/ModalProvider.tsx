"use client";

import AuthModal from "@/components/modal/AuthModal";
import { ProductWithPrice } from "@/types/types";
import { Fragment, useEffect, useState } from "react";

interface ModalProviderProps {
  products: ProductWithPrice[];
}

const ModalProvider: React.FC<ModalProviderProps> = ({ products }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <AuthModal />
    </>
  );
};

export default ModalProvider;
