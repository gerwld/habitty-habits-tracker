import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgAdd2 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props?.width || 32}
    height={props?.height || 32}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="currentColor"
      d="M11.5 12.5h-5q-.213 0-.356-.144T6 11.999t.144-.356.356-.143h5v-5q0-.213.144-.356T12.001 6t.356.144.143.356v5h5q.213 0 .356.144t.144.357-.144.356-.356.143h-5v5q0 .213-.144.356t-.357.144-.356-.144-.143-.356z"
    />
  </Svg>
);
export default SvgAdd2;
