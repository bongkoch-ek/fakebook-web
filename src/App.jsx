import Header from "./components/Header"
import { HomeIcon } from "./icons"

function App() {

  return (
    <div className="min-h-screen bg-yellow-100">
    <Header />
    <main className="relative flex bg-gray-100 border pt-14">
      {/* left */}
      <div className="fixed top-14 h-full w-[350px] 
      overflow-auto flex flex-col gap-2 min-w-[220px] max-xl:w-[200px]">
        <button className="btn bg-opacity-0 border-none shadow-none justify-start gap-2 hover:bg-opacity-20 ">
          <HomeIcon className='w-8' />
          Andy Codecamp
        </button>
        <button className="btn bg-opacity-0 border-none shadow-none justify-start gap-2 hover:bg-opacity-20 ">
          <HomeIcon className='w-8' />
          Andy Codecamp
        </button>
        <button className="btn bg-opacity-0 border-none shadow-none justify-start gap-2 hover:bg-opacity-20 ">
          <HomeIcon className='w-8' />
          Andy Codecamp
        </button>
        <button className="btn bg-opacity-0 border-none shadow-none justify-start gap-2 hover:bg-opacity-20 ">
          <HomeIcon className='w-8' />
          Andy Codecamp
        </button>
        <div className="divider"></div>
      </div>
      {/* center */}
      <div className="w-[680px] mx-auto min-h-screen my-3 flex flex-col gap-4 rounded-lg ">
        
      </div>
      {/* right */}
      <div className="fixed top-14 right-0 h-full w-[350px] overflow-auto flex flex-col gap-2
      pt-4 px-2 max-xl:hidden">
        <div className="btn btn-xl m-10">Menu Item</div>
        <div className="btn btn-xl m-10">Menu Item</div>
        <div className="btn btn-xl m-10">Menu Item</div>
        <div className="btn btn-xl m-10">Menu Item</div>
        <div className="btn btn-xl m-10">Menu Item</div>
        <div className="btn btn-xl m-10">Menu Item</div>
        <div className="btn btn-xl m-10">Menu Item</div>
        <div className="btn btn-xl m-10">Menu Item</div>
        <div className="btn btn-xl m-10">Menu Item</div>
        <div className="btn btn-xl m-10">Menu Item</div>
        <div className="btn btn-xl m-10">Menu Item</div>
        <div className="btn btn-xl m-10">Menu Item</div>
        <div className="btn btn-xl m-10">Menu Item</div>
        <div className="btn btn-xl m-10">Menu Item</div>
      </div>
    </main>
  </div>
  )
}

export default App
