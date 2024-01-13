import "./globals.css";

export const metadata = {
    title: "Blog",
    description: "Blah",
};

export default function RootLayout({ children }) {
    return (
        <html className="h-full" lang="en">
            <body className="min-h-full flex flex-col bg-zinc-900 text-white text-xl">{children}</body>
        </html>
    );
}
