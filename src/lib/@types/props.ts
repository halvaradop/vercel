import { BundledLanguage } from "shiki"

export interface LayoutProps {
    children: React.ReactNode
}

export interface CodeProps {
    code: string
    lang?: BundledLanguage
    fileName?: string
}
