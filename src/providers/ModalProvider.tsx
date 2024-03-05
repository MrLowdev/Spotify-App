"use client";

import AuthModal from "@/components/modal/AuthModal";
import SubscribeModal from "@/components/modal/SubscribeModal";
import UploadModal from "@/components/modal/UploadModal";
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
      <SubscribeModal products={products} />
      <UploadModal />
    </>
  );
};

export default ModalProvider;
