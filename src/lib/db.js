/**
 * Local Database Service
 * Simulates a backend using LocalStorage.
 * Designed to be easily swapped with Supabase or Firebase.
 */

const STORAGE_KEYS = {
    USERS: 'air_users',
    SESSION: 'air_session',
    PRODUCTS: 'air_products',
};

// Helper to get data
const get = (key) => {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : [];
    } catch (e) {
        console.error('Error reading from storage', e);
        return [];
    }
};

// Helper to set data
const set = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.error('Error writing to storage', e);
    }
};

// Delay to simulate network request
const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

export const db = {
    auth: {
        signIn: async (email, password) => {
            await delay();
            const users = get(STORAGE_KEYS.USERS);
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                const { password, ...userWithoutPassword } = user;
                set(STORAGE_KEYS.SESSION, userWithoutPassword);
                return { user: userWithoutPassword, error: null };
            }

            return { user: null, error: 'Invalid email or password' };
        },

        signUp: async (name, email, password) => {
            await delay();
            const users = get(STORAGE_KEYS.USERS);

            if (users.find(u => u.email === email)) {
                return { user: null, error: 'User already exists' };
            }

            const newUser = { id: crypto.randomUUID(), name, email, password, role: 'admin' };
            users.push(newUser);
            set(STORAGE_KEYS.USERS, users);

            const { password: _, ...userWithoutPassword } = newUser;
            set(STORAGE_KEYS.SESSION, userWithoutPassword);

            return { user: userWithoutPassword, error: null };
        },

        signOut: async () => {
            await delay(200);
            localStorage.removeItem(STORAGE_KEYS.SESSION);
            return { error: null };
        },

        getSession: async () => {
            // No delay for session check to avoid flicker
            const user = localStorage.getItem(STORAGE_KEYS.SESSION);
            return { user: user ? JSON.parse(user) : null, error: null };
        }
    },

    products: {
        list: async () => {
            await delay();
            let products = get(STORAGE_KEYS.PRODUCTS);

            // Seed initial data if empty
            if (products.length === 0) {
                products = [
                    { id: 1, name: 'Premium Leather Backpack', sku: 'BAG-001', price: 129.99, marketPrice: 145.00, stock: 45, status: 'Optimized', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=300&q=80' },
                    { id: 2, name: 'Wireless Noise Cancelling Headphones', sku: 'AUDIO-002', price: 249.99, marketPrice: 249.99, stock: 12, status: 'Review Needed', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80' },
                    { id: 3, name: 'Smart Fitness Watch', sku: 'TECH-003', price: 199.50, marketPrice: 180.00, stock: 8, status: 'Price High', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80' },
                    { id: 4, name: 'Organic Cotton T-Shirt', sku: 'APP-004', price: 29.99, marketPrice: 35.00, stock: 150, status: 'Optimized', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=300&q=80' },
                ];
                set(STORAGE_KEYS.PRODUCTS, products);
            }

            return { data: products, error: null };
        },

        create: async (product) => {
            await delay();
            const products = get(STORAGE_KEYS.PRODUCTS);
            const newProduct = {
                id: crypto.randomUUID(),
                ...product,
                status: 'Processing', // Default status for new uploads
                marketPrice: product.price, // Placeholder
                image: 'https://images.unsplash.com/photo-1553456558-aff63285bdd1?auto=format&fit=crop&w=300&q=80' // Placeholder image
            };
            products.unshift(newProduct);
            set(STORAGE_KEYS.PRODUCTS, products);
            return { data: newProduct, error: null };
        }
    }
};
