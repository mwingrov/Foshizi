import { getSession, useSession } from "next-auth/react";
import Dashboard from "@/components/layout/dashboard";
import { useRouter } from "next/router";

const DashboardPage = ({ surveys, users }) => {
  const router = useRouter();
  const { data: session } = useSession();

  if (!session) {
    router.push("/");
  }

  console.log(session);
  return (
    <Dashboard user={session?.user} surveys={surveys} users={users}></Dashboard>
  );
};

export default DashboardPage;

export const getStaticProps = async (context) => {
  const session = await getSession(context);
  console.log("THIS IS ", session);
  if (!session) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  const surveyJSON = await fetch(
    "https://foshizi.herokuapp.com/api/getallsurveys"
  );
  const surveys = await surveyJSON.json();

  return {
    props: {
      session,
      surveys,
    },
  };
};
