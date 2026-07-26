import { useState, useEffect } from 'react';

export function useWindowSize() {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    // Escuchar el cambio de tamaño
    window.addEventListener('resize', handleResize);

    // Limpiar el evento cuando el componente se desmonte
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}