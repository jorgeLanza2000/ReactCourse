import './BuscadorBtn.css';
interface Props {
  hasButton: boolean;
  placeholder: string;
  btnText?: string;
}
export default function BuscadorBtn({
  hasButton,
  placeholder,
  btnText,
}: Props) {
  return (
    <div className='search-container'>
      <input type='text' placeholder={placeholder} />
      {hasButton && btnText && <button type='button'>{btnText}</button>}
    </div>
  );
}
