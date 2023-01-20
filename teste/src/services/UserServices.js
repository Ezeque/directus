import axios from "axios";
import { reactive, ref } from "vue";
import { tab } from "./TabsService";

const userDetails = reactive({
    firstName : '',
    lastName : '',
    email : '',
    password : '',
    avatar : '',
    location: '',
    title: '',
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
    axios.get(`${process.env.VUE_APP_DIRECTUS_URL}/items/users/${id}`).then((response) => {return response})
}
//Get all users registered
const getUsers = async() => {
    return axios.get(`${process.env.VUE_APP_DIRECTUS_URL}/items/users`).then((response) => {return response})
}

//Get all users registered
const deleteUser = async(id) => {
    await axios.delete(`${process.env.VUE_APP_DIRECTUS_URL}/items/users/${id}`).then((response) => {return response})
    tab.value= 'all_users'
}

// Creates an user in the database based on a object with its parameters
const createUser = async (parameters) => {
    await axios.post(`${process.env.VUE_APP_DIRECTUS_URL}/items/users`, parameters, {
    })
    tab.value = 'all_users'
}

export{
    userDetails,
    userPreferences,
    adminOptions,
    getUser,
    createUser,
    getUsers,
    deleteUser
}