import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <h1>Relative Path</h1>
      <img src="/bg.jpg" />
      <h1>Exact Path</h1>
      <img src="http://localhost:3000/bg.jpg" />
    </div>
  );
}
