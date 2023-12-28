"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ISingelOrder } from '../model';
import OrderDetail from "./orderDetail"
interface pageParam {
    slug: string;
}

const Page = ({ params, searchParams }: { params: pageParam, searchParams: any }) => {


    const [isLoading, setLoading]=useState<boolean>(false)
    const [result, setResult] = useState<ISingelOrder>()
    const FetchOrder = async()=>{
     setLoading(true)
        try{
            const res = await axios.get(`http://localhost:5000/api/order/${params?.slug}`);
            const data = res.data;
            setResult(data)
            setLoading(false)
        }catch(error){ 
     console.log(error)
        }
   
    }

    useEffect(()=>{
        FetchOrder()
    },[])
    return (
        <div>
            <OrderDetail orderId={result} isLoading={isLoading}/>
        </div>
    )
}

export default Page;







// export const getServerSideProps = async ({
//     query,
//     req,
// }: {
//     query: any;
//     req: any;
// }) => {
//     const { _id } = query;

  
//     if (!data) {
//         return {
//             notFound: true,
//         };
//     }

//     return {
//         props: { data }, // will be passed to the page component as props
//     };
// };