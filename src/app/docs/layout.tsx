import { LayoutProps } from "@/lib/@types/props"

const DocsLayout = ({ children }: LayoutProps) => {
    return <main className="w-10/12 mt-8 mb-20 mx-auto text-gray">{children}</main>
}

export default DocsLayout
