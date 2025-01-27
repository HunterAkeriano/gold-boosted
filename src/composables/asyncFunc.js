import { useToast } from 'vue-toast-notification'

const Toast = useToast()

export const getData = async (getFunction, dataRef, loadingRef, ...attributes) => {
  try {
    let data

    if (attributes) {
      data = await getFunction(...attributes)
    } else {
      data = await getFunction()
    }
    dataRef.value = data
    loadingRef.value = false
  } catch (error) {
    Toast.error(error)
  }
}

export const pushData = async (getFunction, dataRef, loadingRef, currentPage, ...attributes) => {
  try {
    dataRef.value[currentPage - 1] = await getFunction(currentPage, ...attributes)
    loadingRef.value = false
  } catch (error) {
    Toast.error(error)
  }
}

export const pushHotOffersData = async (
  getFunction,
  dataRef,
  loadingRef,
  currentPage,
  activeGameId,
  pageSize
) => {
  try {
    dataRef.value[activeGameId][currentPage - 1] = await getFunction(
      currentPage,
      activeGameId,
      pageSize
    )

    loadingRef.value = false
  } catch (error) {
    Toast.error(error)
  }
}
