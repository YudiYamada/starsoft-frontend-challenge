import "@testing-library/jest-dom";
import React from "react";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    const { src, alt, ...rest } = props;
    const srcValue = typeof src === "string" ? src : src?.src || "";
    return React.createElement("img", { src: srcValue, alt, ...rest });
  },
}));
