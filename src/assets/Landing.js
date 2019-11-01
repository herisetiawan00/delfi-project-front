import React, { Component } from 'react'
import { Alert, Text, View, ActivityIndicator, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import style from '../style/landingStyle'
import mobxStore from '../secure/mobxStore'

export default class Landing extends Component {
    state = {
        loading: true,
        connect: true,
        host: "",
        port: "",
    }
    componentDidMount() {
        this.setState({
            connect: mobxStore.getStatus(),
            loading: false
        })
    }
    serverButton = () => {
        const { host, port } = this.state
        const ipFormat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        if (port > 0) {
            if (ipFormat.test(host)) {
                mobxStore.upServer(host, port)
                console.log(mobxStore.getServer())
                this.serverTest()
            } else {
                Alert.alert('Host not valid', 'Please enter valid host !!\n' + host)
            }
        } else {
            Alert.alert('Port not valid', 'Please enter valid port !!\n' + port)
        }
    }
    serverTest = async () => {
        try {
            let response = await fetch(mobxStore.getServer() + '/test', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            let responseJson = await response.json();
            if (responseJson.code == 200) {
                console.log('Connected')
                mobxStore.upStatus(true)
                Alert.alert('Success', 'You will redirect to landing page')
                this.setState({
                    connect: true
                })
            } else {
                console.log('Bad Server')
                Alert.alert('Failed', 'Bad Server')
            }
        } catch (err) {
            console.log(err)
            Alert.alert('Failed', 'Server not response')
        }
    }
    render() {
        if (this.state.loading) {
            return (
                <View style={style.loadingCon}>
                    <StatusBar hidden />
                    <ActivityIndicator style={style.loading} color='white' size='large' />
                </View>
            )
        }
        if (!this.state.connect) {
            return (
                <View style={style.loadingCon}>
                    <StatusBar hidden />
                    <Text style={style.formText}>
                        Enter Host :
                </Text>
                    <TextInput
                        style={style.formField}
                        placeholder='ex: 0.0.0.0'
                        underlineColorAndroid='white'
                        onChangeText={(host) => this.setState({ host })}
                        value={this.state.host}
                        keyboardType='numeric'
                        maxLength={15}
                    />
                    <Text style={style.formText}>
                        Enter Port :
                </Text>
                    <TextInput
                        style={style.formField}
                        placeholder='ex: 3000'
                        underlineColorAndroid='white'
                        onChangeText={(port) => this.setState({ port })}
                        value={this.state.port}
                        keyboardType='numeric'
                        maxLength={4}
                    />
                    <TouchableOpacity style={style.refButton} onPress={this.serverButton}>
                        <View style={style.refCon}>
                            <Text style={style.refText}>
                                Refresh
                    </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }
        return (
            <View style={style.landingCon}>
                <StatusBar hidden />
                <Text style={style.logo}>D</Text>
                <View style={style.signCon}>
                    <TouchableOpacity style={style.signButton} onPress={mobxStore.upNav('Login')}>
                        <View style={style.signTextCon}>
                            <Text style={style.signText}>
                                Login
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={style.signMargin} />
                    <TouchableOpacity style={style.signButton} onPress={mobxStore.upNav('Register')}>
                        <View style={style.signTextCon}>
                            <Text style={style.signText}>
                                Register
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}