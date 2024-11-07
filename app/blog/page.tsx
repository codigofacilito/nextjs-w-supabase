// Server component
import { createClient } from "@/utils/supabase/server";
import Post from "./components/Post";

const BlogPage = async () => {
    const supabase = await createClient();
    const { data, error } = await supabase.from("post").select(`
        id,
        title,
        description,
        published_date,
        image,
        category(name),
        author(first_name, last_name)
    `);

    if (error) {
        console.error(error);
        // TODO Estilizar con modulos de css este error y probarlo
        return <div>Error cargando posts</div>;
    }

    console.log(data, error);

    return (
        <div>
            {data?.map(post => <Post key={`home-post-${post.id}`} {...post} />)}
        </div>
    );
};

export default BlogPage;