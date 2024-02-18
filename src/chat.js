function createConnection(serverUrl, roomId) {
    const responseString = `'${roomId}' room at ${serverUrl} ...`
    return {
        connect() {
            console.log(`✅  Connection to ${responseString} ...`)
        },
        disconnect() {
            console.log(`❌ Disconnected from ${responseString}`)
        }
    }
}

function createEncryptedConnection(roomId) {
    const responseString = `'${roomId}' ...`
    return {
        connect() {
            console.log(`✅ 🔐 Connection to ${responseString} ... (encrypted)`)
        },
        disconnect() {
            console.log(`❌ Disconnected from ${responseString} room (encrypted)`)
        }
    }
}

function createUnencryptedConnection(roomId) {
    const responseString = `'${roomId}' ...`
    return {
        connect() {
            console.log(`✅  Connection to ${responseString} ... (unencrypted)`)
        },
        disconnect() {
            console.log(`❌ Disconnected from ${responseString} room (unencrypted)`)
        }
    }
}

export {
    createConnection,
    createEncryptedConnection,
    createUnencryptedConnection,
}