import React from "react";
import { CBadge } from "@coreui/react";

const Badge = ({ status }) => {
  let color;
  switch (status) {
    case "pending":
      color = "primary";
      break;
    case "rejected":
      color = "danger";
      break;
    case "approved":
      color = "success";
      break;
    default:
      color = "secondary";
  }

  return (
    <>
      <CBadge color={color} shape="rounded-pill">
        {status}
      </CBadge>
    </>
  );
};

export default Badge;
