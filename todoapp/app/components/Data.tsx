import useStore from "@/store/store";


const Data = () =>  {
    const objs = useStore(state => state.todos)
    console.log(objs)

}

export default Data