import React, { useState, useEffect } from 'react';
import {
    Upload,
    Search,
    Filter,
    MoreHorizontal,
    AlertCircle,
    Check,
    TrendingDown,
    Zap,
    Loader
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import { db } from '../lib/db';

const Catalog = () => {
    const [activeTab, setActiveTab] = useState('all');
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
            stock: 100,
        };

        try {
            const { data } = await db.products.create(newProduct);
            setProducts([data, ...products]);
        } catch (error) {
            console.error('Failed to create product', error);
        }
    };

    const tabs = [
        { id: 'all', label: 'All Products' },
        { id: 'price-match', label: 'AI Price Match' },
        { id: 'benchmarking', label: 'Benchmarking' },
        { id: 'optimization', label: 'Optimization' },
        { id: 'inventory', label: 'Inventory' },
    ];

    return (
        <div className="max-w-7xl mx-auto">
            <SectionHeader
                title="Catalog & Products"
                description="Manage products while AiR handles pricing and market intelligence."
                action={
                    <button
                        onClick={handleUpload}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                    >
                        <Upload className="w-4 h-4 mr-2" />
                        Upload / Sync Products
                    </button>
                }
            />

            {/* Core Feature Highlight */}
            <div className="mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white shadow-lg">
                <div className="flex items-start">
                    <div className="p-3 bg-white/20 rounded-lg mr-4 backdrop-blur-sm">
                        <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-1">AiR Auto-Magic Catalog</h3>
                        <p className="text-blue-100 max-w-2xl">
                            Upload your catalog and AiR will automatically structure data, tag products, optimize pricing based on market data, and identify winning offers.
                        </p>
                    </div>
                </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="flex items-center p-4">
                    <div className="mr-4 p-3 bg-gray-100 rounded-full">
                        <Search className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Total Products</p>
                        <p className="text-2xl font-bold text-gray-900">{products.length}</p>
                    </div>
                </Card>
                <Card className="flex items-center p-4">
                    <div className="mr-4 p-3 bg-green-100 rounded-full">
                        <Check className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">AI Optimized</p>
                        <p className="text-2xl font-bold text-gray-900">{products.filter(p => p.status === 'Optimized').length}</p>
                    </div>
                </Card>
                <Card className="flex items-center p-4">
                    <div className="mr-4 p-3 bg-orange-100 rounded-full">
                        <AlertCircle className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Needs Attention</p>
                        <p className="text-2xl font-bold text-gray-900">{products.filter(p => p.status !== 'Optimized').length}</p>
                    </div>
                </Card>
            </div>

            {/* Main Content Area */}
            <Card className="p-0">
                {/* Tabs */}
                <div className="border-b border-gray-200 px-6">
                    <div className="flex space-x-8 overflow-x-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`py-4 text-sm font-medium border-b-2 whitespace-nowrap ${activeTab === tab.id
                                    ? 'border-blue-600 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Filters & Search */}
                <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between gap-4 bg-gray-50/50">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search products by name, SKU, or tag..."
                            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        />
                    </div>
                    <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                    </button>
                </div>

                {/* Product Table */}
                <div className="overflow-x-auto">
                    {loading ? (
                        <div className="flex justify-center items-center h-64">
                            <Loader className="w-8 h-8 text-blue-600 animate-spin" />
                        </div>
                    ) : (
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
                                <tr>
                                    <th className="px-6 py-3 font-medium">Product</th>
                                    <th className="px-6 py-3 font-medium">Price</th>
                                    <th className="px-6 py-3 font-medium">Market Price</th>
                                    <th className="px-6 py-3 font-medium">Stock</th>
                                    <th className="px-6 py-3 font-medium">AI Status</th>
                                    <th className="px-6 py-3 font-medium text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {products.map((product) => (
                                    <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <img src={product.image} alt={product.name} className="w-10 h-10 rounded-lg object-cover mr-3" />
                                                <div>
                                                    <p className="font-medium text-gray-900">{product.name}</p>
                                                    <p className="text-xs text-gray-500">{product.sku}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-900">${product.price}</td>
                                        <td className="px-6 py-4 text-gray-500">${product.marketPrice}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${product.stock < 20 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                                                }`}>
                                                {product.stock} units
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${product.status === 'Optimized' ? 'bg-blue-100 text-blue-800' :
                                                product.status === 'Price High' ? 'bg-orange-100 text-orange-800' :
                                                    'bg-gray-100 text-gray-800'
                                                }`}>
                                                {product.status === 'Optimized' && <Zap className="w-3 h-3 mr-1" />}
                                                {product.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-gray-400 hover:text-gray-600">
                                                <MoreHorizontal className="w-5 h-5" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>

                <div className="p-4 border-t border-gray-200 flex justify-center">
                    <button className="text-sm text-blue-600 font-medium hover:text-blue-800">Load More Products</button>
                </div>
            </Card>
        </div>
    );
};

export default Catalog;
