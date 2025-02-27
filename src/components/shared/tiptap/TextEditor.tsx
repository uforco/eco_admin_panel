"use client";
import './defualtcss.scss'
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import ListItem from "@tiptap/extension-list-item";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import Heading from "@tiptap/extension-heading";
import Image from "@tiptap/extension-image";
import Highlight from "@tiptap/extension-highlight";
import { TextAlign } from '@tiptap/extension-text-align';

import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaListOl,
  FaListUl,
  FaHeading,
} from "react-icons/fa";
import { PiTextAlignLeftBold, PiTextAlignCenterBold, PiTextAlignRightBold, PiTextAlignJustifyBold  } from "react-icons/pi";


import { useState } from "react";

const Tiptap = () => {
  const [headingLevel, setHeadingLevel] = useState(1);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Bold,
      Italic,
      Underline,
      ListItem,
      BulletList,
      OrderedList,
      Heading.configure({ levels: [1, 2, 3] }), // Supports <h1>, <h2>, <h3>
      TextAlign.configure({
        types: ['paragraph', 'heading'],
      }),
      Image,
      Highlight
    ],
    content: "<p>Please type the description...</p>",
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl focus:outline-none min-h-[250px]",
      },
    },
    immediatelyRender: false,
  });

  if (!editor) {
    return null;
  }

  // const saveContent = () => {
  //   if (editor) {
  //     console.log(editor.getHTML(), typeof editor.getHTML());
  //   }
  // };

  // console.log(editor.getHTML(), typeof editor.getHTML())


  return (
    <div  className="mb-6 inpurFill " >
      <label htmlFor="description" className=" text-gray-300 dark:text-[#091C46] w-full ">Description</label>
      <div id='description' className="flex flex-col pt-1  ">
          <div className="flex space-x-2 mb-0 border border-b-0 overflow-hidden justify-between ">
            <div className="relative">
              <button className={`p-2`}>
                <FaHeading />
              </button>
              <select
                value={headingLevel}
                onChange={(e) => {
                  const level: number = Number(e.target.value);
                  setHeadingLevel(level);
                  editor.chain().focus().toggleHeading({ level }).run();
                }}
                className="absolute top-0 left-0 opacity-0 w-full h-full rounded-none cursor-pointer"
              >
                {[1, 2, 3, 4, 5, 6].map((level) => (
                  <option key={level} value={level}>
                    H{level}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={`p-2 ${editor.isActive("bold") ? "bg-gray-300/40" : ""}`}
            >
              <FaBold />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={`p-2 ${
                editor.isActive("italic") ? "bg-gray-300/40" : ""
              }`}
            >
              <FaItalic />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={`p-2 ${
                editor.isActive("underline") ? "bg-gray-300/40" : ""
              }`}
            >
              <FaUnderline />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={`p-2 ${
                editor.isActive("bulletList") ? "bg-gray-300/40" : ""
              }`}
            >
              <FaListUl />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={`p-2 ${
                editor.isActive("orderedList") ? "bg-gray-300/40" : ""
              }`}
            >
              <FaListOl />
            </button>
            <button onClick={() => editor.chain().focus().setTextAlign('left').run()}
              className={`p-2 ${
                editor.isActive({ textAlign: 'left' }) ? "bg-gray-300/40" : ""
              }`}>
              <PiTextAlignLeftBold className=' text-lg ' />
            </button>
            <button  onClick={() => editor.chain().focus().setTextAlign('center').run()}
              className={`p-2 ${
                editor.isActive({ textAlign: 'center' }) ? "bg-gray-300/40" : ""
              }`}>
            <PiTextAlignCenterBold className=' text-lg ' ></PiTextAlignCenterBold>
            </button>
            <button onClick={() => editor.chain().focus().setTextAlign('right').run()}
              className={`p-2 ${
                editor.isActive({ textAlign: 'right' }) ? "bg-gray-300/40" : ""
              }`}>
            <PiTextAlignRightBold className=' text-lg ' ></PiTextAlignRightBold>
            </button>
            <button onClick={() => editor.chain().focus().setTextAlign('justify').run()}
              className={`p-2 ${
                editor.isActive({ textAlign: 'justify' }) ? "bg-gray-300/40" : ""
              }`}>
            <PiTextAlignJustifyBold className=' text-lg ' ></PiTextAlignJustifyBold>
            </button>
          </div>
          <EditorContent editor={editor} className="  p-2 defualtcss no-srcolber  " />
      </div>
    </div>
  );
};

export default Tiptap;
