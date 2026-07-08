    const img = document.getElementById('hero-image');
    const originalSrc = img.src;
    const hoverSrc = 'assets/smilingEsh.jpg'; // Replace with the path to your hover image
    const clickHoldSrc = 'assets/kissEsh.jpg'; // Replace with the path to your click image
    const clickReleaseSrc = 'assets/shyEsh.jpg'; // Replace with the path to your click release image

    img.addEventListener('mousedown', () => {
      img.src = clickHoldSrc;
    });

    img.addEventListener('mouseup', () => {
      img.src = clickReleaseSrc;
    });

    img.addEventListener('mouseover', () => {
      img.src = hoverSrc;
    });

    img.addEventListener('mouseout', () => {
      img.src = originalSrc;
    });
