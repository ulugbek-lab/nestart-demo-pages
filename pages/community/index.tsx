import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";

const Community: NextPage = () => {
  console.log("COMMUNITY COMPONENT - PAGES ROUTER");
  return <div>Community Pages</div>;
};

export default withLayoutBasic(Community);
