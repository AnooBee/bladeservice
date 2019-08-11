import axios from 'axios'

class BladeService {

    retriveAllBlades() {
        return axios.get('http://localhost:8080/v1/blades');
    }

    deleteBlade(id) {
        console.log("in service...deleteblade")
        return axios.delete(`http://localhost:8080/v1/blades/${id}`);
    }

    retrieveBlade(id) {
        return axios.get(`http://localhost:8080/v1/blades/${id}`);
    }

    updateBlade(id, blade) {
        console.log("in service...updateBlade")

        return axios.put(`http://localhost:8080/v1/blades/${id}`, blade);
    }

    createBlade(blade) {
        console.log("in service...createBlade")

        return axios.post(`http://localhost:8080/v1/blades`, blade);
    }
}

export default new BladeService ()
