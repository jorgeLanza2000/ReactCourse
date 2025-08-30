import './PreviousSearches.css';

interface Props {
  title: string;
  searches: string[];
}
export default function PreviousSearches({ title, searches }: Props) {
  return (
    <div className='previous-searches'>
      <h2>{title}</h2>
      <ul className='previous-searches-list'>
        {searches.map((search) => (
          <li key={search}>{search}</li>
        ))}
      </ul>
    </div>
  );
}
