'use client';

import { createClient } from "@/utils/supabase/client";
import { FC, useState } from "react";

type User = {
    id: number;
    first_name: string;
    last_name: string;
    age: number;
    created_at?: string;
};

type UserItemProps = User & {
    onRefresh: () => void;
    onEdit: (user: User) => void;
};

const supabase = createClient();

const UserItem: FC<UserItemProps> = ({
    first_name: firstName,
    last_name: lastName,
    age,
    id,
    onRefresh,
    onEdit,
}) => {
    const [error, setError] = useState<string | null>(null);
    const [deleteLabel, setDeleteLabel] = useState('Eliminar');
    const [confirmDelete, setConfirmDelete] = useState(false);

    const handleDeleteUser = async () => {
        setDeleteLabel('Eliminando...');
        setError(null);

        try {
            const { error } = await supabase.from('users').delete().eq('id', id);

            if (error) {
                setError(error);
                console.error(error);
                return;
            }

            onRefresh();
        } catch (error) {
            console.error(error);
            setError('Ha ocurrido un error'); // TODO Mostrar el error en pantalla
        }
    };

    const handleConfirmDelete = () => {
        setDeleteLabel('Confirmar');
        setConfirmDelete(true);
    };

    return (
        <div className="mb-4">
            <div className="flex flex-row">
                <p>{`${firstName} ${lastName}, `}</p>
                <p className="text-md ml-1">{`Edad ${age}`}</p>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button 
                className="border-white text-white border-2 text-sm text-black px-4 rounded-sm hover:bg-red-500"
                onClick={confirmDelete ? handleDeleteUser : handleConfirmDelete}>
                {deleteLabel}
            </button>
            <button className="ml-2 bg-white text-sm text-black px-4 rounded-sm hover:bg-slate-200" onClick={() => onEdit({
                id,
                first_name: firstName,
                last_name: lastName,
                age,
            })}>
                Editar
            </button>
        </div>
    );
};

export default UserItem;