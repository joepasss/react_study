import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'submit' | 'reset' | 'button' | undefined;
  isDisabled?: boolean;
  version?: Version;
  children: ReactNode;
}

enum Version {
  primary = 'primary',
  secondary = 'secondary',
}

export const Button: FC<Props> = ({
  children,
  isDisabled = false,
  type = 'submit',
  version = Version.primary,
}) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
};
