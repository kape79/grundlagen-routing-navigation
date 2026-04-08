export default async function ProductReview({
    params
}: {
    params: Promise<{productId:string; reviewId: string}>; // Params is of type Promise that resolves to ... 
}) {
    const {productId, reviewId} = await params;

    return <h1> Review {reviewId} for Product {productId}</h1>
}