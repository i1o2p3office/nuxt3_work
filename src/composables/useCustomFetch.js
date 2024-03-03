export const useCustomFetch = async (url, options, handler) => {
  await $fetch(url, options)
    .then((res) => handler?.success?.(res))
    .catch((err) => handler?.error?.(err))
    .finally(() => handler?.final?.())
}
