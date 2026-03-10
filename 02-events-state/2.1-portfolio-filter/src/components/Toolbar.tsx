interface ToolbarProps {
  filters: string[];
  selected: string;
  onSelectFilter: (filter: string) => void;
}

function Toolbar({ filters, selected, onSelectFilter }: ToolbarProps) {
    return (
        <div className="toolbar">
        {filters.map((filter) => (
            <button
            key={filter}
            className={filter === selected ? "selected" : ""}
            onClick={() => onSelectFilter(filter)}
            >
            {filter}
            </button>
        ))}
        </div>
    )
}

export default Toolbar