import { Story } from "@storybook/react/types-6-0";
import React from "react";
import { Button, ButtonProps } from "../components/Button";

export default {
  title: "Button",
  component: Button,
  args: {
    children: "Lorem ipsum",
  },
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary" as const,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary" as const,
};

export const Link = Template.bind({});
Link.args = {
  variant: "link" as const,
};
