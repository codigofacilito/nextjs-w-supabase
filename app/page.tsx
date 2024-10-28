'use client';

import { ChangeEvent, useState } from "react";

type User = {
  id: number;
  first_name: string;
  last_name: string;
  age: number;
  created_at?: string;
};

const initialState = {
  id: -1,
  first_name: '',
  last_name: '',
  age: 0,
};

const Index = () => {
  const [formValues, setFormValues] = useState<User>(initialState);

  const handleFormAction = () => {

  };

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValues((prevFormValues) => ({ ...prevFormValues, [name]: value }));
  };

  return (
    <main className="flex-1 flex flex-col gap-6 px-4">
      <h4 className="text-[30px]">Lista de usuarios</h4>
      <form action={handleFormAction} className="w-[480px] mb-12 border-2 border-white rounded-md px-4 py-6">
            <label className="flex flex-col mb-3">
                Nombre(s)
                    <input
                        type="text"
                        name="first_name"
                        className="bg-white rounded-sm text-black text-sm p-1 w-full"
                        required
                        maxLength={100}
                        minLength={1}
                        value={formValues.first_name}
                        onChange={handleFormChange}
                    />
            </label>
            <label className="flex flex-col mb-3">
                Apellido
                <input 
                    type="text"
                    name="last_name"
                    className="bg-white rounded-sm text-black text-sm p-1 w-full"
                    required
                    maxLength={200}
                    minLength={1}
                    value={formValues.last_name}
                    onChange={handleFormChange}
                />
            </label>
            <label className="flex flex-col mb-3">
                Edad
                <input
                    name="age"
                    type="number"
                    className="bg-white rounded-sm text-black text-sm p-1 w-12"
                    max={100}
                    min={1}
                    required
                    value={formValues.age}
                    onChange={handleFormChange}
                />
            </label>
            <input type="hidden" name="id" value={formValues?.id} />
            <button
              type="submit"
              className="w-24 border-white text-white border-2 text-sm h-8 rounded-sm mt-4 hover:bg-slate-900"
            >
                Guardar
            </button>
            <button 
              type="reset"
              className="w-24 bg-white border-none text-black text-sm h-8 rounded-sm ml-2 hover:bg-slate-200"
              onClick={() => setFormValues(initialState)}>
                Eliminar
            </button>
        </form>
    </main>
  );
}

export default Index;