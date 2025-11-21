import { supabase } from './supabase';

export const db = {
    products: {
        list: async () => {
            const { data, error } = await supabase
                .from('products')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            return { data };
        },
        create: async (product) => {
            const { data, error } = await supabase
                .from('products')
                .insert([product])
                .select()
                .single();

            if (error) throw error;
            return { data };
        },
        update: async (id, updates) => {
            const { data, error } = await supabase
                .from('products')
                .update(updates)
                .eq('id', id)
                .select()
                .single();

            if (error) throw error;
            return { data };
        },
        delete: async (id) => {
            const { error } = await supabase
                .from('products')
                .delete()
                .eq('id', id);

            if (error) throw error;
            return { error: null };
        }
    }
};
