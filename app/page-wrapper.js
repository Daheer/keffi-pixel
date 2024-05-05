"use client";

import { motion } from "framer-motion";

const variants1 = {
  hidden: { opacity: 0, y: -200, x: 0 },
  enter: { opacity: 1, y: 0, x: 0 },
}

const variants2 = {
  hidden: { opacity: 0, y: -100, x: 0 },
  enter: { opacity: 1, y: 0, x: 0 },
}

const variants3 = {
  hidden: { opacity: 0, y: -400, x: 0 },
  enter: { opacity: 1, y: 0, x: 0 },
}

export function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}>
      {children}
    </motion.div>
  )
}

export function PillAnimation1({ children }) {
  return (
    <motion.div
      variants={variants1}
      initial="hidden"
      animate="enter"
      transition={{ type: "linear", ease: "easeInOut", duration: 0.25 }} >
      {children}
    </ motion.div>
  )
}

export function PillAnimation2({ children }) {
  return (
    <motion.div
      variants={variants2}
      initial="hidden"
      animate="enter"
      transition={{ type: "linear", ease: "easeInOut", duration: 0.5 }} >
      {children}
    </ motion.div>
  )
}

export function PillAnimation3({ children }) {
  return (
    <motion.div
      variants={variants3}
      initial="hidden"
      animate="enter"
      transition={{ type: "linear", ease: "easeInOut", duration: 0.75 }} >
      {children}
    </ motion.div>
  )
}