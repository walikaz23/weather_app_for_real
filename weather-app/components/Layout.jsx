import { AuroraBackground } from "@components/Background";

const Layout = ({ children }) => {
  return (
    <AuroraBackground>
      {children}
    </AuroraBackground>
  );
};

export default Layout;