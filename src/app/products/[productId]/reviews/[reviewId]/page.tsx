import { notFound, redirect } from "next/navigation";
import { useState } from 'react';

export default async function ProductReview( {
    params,
}: {
    params: Promise<{ productId: string; reviewId: string}>
}

) {
    const [input, setInput] = useState("");
    const { productId, reviewId} = await params;
    
    if (parseInt(reviewId) > 1000) {
        redirect("/products");
    }
    return <h1> Review {reviewId} for product {productId} </h1>
}