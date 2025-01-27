const DocumentDetails = () => {
  return (
    <div className="w-full mt-4">
      <table className="w-full border-collapse">
        <tbody>
          <tr>
            <td className="bg-gray-100 border border-gray-300 p-2">Nombre de la persona usuaria</td>
            <td className="border border-gray-300 p-2">MARIA CELIA LEON YESCAS</td>
          </tr>
          <tr>
            <td className="bg-gray-100 border border-gray-300 p-2">Nombre de la contraparte</td>
            <td className="border border-gray-300 p-2">AFORE XXI BANORTE, S.A. DE C.V. Y OTROS</td>
          </tr>
        </tbody>
      </table>
      <div className="grid grid-cols-3 mt-4 gap-0">
        <div className="border border-gray-300 p-4 text-center">
          <p className="font-semibold mb-2">Junta/Tribunal/Juzgado</p>
          <p className="text-2xl">TLFN4</p>
        </div>
        <div className="border border-gray-300 p-4 text-center">
          <p className="font-semibold mb-2">Número de expediente</p>
          <p className="text-2xl">711</p>
        </div>
        <div className="border border-gray-300 p-4 text-center">
          <p className="font-semibold mb-2">Año</p>
          <p className="text-2xl">2023</p>
        </div>
      </div>
    </div>
  );
};

export default DocumentDetails;