
import React, { useState, useEffect } from 'react';
import { Product, Category } from '../types';
import { theme } from '../constants';
import { Plus, Edit3, Trash2, Search, Filter, X, Image as ImageIcon, Check, Loader2, Diamond, ChevronDown } from 'lucide-react';

interface ProductManagementProps {
  products: Product[];
  categories: Category[];
  onAdd: (p: Product) => void;
  onUpdate: (p: Product) => void;
  onDelete: (id: string) => void;
}

const ProductManagement: React.FC<ProductManagementProps> = ({ 
  products, categories, onAdd, onUpdate, onDelete 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterSubcategory, setFilterSubcategory] = useState('All');
  const [isDeleting, setIsDeleting] = useState<string | null>(null);

  const [formData, setFormData] = useState<Partial<Product>>({
    name: '',
    category: '',
    subcategory: '',
    price: '',
    description: '',
    images: [],
    tag: ''
  });

  // Watch for category changes in filter to reset subcategory filter
  useEffect(() => {
    setFilterSubcategory('All');
  }, [filterCategory]);

  // Subcategories for the filter based on selected category
  const activeFilterCategoryData = categories.find(c => c.id === filterCategory);
  const filterSubcategories = activeFilterCategoryData?.subcategories || [];

  // Watch for category changes in modal form to update available subcategories
  const selectedCategoryData = categories.find(c => c.id === formData.category);
  const availableSubcategories = selectedCategoryData?.subcategories || [];

  const handleOpenModal = (product?: Product) => {
    if (product) {
      setEditingProduct(product);
      setFormData(product);
    } else {
      const firstCat = categories[0];
      setEditingProduct(null);
      setFormData({
        name: '',
        category: firstCat?.id || '',
        subcategory: firstCat?.subcategories?.[0] || '',
        price: '',
        description: '',
        images: [],
        tag: ''
      });
    }
    setIsModalOpen(true);
  };

  const handleCategoryChange = (catId: string) => {
    const cat = categories.find(c => c.id === catId);
    setFormData({
      ...formData,
      category: catId,
      subcategory: cat?.subcategories?.[0] || '' // Default to first subcategory
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result: Product = {
      ...formData as Product,
      id: editingProduct ? editingProduct.id : `p-${Date.now()}`,
    };
    
    if (editingProduct) {
      onUpdate(result);
    } else {
      onAdd(result);
    }
    setIsModalOpen(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const urls = Array.from(files).map((f: File) => URL.createObjectURL(f));
      setFormData(prev => ({ ...prev, images: [...(prev.images || []), ...urls] }));
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setIsDeleting(id);
      setTimeout(() => {
        onDelete(id);
        setIsDeleting(null);
      }, 500);
    }
  };

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'All' || p.category === filterCategory;
    const matchesSubcategory = filterSubcategory === 'All' || p.subcategory === filterSubcategory;
    return matchesSearch && matchesCategory && matchesSubcategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className={`${theme.fonts.serif} text-3xl font-bold ${theme.colors.primary}`}>Products</h2>
          <p className="text-stone-500 text-sm">Manage and curate your jewelry collection</p>
        </div>
        <button 
          onClick={() => handleOpenModal()}
          className={`${theme.colors.accentBg} text-white px-5 py-2.5 rounded-xl shadow-md ${theme.colors.accentHover} transition-all flex items-center gap-2 font-semibold`}
        >
          <Plus size={20} />
          <span>New Product</span>
        </button>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
          <input 
            type="text" 
            placeholder="Search items by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 bg-white border border-stone-200 rounded-xl outline-none focus:border-[#C5A059] transition-all"
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-stone-200 min-w-[180px]">
            <Filter size={16} className="text-stone-400 flex-shrink-0" />
            <select 
              className="bg-transparent border-none outline-none text-sm font-medium text-stone-600 cursor-pointer w-full"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>

          <div className={`flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-stone-200 min-w-[180px] transition-opacity ${filterCategory === 'All' ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
            <ChevronDown size={16} className="text-stone-400 flex-shrink-0" />
            <select 
              className="bg-transparent border-none outline-none text-sm font-medium text-stone-600 cursor-pointer w-full"
              value={filterSubcategory}
              onChange={(e) => setFilterSubcategory(e.target.value)}
              disabled={filterCategory === 'All'}
            >
              <option value="All">All Subcategories</option>
              {filterSubcategories.map(sub => <option key={sub} value={sub}>{sub}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white border border-stone-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col group">
            <div className="relative aspect-[4/5] bg-stone-50 overflow-hidden">
              <img 
                src={product.images[0] || 'https://via.placeholder.com/400x500?text=No+Image'} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={() => handleOpenModal(product)}
                  className="p-2.5 bg-white/90 backdrop-blur shadow-xl rounded-full text-stone-700 hover:bg-[#C5A059] hover:text-white transition-all"
                >
                  <Edit3 size={18} />
                </button>
                <button 
                  onClick={() => handleDelete(product.id)}
                  disabled={isDeleting === product.id}
                  className="p-2.5 bg-white/90 backdrop-blur shadow-xl rounded-full text-rose-600 hover:bg-rose-600 hover:text-white transition-all disabled:opacity-50"
                >
                  {isDeleting === product.id ? <Loader2 className="animate-spin" size={18} /> : <Trash2 size={18} />}
                </button>
              </div>
              {product.tag && (
                <span className="absolute bottom-4 left-4 bg-stone-900/80 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded tracking-widest uppercase">
                  {product.tag}
                </span>
              )}
            </div>
            
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex justify-between items-start gap-2 mb-1">
                <h4 className="font-bold text-stone-800 line-clamp-1">{product.name}</h4>
                <p className="text-[#C5A059] font-bold text-sm whitespace-nowrap">{product.price}</p>
              </div>
              <p className="text-stone-500 text-xs line-clamp-2 mb-4 leading-relaxed">{product.description}</p>
              <div className="mt-auto pt-4 border-t border-stone-50 flex items-center justify-between">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-tighter">
                  {categories.find(c => c.id === product.category)?.name}
                </span>
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-tighter">
                  {product.subcategory}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Simplified Empty State */}
      {filteredProducts.length === 0 && (
        <div className="py-20 text-center bg-white rounded-2xl border border-dashed border-stone-200">
          <Diamond className="mx-auto text-stone-200 mb-4" size={48} />
          <h3 className="text-stone-400 font-medium">No products found matching your criteria</h3>
        </div>
      )}

      {/* Modal - Dynamic Subcategory Selection */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-8 py-6 border-b border-stone-100">
              <h3 className={`${theme.fonts.serif} text-2xl font-bold text-stone-800`}>
                {editingProduct ? 'Edit Product' : 'Add Product'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-stone-400 hover:text-stone-600">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-5 max-h-[75vh] overflow-y-auto">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-500 uppercase">Product Name</label>
                <input 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-[#C5A059] outline-none transition-all"
                  placeholder="e.g. Traditional Gold Choker"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-500 uppercase">Category</label>
                  <div className="relative">
                    <select 
                      value={formData.category}
                      onChange={(e) => handleCategoryChange(e.target.value)}
                      className="w-full appearance-none px-4 py-2.5 rounded-xl border border-stone-200 focus:border-[#C5A059] outline-none bg-white"
                    >
                      {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" size={16} />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-500 uppercase">Subcategory</label>
                  <div className="relative">
                    <select 
                      required
                      value={formData.subcategory}
                      onChange={(e) => setFormData({...formData, subcategory: e.target.value})}
                      className="w-full appearance-none px-4 py-2.5 rounded-xl border border-stone-200 focus:border-[#C5A059] outline-none bg-white"
                      disabled={availableSubcategories.length === 0}
                    >
                      {availableSubcategories.length > 0 ? (
                        availableSubcategories.map(sub => <option key={sub} value={sub}>{sub}</option>)
                      ) : (
                        <option value="">No subcategories</option>
                      )}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" size={16} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-500 uppercase">Price Info</label>
                  <input 
                    required
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-[#C5A059] outline-none"
                    placeholder="Price or Inquiry"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-stone-500 uppercase">Tag</label>
                  <select 
                    value={formData.tag}
                    onChange={(e) => setFormData({...formData, tag: e.target.value as any})}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-[#C5A059] outline-none"
                  >
                    <option value="">None</option>
                    <option value="New Arrival">New Arrival</option>
                    <option value="Bestseller">Bestseller</option>
                    <option value="Exclusive">Exclusive</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-500 uppercase">Description</label>
                <textarea 
                  required
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-[#C5A059] outline-none resize-none"
                />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold text-stone-500 uppercase">Images</label>
                <div className="flex flex-wrap gap-2">
                  {formData.images?.map((img, idx) => (
                    <div key={idx} className="relative w-16 h-16 rounded-lg overflow-hidden border border-stone-100">
                      <img src={img} className="w-full h-full object-cover" />
                      <button 
                        type="button" 
                        onClick={() => setFormData({...formData, images: formData.images?.filter((_, i) => i !== idx)})}
                        className="absolute -top-1 -right-1 p-0.5 bg-rose-600 text-white rounded-full"
                      >
                        <X size={10} />
                      </button>
                    </div>
                  ))}
                  <label className="w-16 h-16 rounded-xl border-2 border-dashed border-stone-200 flex flex-col items-center justify-center text-stone-400 hover:border-[#C5A059] hover:text-[#C5A059] transition-all cursor-pointer">
                    <Plus size={16} />
                    <input type="file" multiple className="hidden" onChange={handleFileChange} accept="image/*" />
                  </label>
                </div>
              </div>

              <div className="pt-4 flex gap-3">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-3.5 rounded-xl font-bold text-stone-600 bg-stone-100 hover:bg-stone-200 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className={`flex-1 py-3.5 rounded-xl font-bold text-white ${theme.colors.accentBg} ${theme.colors.accentHover} shadow-lg transition-all flex items-center justify-center gap-2`}
                >
                  <Check size={18} />
                  <span>Save Product</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductManagement;
