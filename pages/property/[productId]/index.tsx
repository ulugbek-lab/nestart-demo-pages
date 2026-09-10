import { useRouter } from "next/router";

const PropertyDeatil = () => {
  const router = useRouter();
  const { productId } = router.query;
  return <div>PropertyDeatil Pages{productId}</div>;
};

export default PropertyDeatil;
