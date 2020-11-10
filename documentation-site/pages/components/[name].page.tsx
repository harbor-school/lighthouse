import * as tsdoc from "@microsoft/tsdoc"
import { motion } from "framer-motion"
import { NextSeo } from "next-seo"
import { useRouter } from "next/router"
import * as React from "react"
import { useEffect, useState } from "react"
import * as System from "../../../../lighthouse"
import { useTheme } from "../../../../lighthouse"
import { DocumentationLayout } from "../../components/documentation-layout"
import {
  codeSandboxNewProjectWithLighthouseUrl,
  framerNewProjectWithLighthouseUrl,
  siteBaseUrl,
  TARGE_FILE_LIST,
} from "../../constants"
import { fileNameToComponentName, sizeBg } from "../../utils"
import { ComponentView } from "./component-view"

export default function Page({ inputString }) {
  const theme = useTheme()
  const sharedProps = { $theme: theme }
  const router = useRouter()
  const { name } = router.query
  const [docComment, setDocComment] = useState<any>()

  useEffect(() => {
    const configuration = new tsdoc.TSDocConfiguration()
    configuration.addTagDefinition(
      new tsdoc.TSDocTagDefinition({
        tagName: "@sampleCustomBlockTag",
        syntaxKind: tsdoc.TSDocTagSyntaxKind.InlineTag,
        allowMultiple: true,
      })
    )
    const tsdocParser = new tsdoc.TSDocParser(configuration)
    const parserContext = tsdocParser.parseString(inputString)
    setDocComment(parserContext.docComment)
  }, [inputString])

  const outputElements = handleDocComment(docComment)
  const componentName = fileNameToComponentName(name)
  const pageTitle = `${process.env.NODE_ENV !== "production" ? "[DEV] " : ""}
  Lighthouse - ${componentName}`
  const pageUrl = siteBaseUrl + router.asPath

  return (
    <DocumentationLayout>
      <NextSeo
        title={pageTitle}
        canonical={pageUrl}
        openGraph={{
          title: pageTitle,
          url: pageUrl,
        }}
      />
      <System.HeadingLarge>{componentName}</System.HeadingLarge>
      {/* Component Summary & Examples */}
      <System.Spacing height="scale1600" backgroundColor={sizeBg} />
      {outputElements.map((el, id) => (
        <div key={id}>{el}</div>
      ))}
      {/* Actions */}
      <System.Spacing height="scale1600" backgroundColor={sizeBg} />
      {outputElements.length > 0 && (
        <System.Block
          display="flex"
          overrides={{
            Block: {
              [theme.mediaQuery.large]: {
                flexDirection: "column",
                alignItems: "start",
              },
            },
          }}
        >
          <System.Button
            kind="tertiary"
            as={motion.a}
            href={framerNewProjectWithLighthouseUrl}
            target="_blank"
            rel="noreferrer"
            startEnhancer={<PlayIcon height={14} color={theme.colors.primary} />}
          >
            Start Design With Framer
          </System.Button>
          <System.Spacing width="scale400" height="scale400" backgroundColor={sizeBg} />
          <System.Button
            kind="tertiary"
            as={motion.a}
            href={codeSandboxNewProjectWithLighthouseUrl}
            target="_blank"
            rel="noreferrer"
            startEnhancer={<PlayIcon height={14} color={theme.colors.primary} />}
          >
            Start Code With CodeSandbox
          </System.Button>
        </System.Block>
      )}
    </DocumentationLayout>
  )
}

