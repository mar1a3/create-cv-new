import React from 'react';
import './style.css';

export const Button = ({ icon, children, href, onClick }) => {
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} className="button" onClick={onClick}>
      {icon && <span>{icon}</span>}
      {children}
    </Tag>
  );
};
