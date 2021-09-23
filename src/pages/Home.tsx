import React from "react";
import { Header } from "../components";

interface Props {
  theme: string;
  toggleTheme: any;
}

const Home = (props: Props) => {
  return (
    <div>
      <Header theme={props.theme} toggleTheme={props.toggleTheme} />
    </div>
  );
};

export default Home;
