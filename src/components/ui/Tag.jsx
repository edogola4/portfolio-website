// src/components/ui/Tag.jsx
export default function Tag({ text }) {
    return (
      <span className="inline-block bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-300">
        {text}
      </span>
    );
  }