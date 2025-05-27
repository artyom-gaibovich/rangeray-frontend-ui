import {withLayout} from "@/layout/Layout";
import {ReactNode} from "react";


function Home({}: HomeProps) {
    return (<div>
        <h1>Добро пожаловать на нашу страницу</h1>
    </div>);
}


interface HomeProps extends Record<string, unknown> {
    children?: ReactNode;
}


export default withLayout(Home)