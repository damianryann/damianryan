import clsx from 'clsx';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  children: React.ReactNode;
  className?: string;
  decorative?: boolean;
}

export default function Typography(props: TypographyProps) {
  const { variant, children, className, decorative } = props;

  const Element: any = decorative ? 'span' : variant;

  const output = (
    <Element
      className={clsx({
        [variant]: decorative,
        [String(className)]: className
      })}>
      {children}
    </Element>
  );

  return output;
}