function handleDocComment(docComment) {
  const outputElements = []
  // Summary
  if (docComment) {
    if (docComment.summarySection)
      outputElements.push(
        <>
          <System.HeadingSmall>Summary</System.HeadingSmall>
          <System.Spacing height="scale900" backgroundColor={sizeBg} />
          <System.ParagraphLarge as="div">
            {_renderContainer(docComment.summarySection)}
          </System.ParagraphLarge>
          <System.Spacing height="scale1600" backgroundColor={sizeBg} />
        </>
      )
    // Parameters
    if (docComment.params.count > 0) {
      const rows: React.ReactNode[] = []
      for (const paramBlock of docComment.params.blocks) {
        rows.push(
          <tr key={`param_${rows.length}`}>
            <td>{paramBlock.parameterName}</td>
            <td>{_renderContainer(paramBlock.content)}</td>
          </tr>
        )
      }
      const data = docComment.params.blocks.map((paramBlock) => {
        return [
          paramBlock.parameterName,
          ...React.Children.toArray(_renderContainer(paramBlock.content)),
        ]
      })
      outputElements.push(
        <React.Fragment key="parameters">
          <System.HeadingSmall>API</System.HeadingSmall>
          <System.Spacing height="scale900" backgroundColor={sizeBg} />
          <System.Table
            headerCells={["Name", "Type"]}
            dataCells={data}
            columnRatio={[1, 3]}
            overrides={{
              Datas: {
                alignItems: "start",
              },
            }}
          />
        </React.Fragment>
      )
    }
    if (docComment.returnsBlock)
      outputElements.push(
        <div key="returns">
          <h2 className="doc-heading">Return Value</h2>
          {_renderContainer(docComment.returnsBlock.content)}
        </div>
      )
    if (docComment.remarksBlock) {
      outputElements.push(
        <div key="remarks">
          <h2 className="doc-heading">Remarks</h2>
          {_renderContainer(docComment.remarksBlock.content)}
        </div>
      )
    }
  }

  return outputElements
}

function _renderContainer(section) {
  const elements = []
  for (const node of section._nodes) {
    const key = `key_${elements.length}`
    const el = _renderDocNode(node, key)
    elements.push(el)
  }
  return <>{elements}</>
}

function _renderDocNode(node, key) {
  switch (node.kind) {
    case "CodeSpan":
      return (
        <code key={key} className="doc-code-span">
          {node.code}
        </code>
      )
    case "ErrorText":
      return <span key={key}>{node.text}</span>
    case "EscapedText":
      return <span key={key}>{node.decodedText}</span>
    case "FencedCode":
      const docFencedCode = node
      const codeString = docFencedCode.code.trim()
      return <ComponentView key={key} id={key} code={codeString} />
      break
    case "LinkTag":
      const linkTag = node
      if (linkTag.urlDestination) {
        const linkText = linkTag.linkText || linkTag.urlDestination
        return (
          <a key={key} href="#">
            {linkText}
          </a>
        )
      } else {
        let identifier = ""
        if (linkTag.codeDestination) {
          const memberReferences = linkTag.codeDestination.memberReferences
          if (memberReferences.length > 0) {
            const memberIdentifier = memberReferences[memberReferences.length - 1].memberIdentifier
            if (memberIdentifier) {
              identifier = memberIdentifier.identifier
            }
          }
        }
        const linkText = linkTag.linkText || identifier || "???"
        return (
          <a key={key} href="#">
            {linkText}
          </a>
        )
      }
    case "Paragraph":
      // Collapse spaces in the paragraph
      const transformedParagraph = tsdoc.DocNodeTransforms.trimSpacesInParagraph(node)
      return <span key={key}>{_renderContainer(transformedParagraph)}</span>
    case "PlainText":
      return <span key={key}>{node.text}</span>
    case "SoftBreak":
      return <span key={key}> </span>
  }
  return undefined
}

export async function getStaticPaths() {
  let paths = []
  Object.keys(TARGE_FILE_LIST).map((kind, id) =>
    TARGE_FILE_LIST[kind].map((fileName) => {
      paths = [
        ...paths,
        {
          params: {
            name: fileName,
          },
        },
      ]
    })
  )
  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { name } = params
  const basic = require(`raw-loader!../../../src/${name}`)
  return {
    props: {
      inputString: basic.default,
    },
  }
}

function PlayIcon({ height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={height}
      style={{ display: "block" }}
    >
      <path
        d="M 5 3 L 19 12 L 5 21 Z"
        fill="transparent"
        strokeWidth="2"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray=""
      ></path>
    </svg>
  )
}
