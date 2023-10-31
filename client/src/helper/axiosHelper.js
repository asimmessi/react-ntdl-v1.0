import axios from "axios";

const apiEp = "http://localhost:8000/api/v2/task";

export const postData = async (obj) => {
  try {
    const { data } = await axios.post(apiEp, obj);

    return data;
  } catch (error) {
    console.log(error);
  }
};


export const getAllTask = async() =>{
  try{
    const {data} = await axios.get(apiEp);
    return data;
  }
  catch(error)
  {
    console.log(error);
  }
}

export const updateTask = async(obj)=>{
  try{
    const {data} = await axios.patch(apiEp, obj);
    return data;
  }

  catch(error){
    console.log(error);
  }
}


export const deleteTasks = async(_id) =>{

  try{
    const {data} = await axios.delete(apiEp, {data: _id});
    return data;

  }
  catch(error){
    console.log(error);
  }

}


