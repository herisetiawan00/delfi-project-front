import { observable } from 'mobx'

class MobxStore {
    @observable token = ""
    @observable host = ""
    @observable port = ""
    @observable tempId = ""
    @observable connect = false
    @observable navigate = 'Landing'

    //Connection Status
    upStatus(connect) {
        this.connect = connect
    }
    getStatus() {
        return this.connect
    }

    //Getting Token
    upToken(token) {
        this.token = token
    }
    getToken() {
        return this.token
    }

    //Server URL
    upServer(host, port) {
        this.host = host
        this.port = port
    }
    getServer() {
        return "http://" + this.host + ":" + this.port
    }

    //Temporary ID (Deleting/Updating User)
    upTempId(tempId) {
        this.tempId = tempId
    }
    getTempId() {
        return this.tempId
    }
    
    //Just Getting Host or Port
    getHost() {
        return this.host
    }
    getPort() {
        return this.port
    }

    //Navigator Manual
    upNav(navigate) {
        this.navigate = navigate
    }
    getNav() {
        return this.navigate
    }
}

const mobxStore = new MobxStore()
export default mobxStore