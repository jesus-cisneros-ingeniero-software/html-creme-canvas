const DocumentFooter = () => {
  return (
    <div className="w-full mt-8 border-t border-gray-300 pt-4">
      <div className="grid grid-cols-4 gap-4 text-center">
        <div>
          <p className="text-sm text-gray-600">Antecedente</p>
          <p>711-2023</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Junta/Tribunal/Juzgado</p>
          <p>TLFN4</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Expediente</p>
          <p>711</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Código QR</p>
          <p>###</p>
        </div>
      </div>
    </div>
  );
};

export default DocumentFooter;