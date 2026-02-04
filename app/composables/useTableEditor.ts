export const useTableEditor = (tableName: string) => {
    const client = useSupabaseClient()
    const rows = ref([])

    const fetchAll = async () => {
        const { data } = await client.from(tableName).select('*')
        rows.value = data
    }

    const remove = async (id: string) => {
        await client.from(tableName).delete().eq('id', id)
        await fetchAll()
    }

    return { rows, fetchAll, remove }


}