import { useRouter } from 'next/router'
import BrandInfo from "@components/BrandInfo";
import Products from "@components/BrandProducts";
import styles from "../../../styles/Home.module.css";

export default function Brand() {
    const router = useRouter()
    const name = router.query.name as string
    return (
    <main className={"flex flex-col md:flex-row justify-center" + styles.main + styles.container}>
        <article className={"inline-block mx-auto md:mx-0 mb-0 md:mb-10 px-8 text-center md:text-left " + styles.article}>
            <BrandInfo name={name} />
        </article>
        <section className={"inline-block mt-10 md:mt-0 " + styles.section}>
            <Products brandName={name} />
        </section>
    </main>)
}