export const getFormattedDate = () => {
  const fromNullable = (newDate: string | null) => {
    if (newDate != null) {
      return newDate
    }
    return new Date()
  }
  const formatDate = (
    newDate: string | null,
    options: Intl.DateTimeFormatOptions | undefined
  ) => {
    return new Date(fromNullable(newDate)).toLocaleDateString('en-US', options)
  }

  return {
    formatDate
  }
}
