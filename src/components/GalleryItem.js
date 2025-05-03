'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/GalleryItem.module.css';

export default function GalleryItem({ image, alt }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.imageWrapper}>
        <Image 
          src={image} 
          alt={alt} 
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`${styles.image} ${isHovered ? styles.hovered : ''}`}
        />
      </div>
    </div>
  );
}