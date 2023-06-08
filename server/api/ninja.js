export default defineEventHandler(async (event) =>{
    //handle query params
    // const { name } = useQuery(event)

    //handle post body
    // const { age } = await useBody(event)

    // return {
    //         message : `this is from ${name} and I am ${age} years old`
    //         }

    //api call with private key
    const { data } = await useFetch('https://api.currencyapi.com/v3/lateset?apikey=X4bn6wRn16kXYisHmTPWnWULeZJBXhu2F8Er2fAa')

    return data

})