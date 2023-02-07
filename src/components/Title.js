export default function Title({classe,texte}) {
  return (
    <div>
      <h1 className={!classe ? "texte-center" :classe}>{!texte ? "TechnoLab ISTA": texte}</h1>
    </div>
  );
}
