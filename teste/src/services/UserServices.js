import axios from "axios";
import { reactive, ref } from "vue";

const userDetails = reactive({
    firstName : ref(null),
    lastName : ref(null),
    email : ref(null),
    password : ref(null),
    avatar : ref(null),
    location: ref(null),
    title: ref(null),
    description : ref([]),
    tags : ref([])
})

const userPreferences = reactive({
    language: ref(null),
    theme: ref(null),
    twoFactorAuth: ref(null),
    emailNotification : ref(null)
})

const adminOptions = reactive({
    status : ref(null),
    role : ref(null),
    token: ref(null),
    provider : ref(null),
    externalIdentifier: ref(null)
})

// Get an user in the database by its id
const getUser = (id) => {
    axios.get(`${process.env.DIRECTUS_URL}/items/users/${id}`)
}

// Creates an user in the database based on a object with its parameters
const creatUser = (parameters) => {
    axios.post(`${process.env.DIRECTUS_URL}/items/users`, parameters)
}

export{
    userDetails,
    userPreferences,
    adminOptions,
    getUser,
    creatUser
}