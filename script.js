//your JS code here. If required.
 document.addEventListener('DOMContentLoaded', function () {
      const container = document.getElementById('color-board');

      // Create 800 boxes dynamically
      for (let i = 0; i < 800; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        container.appendChild(square);
      }

      // Add event listeners for hover and transition
      const squares = document.querySelectorAll('.square');
      squares.forEach((square) => {
        square.addEventListener('mouseover', function () {
          this.style.backgroundColor = 'royalblue';
        });

        square.addEventListener('mouseout', function () {
          setTimeout(() => {
            this.style.backgroundColor = 'lightgray';
          }, 1000);
        });
      });
    });