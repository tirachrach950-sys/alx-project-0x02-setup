import { useState, type FC } from "react";

interface PostModalProps {
  onAdd: (title: string, content: string) => void;
}

const PostModal: FC<PostModalProps> = ({ onAdd }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;
    onAdd(title, content);
    setTitle("");
    setContent("");
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Add Post
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add New Post</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 rounded"
              />
              <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="border p-2 rounded"
              />
              <div className="flex justify-end gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-1 rounded border"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PostModal;
