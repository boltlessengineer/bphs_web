import Table from "@editorjs/table";
import Paragraph from "@editorjs/paragraph";
import List from "@editorjs/list";
import LinkTool from "@editorjs/link";
import Image from "@editorjs/image";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import CheckList from "@editorjs/checklist";
import InlineCode from "@editorjs/inline-code";
import SimpleImage from "@editorjs/simple-image";

export const EDITOR_JS_TOOLS = {
  paragraph: Paragraph,
  header: Header,
  list: List,
  linkTool: LinkTool,
  // image: Image,
  table: Table,
  // quote: Quote,
  checklist: CheckList,
  inlineCode: InlineCode,
  simpleImage: {
    class: SimpleImage,
    inlineToolbar: true,
    config: {
      placeholder: "Paste image URL",
    },
  },
};
