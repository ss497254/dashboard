import { GetServerSidePropsContext } from "next/types";
import { COOKIE_NAME, COOKIE_TOKEN } from "src/data/constants";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const cookie = ctx.req.cookies[COOKIE_NAME];

  if (cookie === COOKIE_TOKEN)
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
