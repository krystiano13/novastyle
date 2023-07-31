import React from "react";

interface FooterButtonInterface {
  src: string;
  title: string;
}

const FooterButton: React.FC<FooterButtonInterface> = ({ src, title }) => {
  return (
    <button className="footerButton">
      <img src={src} alt={title} />
      <span>{title}</span>
    </button>
  );
};

export { FooterButton };
