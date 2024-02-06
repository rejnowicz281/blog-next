import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Blog",
    description: "Blah",
};

export type RootLayoutProps = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
    return (
        <html className="h-full" lang="en">
            <body className="min-h-full flex flex-col bg-zinc-900 text-white text-xl">{children}</body>
        </html>
    );
}
