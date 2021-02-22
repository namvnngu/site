import Link from "next/link";

const Error = () => {
  return (
    <div className="not-found">
      <div>
        404 |{" "}
        <Link href="/">
          <a>BACK TO HOME</a>
        </Link>
      </div>
    </div>
  );
};

export default Error;
