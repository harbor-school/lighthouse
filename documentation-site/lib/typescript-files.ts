import * as tsdoc from "@microsoft/tsdoc"

export function getTypescriptFileData(name) {
  const basic = require(`raw-loader!../../src/${name}/${name}.tsx`)
  const configuration = new tsdoc.TSDocConfiguration()
  configuration.addTagDefinition(
    new tsdoc.TSDocTagDefinition({
      tagName: "@sampleCustomBlockTag",
      syntaxKind: tsdoc.TSDocTagSyntaxKind.InlineTag,
      allowMultiple: true,
    })
  )
  const tsdocParser = new tsdoc.TSDocParser(configuration)
  const parserContext = tsdocParser.parseString(basic.default)
  return parserContext
}
