import {ref} from 'vue'
const formFilled = ref(false)

// Check if required fields were filled
const checkFilled = (form) => {
    if (form.firstName != null && form.lastName != null && form.password != null && form.email != null) {
        formFilled.value = true
    }
}

export{
    formFilled,
    checkFilled
}