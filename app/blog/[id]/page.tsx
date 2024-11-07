import { createClient } from "@/utils/supabase/server";
import Markdown from "react-markdown";

import "./page.css";

const BlogDetail = async ({ params }: { params: Promise<{ id: number }> }) => {
    const id = (await params).id;
    const supabase = await createClient();
    const { data, error } = await supabase.from("post").select(`
        title,
        content,
        published_date,
        image,
        category(name),
        author(first_name, last_name)
    `).eq("id", id).single();

    return (
        <div className="container">
            <Markdown>{data?.content}</Markdown>
        </div>
    );
};

export default BlogDetail;