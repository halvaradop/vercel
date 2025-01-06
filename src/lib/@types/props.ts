import { BundledLanguage } from "shiki"

export interface LayoutProps {
    children: React.ReactNode
}

export interface CodeProps {
    children?: string
    lang?: BundledLanguage
    fileName?: string
}
