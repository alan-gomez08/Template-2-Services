// src/App.tsx
import { clientConfig } from './config/client';
import Template1 from './templates/Template1/Template1';
import Template2 from './templates/Template2/Template2';

function App() {
  switch (clientConfig.templateId) {
    case 'template-1':
      return <Template1 data={clientConfig} />;
    
    case 'template-2':
      // Mantenemos la misma arquitectura: le pasamos la data como prop
      return <Template2 data={clientConfig} />;
      
    default:
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 text-2xl font-bold text-red-500">
          Error: Plantilla no encontrada
        </div>
      );
  }
}

export default App;