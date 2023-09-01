import React, { useMemo, useEffect, useState, useCallback } from 'react';
import './style.less';

const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

const amount = 30;
const fontSize = 24;
const Watermark = (props) => {
  const { watermark } = props;
  const [watermarkImage, setWatermarkImage] = useState('');

  const textToImg = useCallback((name) => {
    const width = document.body.clientWidth;
    const height = document.body.clientHeight;

    const size = Math.ceil(Math.sqrt((width * height) / amount));
    canvas.width = size;
    canvas.height = size;
    context.translate(size / 2, size / 2);
    context.rotate((-45 * Math.PI) / 180);
    context.font = `${fontSize}px, Roboto, Microsoft YaHei, PingFang SC, sans-serif`;
    context.fillStyle = 'rgba(5, 27, 63, 0.2)';
    context.fillText(name, -size / 2, 0);

    return canvas.toDataURL('image/png');
  }, []);

  const onResize = useCallback(() => {
    watermark && setWatermarkImage(textToImg(watermark));
  }, [watermark]);

  const style = useMemo(
    () => ({
      backgroundImage: `url(${watermarkImage})`,
    }),
    [watermarkImage],
  );
  useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [onResize]);

  return <div id="watermark" style={style}></div>;
};

export default () => {

  return (
    <div>
      <Watermark watermark='watermark' />
    </div>
  );
};
