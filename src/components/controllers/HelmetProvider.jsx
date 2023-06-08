import React from "react";
import { Helmet } from "react-helmet";

const HelmetProvider = ({ title }) => {
  return (
    <Helmet>
      <title>{`Foreign Accent | ${title}`}</title>
    </Helmet>
  );
};

export default HelmetProvider;
