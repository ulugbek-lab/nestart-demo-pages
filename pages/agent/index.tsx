import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Stack } from "@mui/material";
import { NextPage } from "next";

const Agent: NextPage = () => {
  return (
    <div style={{ margin: "20px 0" }}>
      <Stack className="container">AGENTS LIST </Stack>
    </div>
  );
};

export default withLayoutBasic(Agent);
