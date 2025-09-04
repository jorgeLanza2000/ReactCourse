import './PreviousSearches.css';

interface Props {
  title: string;
  searches: string[];
  onLabelClicked: (term: string) => void;
}
export default function PreviousSearches({
  title,
  searches,
  onLabelClicked, //! forma de definir output
}: Props) {
  return (
    <div className='previous-searches'>
      <h2>{title}</h2>
      <ul className='previous-searches-list'>
        {searches.map((term) => (
          <li
            key={term}
            onClick={() => {
              onLabelClicked(term);
            }}
          >
            {term}
          </li>
        ))}
      </ul>
    </div>
  );
}
