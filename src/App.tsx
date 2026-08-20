import { clientConfig } from './config/client';
import Template1 from './templates/Template1/Template1';
import Template2 from './templates/Template2/Template2';
import Template3 from './templates/Template3/Template3';
import Template4 from './templates/Template4/Template4';

function App() {
  // Función que decide qué template mostrar
  const renderTemplate = () => {
    switch (clientConfig.templateId) {
      case 'template-1':
        return <Template1 />;
      case 'template-2':
        return <Template2 />;
      case 'template-3':
        return <Template3 />;
      case 'template-4':
        return <Template4 />;
      default:
        return <Template1 />; // Fallback por si hay un error
    }
  };

  return (
    <div className="w-full min-h-screen">
      {renderTemplate()}
    </div>
  );
}

export default App;