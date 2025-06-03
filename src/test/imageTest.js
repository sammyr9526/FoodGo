import './image-component.js';

test('renderiza el <img> con el src correcto', () => {
  document.body.innerHTML = `<image-component source="foto.png"></image-component>`;
  const el = document.querySelector('image-component');
  return el.updateComplete.then(() => {
    const img = el.shadowRoot.querySelector('img');
    expect(img).not.toBeNull();
    expect(img.getAttribute('src')).toBe('./src/assets/burguer_1.png');
  });
});

test('usa el size correcto para ancho y alto', () => {
  document.body.innerHTML = `<image-component source="./src/assets/burguer_1.png" size="50px"></image-component>`;
  const el = document.querySelector('image-component');
  return el.updateComplete.then(() => {
    const img = el.shadowRoot.querySelector('img');
    expect(img.style.width).toBe('50px');
    expect(img.style.height).toBe('50px');
  });
});

