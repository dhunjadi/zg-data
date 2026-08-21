const React = require("react");
const { View } = require("react-native");

const iconStub = (name) => {
  const Icon = (props) =>
    React.createElement(View, { ...props, testID: `icon-${name}` });
  Icon.displayName = name;
  return Icon;
};

module.exports = new Proxy(
  {},
  {
    get: (_target, prop) => {
      if (prop === "__esModule") return true;
      if (prop === "default") return iconStub("default");
      return iconStub(String(prop));
    },
  },
);
