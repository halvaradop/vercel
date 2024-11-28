export const mdx = {
    nextConfig: `
import type { NextConfig } from "next"
import createMDX from "@next/mdx"

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
}

const withMDX = createMDX({
  options: {},
})

export default withMDX(nextConfig)
`,
    mdxComponents: `
import type { MDXComponents } from "mdx/types"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...components }
}
`,
}
