// loader-app.test.js
import { LoaderComponent } from '../components/loaderComponent';
import { screen, waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';

beforeEach(() => {
  document.body.innerHTML = ''; 
});

afterEach(() => {
  jest.runOnlyPendingTimers(); 
});

  
test('muestra el contenido después de la carga', async () => {
  document.body.innerHTML = `<loader-component></loader-component>`;
  // Avanza el tiempo simulado por setTimeout en el componente
  jest.runAllTimers();
  await waitFor(() => {
    expect(screen.getByText('Order your favourite food!')).toBeInTheDocument();
  });
});