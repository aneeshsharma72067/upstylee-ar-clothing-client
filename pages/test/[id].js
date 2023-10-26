import { useRouter } from "next/router";

const Test = () => {
  const router = useRouter();
  const id = router.query.id;
  return <div>Test {id}</div>;
};

export default Test;
