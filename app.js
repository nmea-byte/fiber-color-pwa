const colors = ["Blue","Orange","Green","Brown","Slate","White","Red","Black","Yellow","Violet","Rose","Aqua"];

document.getElementById('showColor').addEventListener('click', () => {
  const n = parseInt(document.getElementById('fiberNumber').value, 10);
  if (isNaN(n) || n < 1 || n > 1728) {
    document.getElementById('result').innerText = "Please enter a valid number (1–1728).";
    return;
  }

  // 12-fiber tubes, 12 tubes per set, 12 sets (12*12*12 = 1728)
  const fiberIndex = (n - 1) % 12;                 // 0..11
  const tubeIndex  = Math.floor((n - 1) / 12) % 12; // 0..11
  const setIndex   = Math.floor((n - 1) / 144) % 12;// 0..11  (which 12-tube block)
  const ringCount  = Math.floor((n - 1) / 144);     // 0..11  (0=no stripe, 1=1 ring, ...)

  const fiberColor = colors[fiberIndex];
  const tubeColor  = colors[tubeIndex];

  const stripeLabel = ringCount === 0 ? "no stripe" : (ringCount === 1 ? "1 ring" : `${ringCount} rings`);

  document.getElementById('result').innerHTML = `
    <strong>Fiber #:</strong> ${n}<br>
    <strong>Tube #:</strong> ${Math.floor((n - 1) / 12) + 1}<br>
    <strong>Tube Color:</strong> ${tubeColor}<br>
    <strong>Tube Stripe:</strong> ${stripeLabel}<br>
    <strong>Fiber in Tube:</strong> ${fiberIndex + 1}<br>
    <strong>Fiber Color:</strong> ${fiberColor}
  `;
});
