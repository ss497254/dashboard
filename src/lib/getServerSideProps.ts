import { GetServerSidePropsContext } from "next/types";
import { authenticateRequest } from "src/utils/authenticateRequest";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  if (authenticateRequest(ctx.req))
    return {
      props: {},
    };

  return {
    redirect: {
      destination: "/login",
      permanent: false,
    },
  };
};
