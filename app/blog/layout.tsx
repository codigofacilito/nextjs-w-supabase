import { ReactElement } from "react";

import BlogHeader from "./components/Header";
import BlogFooter from "./components/Footer";

const BlogLayout = ({ children }: { children: ReactElement }) => {
    return (
        <>
            <BlogHeader />
            <main>{children}</main>
            <BlogFooter />
        </>
    );
};

export default BlogLayout;