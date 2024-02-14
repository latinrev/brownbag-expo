import {useQuery} from "@tanstack/react-query";


export const useGetProducts = () => useQuery({
  queryKey: ['products'],
  queryFn: () => {
    return fetch('https://fakestoreapi.com/products').then(async res => await res.json())
  }
})
