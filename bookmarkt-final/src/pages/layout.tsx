export default function RootLayout({
    children,
}:{
    children: React.ReactNode;
}) {
    return (
        <html>
            <head>

            </head>
            <body>
                <div>
                    Layout test
                </div>
                {children}
            </body>
        </html>
    )
}