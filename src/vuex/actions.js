export function changeColor ({dispatch}, color, imgUrl) {
    dispatch('CHANGE_COLOR', color, imgUrl)
}
export function changeMemory ({dispatch}, memory, price) {
    dispatch('CHANGE_MEMORY', memory, price)
}
export function changeType ({dispatch}, type) {
    dispatch('CHANGE_TYPE', type)
}
export function addItem ({dispatch}, item) {
    dispatch('ADD_ITEM', item)
}
export function removeItem ({dispatch}, index) {
    dispatch('REMOVE_ITEM', index)
}
