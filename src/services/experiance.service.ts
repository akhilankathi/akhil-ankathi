import axios from "axios"

export const getExperianceList = () => {
    const APIURL = import.meta.env.VITE_APIURI
    let result = axios.get(`${APIURL}/experiance`)

    try {
        return result.then((data: any) => {
            if (data && data?.data)
                return data.data
        }).catch((err: any) => {
            console.log(err)
        }).finally(() => {
            // console.log('finally')
        })

    } catch (error) {

    } finally {

    }
}