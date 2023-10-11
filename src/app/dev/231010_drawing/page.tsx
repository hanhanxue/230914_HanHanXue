'use client'

import React, { useEffect } from 'react';

const Drawing = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Set the background color
        ctx.fillStyle = 'blue';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Set the drawing styles
        ctx.fillStyle = 'green';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;

        // Define an array to store shapes
        const shapes = [
          { type: 'rectangle', x: 10, y: 10, width: 100, height: 100 },
          { type: 'line', x1: 10, y1: 10, x2: 110, y2: 110 },
        ];

        // Function to draw shapes
        const drawShape = (shape) => {
          if (shape.type === 'rectangle') {
            ctx.fillRect(shape.x, shape.y, shape.width, shape.height);
          } else if (shape.type === 'line') {
            ctx.beginPath();
            ctx.moveTo(shape.x1, shape.y1);
            ctx.lineTo(shape.x2, shape.y2);
            ctx.stroke();
          }
        }

        // Iterate over the shapes and draw them
        shapes.forEach(drawShape);
      }
    }
  }, []);

  return (
    <canvas
      id="canvas"
      style={{ backgroundColor: 'blue' }}
      width={typeof window !== 'undefined' ? window.innerWidth : 0}
      height={typeof window !== 'undefined' ? window.innerHeight : 0}
    >
      Canvas
    </canvas>
  );
};

export default Drawing;
