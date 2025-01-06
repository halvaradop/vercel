import { Children } from "react"
import { createCssVariablesTheme, createHighlighter } from "shiki"
import { CodeProps } from "@/lib/@types/props"

const cssVariables = createCssVariablesTheme({
    name: "css-variables",
    fontStyle: true,
    variablePrefix: "--shiki-",
})

const createTheme = await createHighlighter({
    langs: ["tsx", "ts", "js", "javascript", "typescript", "css", "html", "bash", "json"],
    themes: [cssVariables],
})

export const Code = async ({ children = "", lang = "ts" }: CodeProps) => {
    return Children.map(children, async (child) => {
        // @ts-ignore
        const convertToString = typeof child === "string" ? child.trim() : child?.props?.children?.trim()
        const html = createTheme.codeToHtml(convertToString, {
            lang,
            theme: "css-variables",
        })
        return (
            <div className="my-4 overflow-x-hidden">
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        )
    })
}
