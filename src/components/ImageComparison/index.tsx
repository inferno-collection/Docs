import {useEffect, useState} from 'react';
import styles from './styles.module.css';

type ImageComparisonProps = {
  after: string;
  before: string;
};

export default function ImageComparison({after, before}: ImageComparisonProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(50);

  useEffect(() => {
    if (isDragging) {
      return;
    }

    const interval = window.setInterval(() => {
      setPosition((currentPosition) => (currentPosition <= 50 ? 80 : 20));
    }, 4500);

    return () => window.clearInterval(interval);
  }, [isDragging]);

  return (
    <figure className={styles.comparison}>
      <div className={styles.images}>
        <img alt="After" src={after} />
        <div
          className={`${styles.after} ${isDragging ? styles.dragging : ''}`}
          style={{clipPath: `inset(0 ${100 - position}% 0 0)`}}>
          <img alt="Before" src={before} />
        </div>
        <div
          className={`${styles.divider} ${isDragging ? styles.dragging : ''}`}
          style={{left: `${position}%`}}
          aria-hidden="true">
          <span className={styles.handle}>↔</span>
        </div>
        <div className={styles.labels} aria-hidden="true">
          <span>Before</span>
          <span>After</span>
        </div>
        <input
          aria-label="Reveal"
          className={styles.imageControl}
          max="100"
          min="0"
          onChange={(event) => setPosition(Number(event.target.value))}
          onPointerCancel={() => setIsDragging(false)}
          onPointerDown={() => setIsDragging(true)}
          onPointerUp={() => setIsDragging(false)}
          type="range"
          value={position}
        />
      </div>
    </figure>
  );
}
