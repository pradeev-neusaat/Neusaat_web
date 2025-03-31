import "../app/styles/Navbar.module.css"; // Import global styles
import Navbar from "../app/components/Navbar";
import "../app/globals.css"; // Import global styles


export const metadata = {
  title: "Neusaat - AI Solutions",
  description: "Transforming AI with Neusaat",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
