import React from "react";
import { motion } from "motion/react";
import { Trash2, Edit3, Calendar, Tag } from "lucide-react";

const NoteCard = ({ note, deleteNote, updateNote, viewMode }) => {
  const id = note._id || note.id;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -6 }}
      className={`group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transition-all 
    hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-500/30 ${
    viewMode === "list" ? "flex items-center p-4 gap-6" : "p-6"
   }`}
  >
      <div className={`flex-1 ${viewMode === "list" ? "min-w-0" : ""}`}>
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-[grey] truncate pr-4 group-hover:text-white transition-colors">
            {note.title}
          </h3>
          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => updateNote(note)}
              className="p-2 text-white/30 hover:text-white hover:bg-black/5 rounded-full transition-all"
              title="Edit Note"
            >
              <Edit3 size={16} />
            </button>
            <button
              onClick={() => deleteNote(id)}
              className="p-2 text-white/30 hover:text-red-600 hover:bg-red-50 rounded-full transition-all"
              title="Delete Note"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>

        <p
          className={`text-white/60 text-sm leading-relaxed whitespace-pre-wrap mb-4 ${
            viewMode === "list" ? "truncate" : "line-clamp-4"
          }`}
        >
          {note.description}
        </p>

        <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-wider text-white/30">
          <div className="flex items-center gap-1">
            <Calendar size={12} />
            <span>ID: {String(id).slice(-6)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Tag size={12} />
            <span>Note</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NoteCard;
