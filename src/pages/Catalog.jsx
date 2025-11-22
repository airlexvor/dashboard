import React, { useState, useEffect } from 'react';
import {
    Upload,
    Search,
    Filter,
    MoreHorizontal,
    AlertCircle,
    CheckCircle,
    Package,
    Plus
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import { db } from '../lib/db';

const Catalog = () => {
    const [activeTab, setActiveTab] = useState('All Products');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await db.products.list();
                setProducts(data);
            } catch (error) {
                console.error('Failed to fetch products', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const handleUpload = async () => {
        // Simulate uploading a new product
        const newProduct = {
            name: `New Product ${Math.floor(Math.random() * 1000)}`,
            sku: `NEW-${Math.floor(Math.random() * 1000)}`,
            price: 49.99,
            inventory: 100,
            status: 'Active',
            channels: ['Shopify'],
            last_sync: 'Just now'
        };

        try {
            const { data } = await db.products.create(newProduct);
            if (data) setProducts([data, ...products]);
        } catch (error) {
            console.error('Failed to create product', error);
        }
    };

    const handleSeed = async () => {
        setLoading(true);
        const sampleProducts = [
            { name: 'Air Pro Wireless', sku: 'AP-001', price: 199.99, inventory: 450, status: 'Active', channels: ['Shopify', 'Amazon'], last_sync: '2 mins ago' },
            { name: 'Smart Home Hub', sku: 'SH-002', price: 149.50, inventory: 120, status: 'Active', channels: ['Shopify'], last_sync: '1 hour ago' },
            { name: 'Ultra HD Monitor', sku: 'MN-003', price: 399.00, inventory: 85, status: 'Active', channels: ['Amazon'], last_sync: '5 mins ago' },
            { name: 'Ergo Chair Plus', sku: 'CH-004', price: 299.99, inventory: 0, status: 'Draft', channels: [], last_sync: '1 day ago' },
            { name: 'Mechanical Keyboard', sku: 'KB-005', price: 129.99, inventory: 200, status: 'Active', channels: ['Shopify'], last_sync: 'Just now' },
        ];

        try {
            for (const product of sampleProducts) {
                await db.products.create(product);
            }
            // Refresh list
            const { data } = await db.products.list();
            setProducts(data);
        } catch (error) {
            console.error('Failed to seed database', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Catalog</h1>
                <p className="text-gray-500 dark:text-gray-400">Manage your products and sync with external platforms.</p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="p-4 flex items-center space-x-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                        <Package className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Total Products</p>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{products.length}</h3>
                    </div>
                </Card>
                <Card className="p-4 flex items-center space-x-4">
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400">
                        <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Synced</p>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{products.filter(p => p.status === 'Active').length}</h3>
                    </div>
                </Card>
                <Card className="p-4 flex items-center space-x-4">
                    <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-full text-yellow-600 dark:text-yellow-400">
                        <AlertCircle className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Issues</p>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">0</h3>
                    </div>
                </Card>
            </div>

            {/* Main Content */}
            <Card className="overflow-hidden">
                {/* Tabs & Actions */}
                <div className="border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between p-4">
                        <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
                            {['All Products', 'Synced', 'Drafts', 'Archived'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === tab
                                        ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                        <div className="flex space-x-3">
                            <div className="relative">
                                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="pl-9 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                                />
                            </div>
                            <button className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700">
                                <Filter className="w-4 h-4 mr-2" />
                                Filter
                            </button>
                            <button
                                onClick={handleUpload}
                                className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium shadow-sm transition-colors"
                            >
                                <Plus className="w-4 h-4 mr-2" />
                                Upload / Sync Products
                            </button>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 dark:bg-gray-700/50">
                            <tr>
                                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Product</th>
                                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Price</th>
                                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Inventory</th>
                                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Channels</th>
                                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Last Sync</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            {loading ? (
                                <tr>
                                    <td colSpan="7" className="px-6 py-12 text-center text-gray-500 dark:text-gray-400">
                                        Loading products...
                                    </td>
                                </tr>
                            ) : products.length === 0 ? (
                                <tr>
                                    <td colSpan="7" className="px-6 py-12 text-center text-gray-500 dark:text-gray-400">
                                        <div className="flex flex-col items-center justify-center space-y-4">
                                            <Package className="w-12 h-12 text-gray-300 dark:text-gray-600" />
                                            <p className="text-lg font-medium">No products found</p>
                                            <p className="text-sm">Get started by adding products or seeding the database.</p>
                                            <button
                                                onClick={handleSeed}
                                                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium shadow-sm transition-colors"
                                            >
                                                Seed Database with Sample Data
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ) : products.map((product) => (
                                <tr key={product.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
                                                <Package className="w-5 h-5" />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900 dark:text-white">{product.name}</div>
                                                <div className="text-xs text-gray-500 dark:text-gray-400">SKU: {product.sku}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${product.status === 'Active'
                                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                            : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                                            }`}>
                                            {product.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                        ${product.price}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                        {product.inventory} in stock
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex space-x-2">
                                            {product.channels && product.channels.map((channel, idx) => (
                                                <span key={idx} className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-2 py-1 rounded border border-blue-100 dark:border-blue-800">
                                                    {channel}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                        {product.last_sync}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 mr-4">Edit</button>
                                        <button className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
                                            <MoreHorizontal className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default Catalog;
