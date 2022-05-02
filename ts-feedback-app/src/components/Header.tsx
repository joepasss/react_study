import { FC } from 'react';

export interface Props {
  text?: string;
  bgColor?: string;
  textColor?: string;
}

export const Header: FC<Props> = ({
  text = 'FeedbackUI',
  bgColor = 'rgba(0, 0, 0, 0.4)',
  textColor = '#ff6a95',
}) => {
  const HeaderStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={HeaderStyles}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  );
};
