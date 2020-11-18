/**
 * The Form component is used to data submission from user inputs. Wrapping input components with this component, form validations are available by simply adding required or pattern props.
 *
 *```tsx
 * import * as React from "react"
 * import * as System from "@harborschool/lighthouse"
 *
 * export default () => {
 *   return (
 *     <System.Form
 *       onSubmit={values => console.log("values", values)}
 *       formBody={
 *       <>
 *         <System.Input name="firstname" label="First Name" placeholder="Your Name" />
 *         <System.Input name="email" label="E-MAIL" pattern="/^\S+@\S+$/" placeholder="Your Email" />
 *       </>
 *       }
 *       formFooter={
 *       <>
 *         <System.Button type="button" kind="secondary">
 *         Cancel
 *         </System.Button>
 *         <System.Spacing width="scale400" display="inline-block" />
 *         <System.Button type="submit">Submit</System.Button>
 *       </>
 *       }
 *     />
 *   )
 * }
 * ```
 * @param formBody - React.ReactNode
 * @param formFooter - React.ReactNode
 * @param onSubmit - SubmitHandler<Record<string, any>>
 * @param overrides - \{ FormWrap?: StyletronReact.StyleObject }
 */
export const Form: React.FC<FormPropsT> = FormComp
export * from "./types"

import { Form as FormComp } from "./form"
import { FormPropsT } from "./types"
