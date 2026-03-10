function DropdownItem({ 
  item, 
  isActive, 
  onSelect 
}: { 
  item: string; 
  isActive: boolean; 
  onSelect: () => void 
}) {
  return (
    <li 
      className={isActive ? "active" : ""} 
      style={isActive ? { color: "#5380F7" } : {}}
      onClick={onSelect}
    >
      <a href="#">{item}</a>
    </li>
  );
}

export default DropdownItem