import * as React from "react"
import { useContext } from "react"
import { ThemeContext } from "../helpers/lighthouse-provider"
import { getOverrides } from "../helpers/overrides"
import { BaseBlock } from "./styled-components"
import { BlockPropsT } from "./types"

export const Block: React.FC<BlockPropsT> = ({
  forwardedRef,
  children,
  as = "div",
  overrides = {},
  color,
  backgroundAttachment,
  backgroundClip,
  backgroundColor,
  backgroundImage,
  backgroundOrigin,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize,
  font,
  alignContent,
  alignItems,
  alignSelf,
  flexDirection,
  display,
  flex,
  grid,
  gridArea,
  gridAutoColumns,
  gridAutoFlow,
  gridAutoRows,
  gridColumn,
  gridColumnEnd,
  gridColumnGap,
  gridColumnStart,
  gridGap,
  gridRow,
  gridRowEnd,
  gridRowGap,
  gridRowStart,
  gridTemplate,
  gridTemplateAreas,
  gridTemplateColumns,
  gridTemplateRows,
  justifyContent,
  justifyItems,
  justifySelf,
  position,
  transform,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  overflow,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  borderRadius,
  boxShadow,
  placeContent,
  placeItems,
  placeSelf,
  flexWrap,
  left,
  top,
  right,
  bottom,
  textAlign,
  textOverflow,
  whiteSpace,
  cursor,
  ...restProps
}) => {
  const theme = useContext(ThemeContext)
  const sharedProps = { $theme: theme }

  return (
    <BaseBlock
      {...sharedProps}
      // coerced to any because because of how react components are typed.
      // cannot guarantee an html element
      ref={forwardedRef}
      $as={as}
      $color={color}
      $backgroundAttachment={backgroundAttachment}
      $backgroundClip={backgroundClip}
      $backgroundColor={backgroundColor}
      $backgroundImage={backgroundImage}
      $backgroundOrigin={backgroundOrigin}
      $backgroundPosition={backgroundPosition}
      $backgroundRepeat={backgroundRepeat}
      $backgroundSize={backgroundSize}
      $font={font}
      $alignContent={alignContent}
      $alignItems={alignItems}
      $alignSelf={alignSelf}
      $flexDirection={flexDirection}
      $display={display}
      $flex={flex}
      $grid={grid}
      $gridArea={gridArea}
      $gridAutoColumns={gridAutoColumns}
      $gridAutoFlow={gridAutoFlow}
      $gridAutoRows={gridAutoRows}
      $gridColumn={gridColumn}
      $gridColumnEnd={gridColumnEnd}
      $gridColumnGap={gridColumnGap}
      $gridColumnStart={gridColumnStart}
      $gridGap={gridGap}
      $gridRow={gridRow}
      $gridRowEnd={gridRowEnd}
      $gridRowGap={gridRowGap}
      $gridRowStart={gridRowStart}
      $gridTemplate={gridTemplate}
      $gridTemplateAreas={gridTemplateAreas}
      $gridTemplateColumns={gridTemplateColumns}
      $gridTemplateRows={gridTemplateRows}
      $justifyContent={justifyContent}
      $justifyItems={justifyItems}
      $justifySelf={justifySelf}
      $position={position}
      $transform={transform}
      $width={width}
      $minWidth={minWidth}
      $maxWidth={maxWidth}
      $height={height}
      $minHeight={minHeight}
      $maxHeight={maxHeight}
      $overflow={overflow}
      $margin={margin}
      $marginTop={marginTop}
      $marginRight={marginRight}
      $marginBottom={marginBottom}
      $marginLeft={marginLeft}
      $padding={padding}
      $paddingTop={paddingTop}
      $paddingRight={paddingRight}
      $paddingBottom={paddingBottom}
      $paddingLeft={paddingLeft}
      $borderRadius={borderRadius}
      $boxShadow={boxShadow}
      $placeContent={placeContent}
      $placeItems={placeItems}
      $placeSelf={placeSelf}
      $flexWrap={flexWrap}
      $left={left}
      $top={top}
      $right={right}
      $bottom={bottom}
      $textAlign={textAlign}
      $textOverflow={textOverflow}
      $whiteSpace={whiteSpace}
      $cursor={cursor}
      {...restProps}
      $style={overrides.Block}
    >
      {children}
    </BaseBlock>
  )
}

const BlockComponent = React.forwardRef<BlockPropsT, HTMLElement>((props: BlockPropsT, ref) => (
  <Block {...props} forwardedRef={ref} />
))

BlockComponent.displayName = "Block"
export default BlockComponent
