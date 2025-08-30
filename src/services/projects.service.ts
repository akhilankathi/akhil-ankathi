import axios from "axios"

export const getProjectsList = () => {
  const APIURL = import.meta.env.VITE_APIURI
    let result = axios.get(`${APIURL}/projects`)

    try {
        result.then((data) => {
            console.log(data)
        }).catch((err) => {
            console.log(err)
        }).finally(()=>{
            console.log('finally')
        })

    } catch (error) {

    } finally {

    }
}