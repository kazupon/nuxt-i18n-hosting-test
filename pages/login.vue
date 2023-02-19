<script setup>

const form = {
    'email' : '',
    'password' : ''
}


async function loginRequest() {

    return $fetch('http://127.0.0.1:8000/api/v1/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        query: {
            email: form.email,
            password: form.password
        },
        pick: ['token']
        }).then(
            (res) => {
                const AuthToken = useCookie('ca_token')
                AuthToken.value = res.token
        })

}

async function loginCheck() {
    const getCookie = useCookie('ca_token')
    let head = "Bearer ".concat(getCookie.value)
    $fetch('http://127.0.0.1:8000/api/v1/check', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization" : head
        },
        }).then(
            (res) => {
                console.log(res)
        })

}


async function logoutRequest() {
   const getCookie = useCookie('ca_token')
    let head = "Bearer ".concat(getCookie.value)
    getCookie.value = null
    $fetch('http://127.0.0.1:8000/api/v1/logout', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization" : head
        },
        }).then(
            (res) => {
                console.log(res)
        })
    getCookie.value = null

}


</script>

<template>
    <section>
        <br><br><br><br><br><br><br><br><br><br><br><br>
    <form @submit.prevent>
    <label for="uname"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" v-model="form.email" required>
    <br><br>
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" v-model="form.password" required>
    <br><br>
    <button type="submit" @click="loginRequest">Login</button>
    </form>
    <br>
    <button @click="loginCheck">Check</button>
    <button @click="logoutRequest">Logout</button>
</section>
</template>
