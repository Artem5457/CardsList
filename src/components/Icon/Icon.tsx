import React from 'react';

type Props = {
  url: string,
  // eslint-disable-next-line react/require-default-props
  widthValue?: number,
  // eslint-disable-next-line react/require-default-props
  heightValue?: number,
};

export const Icon: React.FC<Props> = ({
  url,
  widthValue,
  heightValue,
}) => {
  return (
    <div
      style={
        {
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: widthValue,
          height: heightValue,
          backgroundImage: `url(${url})`,
        }
      }
    />
  );
};
