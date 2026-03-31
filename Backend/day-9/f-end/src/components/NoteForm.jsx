import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { X, Send, Save, Sparkles } from 'lucide-react';

export default function NoteForm({ onSubmit, onClose, initialData }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDescription(initialData.description);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    onSubmit({ title, description });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative bg-white rounded-[32px] w-full max-w-xl shadow-2xl overflow-hidden border border-black/5"
      >
        <div className="px-8 py-6 border-b border-black/5 flex justify-between items-center bg-[#F8F9FA]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white">
              <Sparkles size={16} />
            </div>
            <h2 className="text-xl font-bold text-[#1A1A1A]">
              {initialData ? 'Edit Note' : 'Create New Note'}
            </h2>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 text-black/20 hover:text-black hover:bg-black/5 rounded-full transition-all"
          >
            <X size={20} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-black/40 ml-1">Note Title</label>
            <input
              type="text"
              value={title}
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What's on your mind?"
              className="w-full px-6 py-4 bg-black/5 border-none rounded-2xl text-lg font-semibold focus:ring-4 focus:ring-black/5 outline-none transition-all placeholder:text-black/20"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-black/40 ml-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              placeholder="Add some details..."
              className="w-full px-6 py-4 bg-black/5 border-none rounded-2xl text-base focus:ring-4 focus:ring-black/5 outline-none resize-none transition-all placeholder:text-black/20"
              required
            />
          </div>
          
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-4 border border-black/5 text-black/60 font-bold rounded-2xl hover:bg-black/5 transition-all"
            >
              Discard
            </button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="flex-[2] px-6 py-4 bg-black text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-black/20 hover:bg-zinc-800 transition-all"
            >
              {initialData ? <Save size={20} /> : <Send size={20} />}
              <span>{initialData ? 'Save Changes' : 'Publish Note'}</span>
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
