import { reactive, onMounted } from "vue"


// exportamos en composable
export function useFetch(apiURL = '', onSuccess = () => { }) {

    const state = reactive({
        error: null,
        isLoading: false,
        data: []
    })

    const fetchGames = async () => {
        try {
            state.isLoading = true

            const response = await fetch(apiURL)

            const json = await response.json()

            state.data = json

            onSuccess(json)

        } catch (error) {

            state.error = error


        } finally {
            state.isLoading = false

        }
    }

    onMounted(() => {
        fetchGames()
    })

    return { state }

}