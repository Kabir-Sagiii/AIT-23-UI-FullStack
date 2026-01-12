import "./AdCategories.css";
function AdCategories({ className, title, description, size }) {
  return (
    <div className={`${className} backgroundProps`}>
      <h1 style={{ fontSize: size }}>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default AdCategories;
