import React from 'react';
import { View, StyleSheet, ViewProps, DimensionValue } from 'react-native';
import Svg, { Defs, Rect, LinearGradient, Stop } from 'react-native-svg';

const FROM_COLOR = 'black';
const TO_COLOR = '#cc006600';

const Background = ({
  children,
  fromColor,
  toColor,
  height = '100%',
  opacityColor1 = 1,
  opacityColor2 = 1,
  ...otherViewProps
}) => {
  const gradientUniqueId = `grad${fromColor}+${toColor}`.replace(
    /[^a-zA-Z0-9 ]/g,
    ''
  );
  return (
    <>
      <View
        style={[
          StyleSheet.absoluteFillObject,
          { height, zIndex: 10 },
          otherViewProps.style,
        ]}
        {...otherViewProps}>
        <Svg height="100%" width="100%" style={StyleSheet.absoluteFillObject}>
          <Defs>
            <LinearGradient
              id={gradientUniqueId}
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%">
              <Stop
                offset="0"
                stopColor={fromColor}
                stopOpacity={opacityColor1}
              />
              <Stop
                offset="1"
                stopColor={toColor}
                stopOpacity={opacityColor2}
              />
            </LinearGradient>
          </Defs>
          <Rect width="100%" height="100%" fill={`url(#${gradientUniqueId})`} />
        </Svg>
      </View>
      {children}
    </>
  );
};

export default Background;
