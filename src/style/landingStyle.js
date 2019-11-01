import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    loadingCon: {
        width: "100%",
        height: "100%",
        backgroundColor: '#B00020',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'center'
    },
    loading: {
        position: 'absolute',
    },
    container: {
        backgroundColor: '#B00020'
    },
    formText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    },
    formField: {
        color: 'white',
        width: '50%',
        textAlign: 'center',
        marginBottom: 20
    },
    refButton: {
        borderWidth: 1,
        borderColor: 'white',
        width: '30%',
        height: 30,
        borderRadius: 15,
    },
    refCon: {
        height: '100%',
        justifyContent: 'center',
        
    },
    refText: {
        color: 'white',
        textAlign: 'center'
    },
    landingCon: {
        width: "100%",
        height: "100%",
        backgroundColor: '#B00020',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    logo: {
        marginTop: '20%',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 350,
        elevation: 15
    },
    signCon: {
        height: '50%'

    },
    signButton: {
        borderWidth: 1,
        height: 50,
        width: 200,
        borderColor: 'white',
        borderRadius: 25,
        backgroundColor:'white'
    },
    signTextCon: {
        height: '100%',
        justifyContent: 'center'
    },
    signText: {
        color: '#B00020',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center'
    },
    signMargin: {
        margin: '5%'
    }
})

export default style