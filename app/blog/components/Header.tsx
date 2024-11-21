"use client"

import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

const BlogHeader = () => {
    const [user, setUser] = useState({});

    // Este se puede colocar en un state management para que solamente se ejecute en 1 ocasion
    useEffect(() => {
        // Traer el usuario de la base de datos, el que esta ligado a la sesion activa
        const getUserData = async () => {
            try {
                const { data: authUser, error } = await supabase.auth.getUser();

                if (error) {
                    throw new Error();
                }

                const { data: publicUser, error: publicError } = await supabase.from("users").select("*").eq("id", authUser.user.id).single();
                
                if (publicUser.id && !publicError) {
                    setUser(publicUser);
                }
            } catch (error) {
                console.error(error);
            }
        };

        getUserData().catch(console.error);
    }, []);

    const handleSignOutClick = async () => {
        await supabase.auth.signOut();
        setUser({});
    };

    return (
        <header className={styles.header}>
            <h1>CF Blog</h1>
            <nav>
            {!!user?.id && (
                <>
                    <span>Bienvenido, {user?.first_name}</span>
                    <button className="ml-2" onClick={handleSignOutClick}>Cerrar sesion</button>
                </>
            )}
            {!user?.id && <a href="/sign-in">Iniciar Sesion</a>}
            </nav>
      </header>
    );
};

export default BlogHeader;