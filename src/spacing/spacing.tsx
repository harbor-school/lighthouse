import * as React from "react"
import * as System from "../lighthouse"
import { SpacingPropsT } from "./types"

export const Spacing: React.FC<SpacingPropsT> = ({ ...props }) => <System.Block {...props} />
