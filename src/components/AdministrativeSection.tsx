const AdministrativeSection = () => {
  return (
    <div className="w-full mt-4">
      <table className="w-full border-collapse">
        <tbody>
          <tr>
            <td className="bg-gray-100 border border-gray-300 p-2 w-1/4">Unidad administrativa</td>
            <td className="border border-gray-300 p-2"></td>
          </tr>
          <tr>
            <td className="bg-gray-100 border border-gray-300 p-2">Área generadora de la documentación</td>
            <td className="border border-gray-300 p-2"></td>
          </tr>
          <tr>
            <td className="bg-gray-100 border border-gray-300 p-2">Fondo documental</td>
            <td className="border border-gray-300 p-2">PROCURADURÍA FEDERAL DE LA DEFENSA DEL TRABAJO (PROFEDET)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdministrativeSection;