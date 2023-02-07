export default function Thermos({ temp }) {
  return (
    <div>
      <h1>{temp >= 100 ? "l'eau bout" : "l'eau ne bout pas"}</h1>
    </div>
  );
}
