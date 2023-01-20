import {ref} from 'vue'
const formFilled = ref(false)

// Check if required fields were filled
const checkFilled = (form) => {
    console.log('entrou 1 ')
    if (form.firstName != null && form.lastName != null && form.password != null && form.email != null) {
        formFilled.value = true
        console.log('entrou')
    }
    console.log('saiu')
}

export{
    formFilled,
    checkFilled
}