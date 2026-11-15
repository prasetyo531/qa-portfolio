export default function BrandIcon({ name }) {
  return (
    <img
      className={`brand-icon brand-icon--${name}`}
      src={`${import.meta.env.BASE_URL}icons/${name}.svg`}
      alt=""
      aria-hidden="true"
    />
  );
}
