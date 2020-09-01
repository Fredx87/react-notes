import React from "react";
import { Button } from "../components/Button";

export default {
  title: "Button",
};

export const Primary = () => <Button variant="primary">Primary button</Button>;
export const Secondary = () => (
  <Button variant="secondary">Secondary button</Button>
);
