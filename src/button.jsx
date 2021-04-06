import React from "react";

export default function buttons(props) {
  const { text, color } = props;
  return <button style={{ backgroundColor: props.color }}>{props.text}</button>;
}
