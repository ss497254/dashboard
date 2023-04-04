import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "src/ui/Button";

const Error404: NextPage = ({}) => {
  const [show404, setShow404] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShow404(true);
    }, 500);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen text-white bg-gray-900">
      <div
        className={`select-none opacity-10 filter transition duration-200 ${
          show404 ? "blur-sm" : "blur-none"
        }`}
      >
        <h1 style={{ fontSize: "35vw" }}>404</h1>
      </div>
      <div
        className={`flex absolute z-10 flex-col items-center justify-center space-y-6 transition ${
          show404 ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex w-[380px] flex-col items-center justify-center space-y-3 text-center">
          <h3 className="text-2xl text-emerald-400">
            Looking for something? 🔍
          </h3>
          <p>We couldn't find the page that you're looking for!</p>
        </div>
        <Link href="/">
          <Button btn="success" className="font-semibold" size="medium">
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Error404;
