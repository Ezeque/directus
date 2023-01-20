import {ref, toRefs} from 'vue'
import { userDetails } from './UserServices'
export const tab = ref('user')

const userClickHandler = (e) => {
    tab.value = 'user'
    userDetails.value = toRefs(e)
    userDetails.firstName = e.firstName
    userDetails.lastName = e.lastName
    userDetails.email = e.email
    userDetails.password = e.password
    userDetails.id = e.id
}

export{
    userClickHandler
}