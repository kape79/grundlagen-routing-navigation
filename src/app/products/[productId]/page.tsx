import { Metadata } from "next";

type Props = {
    params: Promise<{ productId: string}>; // params is a Promis that resolves to productId of type string. 
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const id = (await params).productId;
    return {
        title: `Product ${id}`,
    }
}

export default async function ProductDetails({
    params,
}: Props) {
    const productId = (await params).productId;
    return <h1>Here are the product details {productId}</h1>;
}
