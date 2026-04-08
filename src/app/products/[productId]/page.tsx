import { Metadata } from "next";

type Props = {
    params: Promise<{ productId: string}>; // params is a Promis that resolves to productId of type string. 
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const id = (await params).productId;
    const title = await new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve(`iPhone ${id}`);
        }, 100);
    });
    return {
        title: `Product ${title}`,
    }
}

export default async function ProductDetails({
    params,
}: Props) {
    const productId = (await params).productId;
    return <h1>Here are the product details {productId}</h1>;
}
