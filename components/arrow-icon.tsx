import * as React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowIcon = ({ color = "#fff", width = 25, height = 25, ...props }) => {
  return (
    <Svg viewBox="0 0 25 25" width={width} height={height} {...props}>
      <Path
        data-name="Right"
        d="M17.5 5.999L16.793 6.706 22.086 11.999 1 11.999 1 12.999 22.086 12.999 16.792 18.294 17.499 19.001 24 12.499 17.5 5.999z"
        fill={color}
      />
    </Svg>
  );
};

export default ArrowIcon;
