import * as React from "react"
import { useContext } from "react"
import { ThemeContext } from "../helpers/lighthouse-provider"
import { DataCell, Datas, HeaderCell, Headers, Wrap } from "./styled-components"
import { TablePropsT } from "./types"

export const Table: React.FC<TablePropsT> = ({
  headerCells = [],
  dataCells = [],
  columnRatio,
  overrides = {},
}) => {
  const theme = useContext(ThemeContext)
  const sharedProps = { $theme: theme }
  const flexAmounts = getFlexAmount({
    $columnRatio: columnRatio,
  })

  return (
    <Wrap $style={overrides.Wrap} {...sharedProps}>
      <Headers $style={overrides.Headers} {...sharedProps}>
        {headerCells.map((cell, id) => (
          <HeaderCell
            key={id}
            $id={id}
            $flexAmounts={flexAmounts}
            $style={overrides.HeaderCell}
            {...sharedProps}
          >
            {cell}
          </HeaderCell>
        ))}
      </Headers>
      {dataCells.map((data, id) => (
        <Datas key={id} $style={overrides.Datas}>
          {data.map((cell, id) => (
            <DataCell
              key={id}
              $id={id}
              $flexAmounts={flexAmounts}
              $style={overrides.DataCell}
              {...sharedProps}
            >
              {cell}
            </DataCell>
          ))}
        </Datas>
      ))}
    </Wrap>
  )
}

Table.defaultProps = {
  overrides: {},
  headerCells: ["NAME", "ARTIST", "STATS"],
  dataCells: [
    ["Dynamite", "BTS", 1],
    ["WAP", "Cardi B Featuring Megan Thee Stallion", 2],
    ["Laugh Now Cry Later", "Drake Featuring Lil Durk", 3],
  ],
  columnRatio: [2, 4, 1],
}

function getFlexAmount({ $columnRatio }) {
  let ratioSum = 0
  for (let i = 0; i < $columnRatio.length; i++) ratioSum += $columnRatio[i]
  return $columnRatio.map((ratio) => `0 0 ${(100 * ratio) / ratioSum}%`)
}
