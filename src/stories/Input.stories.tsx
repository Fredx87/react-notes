import { Story } from "@storybook/react/types-6-0";
import React from "react";
import { Input, InputProps } from "../components/Input";

export default {
  title: "Input",
  component: Input,
  args: {
    label: "Label:",
    id: "input-id",
    value: "my value",
  },
};

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const TextInput = Template.bind({});
