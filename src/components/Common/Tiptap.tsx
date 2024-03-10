"use client";

import { EditorContent } from "@tiptap/react";
import TiptapMenuBar from "./TiptapMenuBar";
import { useCallback } from "react";

const Tiptap = ({ editor }: { editor: any }) => {
  const addImage = useCallback(() => {
    const url = window.prompt("URL");

    if (url) {
      editor?.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  const setLink = useCallback(() => {
    const previousUrl = editor?.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    if (url === null) {
      return;
    }

    if (url === "") {
      editor?.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }
    editor
      ?.chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: url })
      .run();
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <>
      <TiptapMenuBar editor={editor} addImage={addImage} setLink={setLink} />
      <EditorContent editor={editor} className="tiptap-editor" />
    </>
  );
};

export default Tiptap;
