import { Extension } from "@tiptap/core";

export const ReferenceStyle = Extension.create({
  name: "referenceStyle",

  addGlobalAttributes() {
    return [
      {
        types: ["textStyle"],
        attributes: {
          referenceStyle: {
            default: null,
            renderHTML: (attributes) => {
              if (!attributes.referenceStyle) {
                return {};
              }

              return { style: `font-size: 12px; font-style: italic;` };
            },
            parseHTML: (element) => ({
              referenceStyle:
                element.style.fontSize === "12px" &&
                element.style.fontStyle === "italic",
            }),
          },
        },
      },
    ];
  },

  addCommands() {
    return {
      setReferenceStyle:
        () =>
        ({ commands }) => {
          return commands.setMark("textStyle", { referenceStyle: true });
        },
      unsetReferenceStyle:
        () =>
        ({ commands }) => {
          return commands.unsetMark("textStyle");
        },
    };
  },
});
