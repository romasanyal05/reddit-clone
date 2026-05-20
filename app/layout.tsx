import "./globals.css";

export const metadata = {
  title: "Reddit Clone",
  description: "Premium Reddit Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html lang="en">

      <body className="bg-gradient-to-br from-orange-100 via-white to-orange-200 dark:bg-black">

        {children}

      </body>

    </html>
  );
}