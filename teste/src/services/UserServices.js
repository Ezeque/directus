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