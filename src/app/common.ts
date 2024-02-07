
export const groupBy = function <T, Y>(collection: T[], selector: ((val: T) => Y)): Map<Y, T[]> {
    let result = new Map<Y, T[]>()

    for (let i = 0; i < collection.length; i++) {
        const current = collection[i]
        const key = selector(current)

        let arr = result.has(key) ? result.get(key)! : []
        arr.push(current)
        result.set(key, arr)
    }

    return result
}