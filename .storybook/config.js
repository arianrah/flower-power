import { configure } from "@storybook/react";

configure(require.context("../client/src", true, /\.stories\.js$/), module);
