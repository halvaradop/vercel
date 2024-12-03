export const mdx = {
    installation: `
npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx
# or
pnpm add @next/mdx @mdx-js/loader @mdx-js/react @types/mdx
    `,
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

export const deploy = {
    installation: `
npm i -g vercel@latest
# or
pnpm add -g vercel@latest
    `,
    link: `
vercel link
 ? Set up "~\path" ?
 ? Which scope should contain your project ?
 ? Link to existing project ?
 ? What's your project's name ?
    `,
    build: `
vercel build
    `,
}
