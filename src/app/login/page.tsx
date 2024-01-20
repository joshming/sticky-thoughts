export default function Login() {
    return (
      <main>
        <div className="flex justify-center">
          <div className="backdrop-blur-md bg-sage/50 absolute p-4 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-2xl">
            <h1 className="text-xl">Login</h1>
            <form method="POST" action="/">
                <div className="grid grid-cols-3 gap-4 m-5 justify-center">
                    <div>
                        <label htmlFor="">Username</label>
                    </div>
                    <div className="col-span-2">
                        <input className="w-full rounded-sm bg-tan" type="text" name="username" />
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                    </div>
                    <div className="col-span-2">
                        <input className="w-full rounded-sm bg-tan" type="password" name="password" />
                    </div>
                    <div></div>
                    <button className="bg-sage p-2 rounded-xl hover:bg-tan">Login</button>
                </div>
            </form>
          </div>
          
        </div>
      </main>
    );
  }