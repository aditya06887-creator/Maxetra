export default MenuItem = ({ title, desc }) => (
    <a
      href="#"
      className="group flex items-start justify-between gap-3 rounded-md p-2 hover:bg-gray-50 transition"
    >
      <div>
        <p className="font-medium text-sm group-hover:text-blue-600">
          {title}
        </p>
        <p className="text-xs text-gray-500">
          {desc}
        </p>
      </div>
  
      <ChevronRightIcon className="w-4 h-4 text-gray-400 mt-1 group-hover:text-blue-600" />
    </a>
  );
  