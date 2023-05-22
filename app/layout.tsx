import "./globals.css";
import { Providers } from "@/app/providers";
import { ApolloWrapper } from "@/lib/apollo/apollo-wrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ApolloWrapper>{children}</ApolloWrapper>
        </Providers>
      </body>
    </html>
  );
}
