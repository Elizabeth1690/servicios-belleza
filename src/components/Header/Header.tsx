const Header = () => {
  return (
    <div>
      <h2>Seleccionar servicio</h2>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-colorprogresbar h-2.5 rounded-full"
          style={{ width: "6%" }}
        ></div>
      </div>
    </div>
  );
};

export default Header;
