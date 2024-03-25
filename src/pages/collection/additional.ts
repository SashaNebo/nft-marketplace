export const copyingId = (
  address: string,
  setIsCopyId: React.Dispatch<React.SetStateAction<boolean>>
) => {
  return () => {
    navigator.clipboard
      .writeText(address)
      .then(() => setIsCopyId(() => true))
      .finally(() => setTimeout(() => setIsCopyId(() => false), 3000))
  }
}
