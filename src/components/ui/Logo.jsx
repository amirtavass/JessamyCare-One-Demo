function Logo() {
  return (
    <div className="flex items-center cursor-pointer hover:scale-105 transition-all duration-500 space-x-3">
      <img
        src="/logo.png"
        alt="Jessamy Care Logo"
        className="h-24 md:h-32 w-auto"
      />
    </div>
  );
}

export default Logo;
