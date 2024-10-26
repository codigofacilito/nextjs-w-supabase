
import { createClient } from "@/utils/supabase/server";

const FirstSCWSupabase = async () => {
    const supabase = await createClient();
    const { data: users, error: usersError } = await supabase.from('users').select();

    console.log(users, usersError);

    return (
        <div>
            <h1>SC With Supabase</h1>
        </div>
    );
};

export default FirstSCWSupabase;