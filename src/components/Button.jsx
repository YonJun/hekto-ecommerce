import tw, { css } from "twin.macro";

/**
 * @typedef ButtonProps
 * @prop {"primary"|"secondary"} [color]
 * @prop {"xs"|"sm"|"md"|"lg"} [size]
 * @prop {boolean} [fullWidth]
 */
/**
 * @function Button
 * @param { React.HTMLProps<HTMLButtonElement> & ButtonProps} props
 */
export const Button = (props) => {
  const { color, size, fullWidth, ...rest } = props;
  return (
    <button
      {...rest}
      css={[
        tw`rounded py-2 px-8 bg-my-pink text-white hover:bg-pink-600 focus:(outline-none ring-2 ring-pink-500 ring-opacity-50)`,
        fullWidth && tw`w-full`,
        size === "xs" && tw`text-xs`,
        size === "sm" && tw`text-sm`,
        size === "md" && tw`text-base`,
        size === "lg" && tw`text-lg`,
        color === "secondary" &&
          css`
            ${tw`hover:bg-green-500 focus:ring-green-400`}
            background-color: #08d15f;
          `,
      ]}
    />
  );
};
const e = () => <button />;
