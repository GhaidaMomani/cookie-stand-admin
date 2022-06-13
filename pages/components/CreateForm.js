import React from 'react'

function CreateForm(props) {
  return (
    <form onSubmit={props.formHandle} className=" bg-[#FA8072] rounded-lg w-2/3 m-7 container mx-auto  text-xl font-medium text-slate-700">
    <h1 className="text-center p-3">Create Cookie Stand</h1>
    <label className="after:content-['*'] after:ml-0.5 after:text-red-500  text-sm font-medium text-slate-700 ">
      Location
      <input
        name="location"
        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500  w-3/4 rounded-md sm:text-sm focus:ring-1"
        placeholder="Cookie Stand Location"
        type="text"
      ></input>
    </label>

    <div className="flex items-center content-center ">
    
    
   
    <label className="block p-5">
      <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
      Minimum Customer/ hour
      </span>
      <input
        type="number"
        name="min_number"
        className="w-full  mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-1/4 rounded-md sm:text-sm focus:ring-1"
        placeholder="0.0"
      />
    </label>

    <label className="block p-5">
    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
      Maximum Customer/ hour
      </span>
      <input
        type="number"
        name="max_number"
        className="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-1/4 rounded-md sm:text-sm focus:ring-1"
        placeholder="0.0"
      />
    </label>

    <label className="block p-5">
    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
      Avrage Cookies per sale
      </span>
      <input
        type="number"
        name="avg"
        className=" w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-1/4 rounded-md sm:text-sm focus:ring-1"
        placeholder="0.0"
      />
    </label>

    
        
          <button className=" m-3 h-3/4 w-1/4 bg-[#D15C51]  hover:bg-sky-700 rounded-xl pt-2" type='submit'  >
              Create
          </button>
         
      
    </div>


  </form>
  )
}

export default CreateForm