import { useRouter } from "next/router";
import { default as NextLink } from "next/link";
import { cloneElement } from "react";

/**
 * Renders a <Link /> component
 * @param  {{ activeClassName?: string; children: JSX.Element; }} props
 */
const Link = ({ href, children, activeClassName }) => {
  const router = useRouter();

  let className = children.props.className || "";
  if (router.pathname === href) {
    className = `${className} ${activeClassName}`;
  }

  return (
    <NextLink href={href}>{cloneElement(children, { className })}</NextLink>
  );
};

export default Link;
