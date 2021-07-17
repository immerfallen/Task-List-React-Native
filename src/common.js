import {Alert, Platform} from 'react-native'

const server = Platform.OS === 'ios' ? 'http://localhost:3000' : 'http://192.168.15.102:3000'

function showError(err) {
    Alert.alert('Ops, ocorreu um problema', `Mensagem: ${err}`)
}

function showSuccess(msg) {
    Alert.alert('Sucesso!!', `Mensagem: ${msg}`)
}

export { server, showError, showSuccess}