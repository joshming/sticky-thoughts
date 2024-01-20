import Image from "next/image";

export default function root() {
  return (
    <main>
      <div>
        <h1>Hello World</h1>
        <LoginBox/>
      </div>
    </main>
  );
}

export function LoginBox() {
  return ( 
    <div>
      <h2>You must login to access our site.</h2>
    </div>
  );
}
