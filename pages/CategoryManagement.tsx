
import React, { useState } from 'react';
import { Category } from '../types';
import { theme } from '../constants';
import { Plus, Edit3, Trash2, X, Check, Image as ImageIcon, LayoutGrid, Loader2, ListTree } from 'lucide-react';

interface CategoryManagementProps {
  categories: Category[];
  onAdd: (c: Category) => void;
  onUpdate: (c: Category) => void;
  onDelete: (id: string) => void;
}

const CategoryManagement: React.FC<CategoryManagementProps> = ({
  categories, onAdd, onUpdate, onDelete
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);

  const [formData, setFormData] = useState<Partial<Category>>({
    id: '',
    name: '',
    description: '',
    image: '',
    subcategories: []
  });
  const [newSub, setNewSub] = useState('');

  const handleOpenModal = (cat?: Category) => {
    if (cat) {
      setEditingCategory(cat);
      setFormData(cat);
    } else {
      setEditingCategory(null);
      setFormData({
        id: '',
        name: '',
        description: '',
        image: '',
        subcategories: []
      });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result: Category = {
      ...formData as Category,
      id: editingCategory ? editingCategory.id : (formData.name?.toLowerCase().replace(/\s+/g, '-') || `cat-${Date.now()}`),
    };
    
    if (editingCategory) {
      onUpdate(result);
    } else {
      onAdd(result);
    }
    setIsModalOpen(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files?.[0]) {
      setFormData(prev => ({ ...prev, image: URL.createObjectURL(files[0]) }));
    }
  };

  const addSub = () => {
    if (newSub.trim()) {
      // Avoid duplicates
      if (!formData.subcategories?.includes(newSub.trim())) {
        setFormData(prev => ({ ...prev, subcategories: [...(prev.subcategories || []), newSub.trim()] }));
      }
      setNewSub('');
    }
  };

  const removeSub = (idx: number) => {
    setFormData(prev => ({ ...prev, subcategories: prev.subcategories?.filter((_, i) => i !== idx) }));
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this category? All associated product relations might be affected.')) {
      setIsDeleting(id);
      setTimeout(() => {
        onDelete(id);
        setIsDeleting(null);
      }, 500);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className={`${theme.fonts.serif} text-3xl font-bold ${theme.colors.primary}`}>Categories</h2>
          <p className="text-stone-500 text-sm">Organize your collections and manage sub-categories</p>
        </div>
        <button 
          onClick={() => handleOpenModal()}
          className={`${theme.colors.accentBg} text-white px-5 py-2.5 rounded-xl shadow-md ${theme.colors.accentHover} transition-all flex items-center gap-2 font-semibold`}
        >
          <Plus size={20} />
          <span>New Category</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map(cat => (
          <div key={cat.id} className="bg-white border border-stone-100 rounded-3xl shadow-sm overflow-hidden flex flex-col group transition-all hover:shadow-md">
            <div className="w-full aspect-[21/9] bg-stone-50 overflow-hidden relative">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{cat.name}</h3>
                  <div className="flex items-center gap-2 text-white/80 text-xs font-medium uppercase tracking-widest">
                    <ListTree size={14} />
                    {cat.subcategories.length} Sub-categories
                  </div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => handleOpenModal(cat)} className="p-2.5 bg-white/90 backdrop-blur rounded-full text-stone-700 hover:bg-[#C5A059] hover:text-white transition-all shadow-lg"><Edit3 size={18} /></button>
                  <button onClick={() => handleDelete(cat.id)} disabled={isDeleting === cat.id} className="p-2.5 bg-white/90 backdrop-blur rounded-full text-rose-600 hover:bg-rose-600 hover:text-white transition-all shadow-lg">
                    {isDeleting === cat.id ? <Loader2 className="animate-spin" size={18} /> : <Trash2 size={18} />}
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="text-stone-500 text-sm mb-6 leading-relaxed">{cat.description}</p>
              
              <div className="space-y-3">
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest border-b border-stone-100 pb-2">Enabled Sub-categories</p>
                <div className="flex flex-wrap gap-2">
                  {cat.subcategories.length > 0 ? (
                    cat.subcategories.map((sub, i) => (
                      <span key={i} className="px-3 py-1 bg-stone-50 text-[10px] font-bold text-stone-500 uppercase tracking-widest rounded-lg border border-stone-100">
                        {sub}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-stone-400 italic">No sub-categories defined</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal - Polished for Category and Subcategory Management */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-8 py-6 border-b border-stone-100">
              <h3 className={`${theme.fonts.serif} text-2xl font-bold text-stone-800`}>
                {editingCategory ? 'Edit Collection' : 'New Collection'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-stone-400 hover:text-stone-600">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-5 max-h-[80vh] overflow-y-auto">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-500 uppercase">Category Name</label>
                <input 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-[#C5A059] outline-none transition-all"
                  placeholder="e.g. Bridal Collection"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-500 uppercase">Description</label>
                <textarea 
                  required
                  rows={2}
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-[#C5A059] outline-none resize-none transition-all"
                />
              </div>

              <div className="space-y-1.5 p-5 bg-stone-50 rounded-2xl border border-stone-100">
                <label className="text-xs font-bold text-stone-500 uppercase mb-3 block">Sub-categories</label>
                <div className="flex gap-2 mb-4">
                  <input 
                    value={newSub}
                    onChange={(e) => setNewSub(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addSub())}
                    className="flex-1 px-4 py-2 rounded-xl border border-stone-200 focus:border-[#C5A059] outline-none text-sm bg-white"
                    placeholder="e.g. Necklaces"
                  />
                  <button 
                    type="button" 
                    onClick={addSub} 
                    className={`${theme.colors.accentBg} px-4 rounded-xl font-bold text-xs text-white shadow-sm`}
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.subcategories?.map((sub, idx) => (
                    <span key={idx} className="flex items-center gap-2 px-3 py-1.5 bg-white text-[11px] font-bold text-[#C5A059] rounded-lg border border-[#C5A059]/20 shadow-sm transition-all hover:border-rose-200 group/item">
                      {sub}
                      <button 
                        type="button" 
                        onClick={() => removeSub(idx)} 
                        className="text-stone-300 hover:text-rose-600 transition-colors"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                  {formData.subcategories?.length === 0 && (
                    <p className="text-[10px] text-stone-400 italic py-2">Add at least one sub-category for better organization.</p>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold text-stone-500 uppercase">Cover Image</label>
                <div className="flex items-center gap-4">
                  {formData.image ? (
                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-stone-200 shadow-sm group">
                      <img src={formData.image} className="w-full h-full object-cover" />
                      <button 
                        type="button" 
                        onClick={() => setFormData({...formData, image: ''})} 
                        className="absolute top-1 right-1 p-1 bg-rose-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X size={10} />
                      </button>
                    </div>
                  ) : (
                    <label className="w-20 h-20 rounded-2xl border-2 border-dashed border-stone-200 flex flex-col items-center justify-center text-stone-400 hover:border-[#C5A059] hover:text-[#C5A059] transition-all cursor-pointer bg-stone-50/50">
                      <ImageIcon size={20} />
                      <input type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
                    </label>
                  )}
                  <p className="text-[10px] text-stone-400 max-w-[140px] leading-relaxed">Recommended for collection banners. High quality JPG/PNG.</p>
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
                  <span>Save Changes</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryManagement;
