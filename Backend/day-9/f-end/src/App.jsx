import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "motion/react";
import {
  Plus,
  RefreshCw,
  AlertCircle,
  LayoutGrid,
  List,
  Search
} from "lucide-react";
import NoteCard from "./components/NoteCard";
import NoteForm from "./components/NoteForm";
import { BASE_URL } from "./api";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  const [viewMode, setViewMode] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");

  // 📥 Fetch Notes
  const fetchNotes = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${BASE_URL}/notes`);
      // User's snippet expects res.data.notes
      const fetchedNotes =
        res.data.notes || (Array.isArray(res.data) ? res.data : []);
      setNotes(fetchedNotes);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch notes. Check your backend connection.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // ➕ Add Note
  const addNote = async (note) => {
    try {
      await axios.post(`${BASE_URL}/notes`, note);
      fetchNotes();
      setIsFormOpen(false);
    } catch (err) {
      console.error(err);
      setError("Failed to add note.");
    }
  };

  // ❌ Delete Note
  const deleteNote = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/notes/${id}`);
      fetchNotes();
    } catch (err) {
      console.error(err);
      setError("Failed to delete note.");
    }
  };

  // ✏️ Update Note (PATCH)
  const updateNote = async (id, updatedNote) => {
    try {
      await axios.patch(`${BASE_URL}/notes/${id}`, updatedNote);
      fetchNotes();
      setEditingNote(null);
      setIsFormOpen(false);
    } catch (err) {
      console.error(err);
      setError("Failed to update note.");
    }
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1120] via-[#0F172A] to-[#020617] text-[#E2E8F0] selection:bg-[#6366F1] selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/5 backdrop-blur-xl border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
              <Plus className="rotate-45" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-white">
                Notes.io
              </h1>
              <p className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                Local API Tester
              </p>
            </div>
          </div>

          {/* Search */}
          <div className="flex flex-1 max-w-md relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
              size={18}
            />
            <input
              type="text"
              placeholder="Search notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-white/30"
            />
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Grid/List toggle */}
            <div className="flex bg-white/5 p-1 rounded-lg mr-2 border border-white/10">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded-md transition-all ${
                  viewMode === "grid"
                    ? "bg-white/10 text-white shadow-sm"
                    : "text-white/40 hover:text-white"
                }`}
              >
                <LayoutGrid size={18} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-1.5 rounded-md transition-all ${
                  viewMode === "list"
                    ? "bg-white/10 text-white shadow-sm"
                    : "text-white/40 hover:text-white"
                }`}
              >
                <List size={18} />
              </button>
            </div>

            {/* Refresh */}
            <button
              onClick={fetchNotes}
              className="p-2 text-white/40 hover:text-white hover:bg-white/10 rounded-full transition-all"
            >
              <RefreshCw size={20} className={loading ? "animate-spin" : ""} />
            </button>

            {/* New Note */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setEditingNote(null);
                setIsFormOpen(true);
              }}
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2.5 rounded-full font-semibold flex items-center gap-2 shadow-lg shadow-indigo-500/30 hover:opacity-90 transition-all"
            >
              <Plus size={20} />
              <span>New Note</span>
            </motion.button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto p-6 md:p-10">
        {/* Error */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 bg-red-500/10 border border-red-500/20 p-4 rounded-2xl flex items-start gap-3 text-red-400 text-sm"
          >
            <AlertCircle size={18} className="shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-semibold">Connection Issue</p>
              <p className="opacity-80">{error}</p>
            </div>
            <button
              onClick={() => setError(null)}
              className="text-red-400 hover:text-red-200"
            >
              <RefreshCw size={14} />
            </button>
          </motion.div>
        )}

        {/* Loading */}
        {loading && notes.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="w-12 h-12 border-4 border-white/10 border-t-indigo-500 rounded-full animate-spin" />
            <p className="text-white/40 font-medium animate-pulse">
              Syncing with local server...
            </p>
          </div>
        ) : filteredNotes.length === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10">
              <Search size={32} className="text-white/20" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">
              No notes found
            </h3>
            <p className="text-white/40 max-w-xs">
              {searchQuery
                ? `No results for "${searchQuery}"`
                : "Your local database is empty. Create your first note to get started."}
            </p>
          </div>
        ) : (
          /* Notes Grid */
          <motion.div
            layout
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "flex flex-col gap-4 max-w-4xl mx-auto"
            }
          >
            <AnimatePresence mode="popLayout">
              {filteredNotes.map((note) => (
                <NoteCard
                  key={note._id || note.id}
                  note={note}
                  viewMode={viewMode}
                  deleteNote={deleteNote}
                  updateNote={(n) => {
                    setEditingNote(n);
                    setIsFormOpen(true);
                  }}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </main>

      {/* Form Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <NoteForm
            initialData={editingNote}
            onClose={() => {
              setIsFormOpen(false);
              setEditingNote(null);
            }}
            onSubmit={
              editingNote
                ? (data) => updateNote(editingNote._id || editingNote.id, data)
                : addNote
            }
          />
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full shadow-xl flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-white/50">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span>Server: http://localhost:3000</span>
          <span className="w-1 h-1 bg-white/20 rounded-full" />
          <span>Notes: {notes.length}</span>
        </div>
      </footer>
    </div>
  );
}
