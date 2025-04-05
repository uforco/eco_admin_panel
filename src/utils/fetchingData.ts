export const fetchingGet = async (url: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/${url}`)
    return res.json()
  }