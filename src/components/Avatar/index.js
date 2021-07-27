import React, { useEffect, useRef, useState } from 'react';
import style from './Avatar.module.scss';

const PLACEHOLDER_IMAGE_SRC =
  'https://static.productionready.io/images/smiley-cyrus.jpg';

export default function Avatar({
  src = PLACEHOLDER_IMAGE_SRC,
  alt,
  ...otherProps
}) {
  const [imageSrc, setImageSrc] = useState(src);
  const imageRef = useRef(new Image());

  useEffect(() => {
    if (src && imageRef.current) {
      imageRef.current.src = src;
      imageRef.current.onerror = () => {
        setImageSrc(PLACEHOLDER_IMAGE_SRC);
      };
    } else {
      setImageSrc(PLACEHOLDER_IMAGE_SRC);
    }

    return () => {
      imageRef.current = null;
    };
  }, [src]);

  return (
    <img src={imageSrc} alt={alt} {...otherProps} className={style.Avatar} />
  );
}
