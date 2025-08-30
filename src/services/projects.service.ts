import axios from "axios"

export const getProjectsList = () => {
    const APIURL = import.meta.env.VITE_APIURI
    let result: any = axios.get(`${APIURL}/projects`)
    try {
       return result.then((data: any) => {
            if (data && data?.data)
                return data.data
        }).catch((err:any) => {
            console.log(err)
        }).finally(() => {
            // console.log('finally')
        })

    } catch (error) {

    } finally {

    }
}