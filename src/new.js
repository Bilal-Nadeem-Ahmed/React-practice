export default function New({ name }) {
  if (name) {
    return <div>Hello {name}</div>;
  } else {
    return <div>Ay stranger!</div>;
  }
}
