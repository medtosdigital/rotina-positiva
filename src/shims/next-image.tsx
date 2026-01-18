import * as React from "react";
export type NextImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  width?: number | string;
  height?: number | string;
  priority?: boolean;
};
export default function Image({
  src,
  alt,
  width,
  height,
  priority,
  ...rest
}: NextImageProps) {
  // Minimal Vite-compatible shim for next/image.
  // Renders a plain <img> while keeping the same API shape used in the codebase.
  const loading = rest.loading ?? (priority ? "eager" : "lazy");

  return (
    <img
      src={src}
      alt={alt ?? ""}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      {...rest}
    />
  );
}