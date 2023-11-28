import Home from './home';


export default function Page() {

  const isServer = typeof window === 'undefined';
  console.log("🚀 ~ Home ~ isServer:", isServer)
  console.log(`Am I on the server side? ${isServer ? 'Yes' : 'No'}`);

  return (
      <main>
          <Home />
      </main>
  )
}
