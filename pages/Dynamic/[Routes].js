import {useRouter} from "next/router";

export default function Dynamic() {
  const router = useRouter();
  return (
    <div className="container">
      {`Routes: ${router.query.Routes}`}
      {/* .Routes refers to [Routes].js */}
    </div>
  );
}
