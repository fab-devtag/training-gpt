interface Props {
  title: string;
  handleFilter: (title: string) => void;
}

const FilterButton = ({ title, handleFilter }: Props) => {
  return <button onClick={() => handleFilter(title)}>{title}</button>;
};

export default FilterButton;
