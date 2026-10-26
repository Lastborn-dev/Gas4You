import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
title: "Gas4You | Gas Refills Made Simple",
description:
"A simpler way to arrange your cooking gas refill, discover gas accessories, and explore gas services with Gas4You.",
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return (
<html lang="en">
<body>{children}</body>
</html>
);
}
