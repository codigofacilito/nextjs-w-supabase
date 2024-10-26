'use client'

import { useEffect } from "react";
import { createClient } from "@/utils/supabase/client";

const FirstComponentWSupabase = () => {

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const supabase = await createClient();
                const { data: users, error: usersError } = await supabase.from('users').select();

                console.log(users, usersError);
            } catch (error) {

            }
        };

        loadUsers().catch(console.error);
    }, []);

    return (
        <div>
            <h1>First Component With Supabase</h1>
        </div>
    );
};

export default FirstComponentWSupabase;