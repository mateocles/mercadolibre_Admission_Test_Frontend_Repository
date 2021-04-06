import React from "react";
import { Result } from "antd";
export const Error = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="lo sentimos, esta pagina no existe."
      extra={<a href="/">Back Home</a>}
    />
  );
};
