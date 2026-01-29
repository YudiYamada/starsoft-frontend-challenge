import React from "react";

const motion = (Comp) => Comp;
motion.div = "div";
motion.section = "section";
motion.span = "span";

const AnimatePresence = ({ children }) =>
  React.createElement(React.Fragment, null, children);

module.exports = { motion, AnimatePresence };
