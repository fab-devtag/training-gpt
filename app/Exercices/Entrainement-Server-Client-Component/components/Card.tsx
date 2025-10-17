import { ReactNode } from "react";

export const Card = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

const Header = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

const Title = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

const SubTitle = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

const Image = ({ src }: { src: string }) => {
  return <img src={src} />;
};

const Footer = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

Card.Header = Header;
Card.Title = Title;
Card.SubTitle = SubTitle;
Card.Image = Image;
Card.Footer = Footer;
