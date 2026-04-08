"use client";

import { usePathname } from "next/navigation"

export default function NotFound() {
    const pathname = usePathname();
    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4];
    return (
        <div>
            <h2>Review not Found for Product {productId} and Review {reviewId} </h2>
        </div>
    )
}