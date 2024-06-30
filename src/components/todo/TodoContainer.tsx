
const TodoContainer = ()=>{
    return (
        <div>
        <div className="flex justify-between mb-5 ">
            <h1>AddTodoModal</h1>
            <h1>TodoFilter</h1>
        </div>
        <div className="bg-primary-gradient w-full h-full rounded-xl  p-[5px]">
            <div className="bg-red-500 p-5 w-full h-full rounded-lg space-y-3">
            {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md">
            <p>There is no task pending</p>{' '}
          </div> */}            
            </div>
        </div>
        </div>
    )
}

export default TodoContainer;