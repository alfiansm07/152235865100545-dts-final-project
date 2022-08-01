import useAxios from "axios-hooks";
import React from "react";

const Coba = () => {
  const [{ data, loading, error }] = useAxios({
    url: "/api/detail/2021/01/28/balan-wonderworld-preview",
  });
  if (loading) return "Loading...";
  if (error) return "Error!";
  console.table("inidata", data);

  return <div></div>;
};

export default Coba;
