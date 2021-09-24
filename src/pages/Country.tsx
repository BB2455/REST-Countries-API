import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

interface Props {}

const Country = (props: Props) => {
  let { country }: any = useParams();
  return (
    <div>
      <Helmet>
        <title>Where In The World | {country}</title>
      </Helmet>
      {country}
    </div>
  );
};

export default Country;
