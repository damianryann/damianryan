interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  children: React.ReactNode;
  decorative?: boolean;
}

export default function Typography(props: TypographyProps) {
  const { variant, children, decorative } = props;

  const Element: any = decorative ? 'span' : variant;

  const output = (
    <Element className={decorative && variant}>{children}</Element>
  );

  return output;
}
