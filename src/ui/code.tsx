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

export const Code = async ({ code, lang = "ts" }: CodeProps) => {
    const html = createTheme.codeToHtml(code.trim(), {
        lang,
        theme: "css-variables",
    })
    return (
        <div className="overflow-x-hidden">
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    )
}
