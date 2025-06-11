import React from 'react';
import './AboutModal.css';

const AboutModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="about-backdrop">
      <div className="about-modal">
        <button className="about-close-btn" onClick={onClose}>
          &times;
        </button>
        <h2 className="about-title">About This Project</h2>
        <p>
          Welcome to the Algorithm Visualizer — an interactive web application designed to help you understand how different algorithms work through dynamic visualizations.
        </p>
        <ul>
          <li><strong>Sorting Algorithms:</strong> Visualize Bubble Sort, Merge Sort, and Quick Sort.</li>
          <li><strong>Pathfinding Algorithms:</strong> See Dijkstra in action on a grid.</li>
          <li><strong>Prime Number Generation:</strong> Explore the Sieve of Eratosthenes.</li>
          <li><strong>Binary Search:</strong> Learn efficient search over sorted arrays.</li>
        </ul>
        <p>This tool is great for students, educators, and developers to understand algorithms visually.</p>
      </div>
    </div>
  );
};

export default AboutModal;
