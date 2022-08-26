import { ReactElement } from "react";
export interface LayoutProps {
  children: ReactElement | ReactElement[];
}

function Layout({ children }: LayoutProps) {
  return <div>{children}</div>;
}

export default Layout;
