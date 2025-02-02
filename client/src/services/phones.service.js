import axios from "axios"

class PhonesService {
    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}` })
    }

    getPhones = () => {
        return this.api.get("/telefonos")
    }


}

const phonesService= new PhonesService()

export default phonesService