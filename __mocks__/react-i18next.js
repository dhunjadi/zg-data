const React = require("react");
const reactI18next = require("react-i18next");

const useMock = [(k) => k, { changeLanguage: () => new Promise(() => {}) }];
useMock.t = (k) => k;
useMock.i18n = { changeLanguage: () => new Promise(() => {}) };

module.exports = {
  ...reactI18next,
  withTranslation: () => (Component) => (props) => (
    <Component t={(k) => k} {...props} />
  ),
  Trans: ({ children, i18nKey }) => children ?? i18nKey,
  useTranslation: () => useMock,
};
