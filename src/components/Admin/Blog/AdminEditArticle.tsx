"use client";

import { ChangeEvent, useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import Tiptap from "@/components/Common/Tiptap";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import { Article, Category, Tag } from "../../../../libs/utils/definitions";
import { toast } from "react-toastify";
import { updateArticle } from "../../../../libs/action";
import he from "he";

const customCss = {
  searchBox: {
    height: "55px",
    padding: "15px 20px",
    color: "#18181b",
    fontSize: "14px",
    border: "1px solid #eeeeee",
    background: "#eeeeee",
    borderRadius: "6px",
    transition: "all 0.5s ease",
  },
  chips: { background: "#c72b2c" },
};

const AdminEditArticle: React.FC<{
  article: Article;
  categories: Category[];
  tags: Tag[];
  authorRole: number;
}> = ({ article, categories, tags, authorRole }) => {
  const maxTitleLength = 100;
  const maxIntroLength = 160;
  const [titleText, setTitleText] = useState(article.title);
  const [charsTitleLeft, setCharsTitleLeft] = useState(maxTitleLength);
  const [introText, setIntroText] = useState(article.intro);
  const [charsIntroLeft, setCharsIntroLeft] = useState(maxIntroLength);

  const [tagList, setTagList] = useState(article.tags);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link.configure({
        autolink: true,
      }),
    ],
    content: he.decode(article.content),
  });

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;
    if (inputText.length <= maxTitleLength) {
      setTitleText(inputText);
      setCharsTitleLeft(maxTitleLength - inputText.length);
    }
  };

  const handleIntroChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = event.target.value;
    if (inputText.length <= maxIntroLength) {
      setIntroText(inputText);
      setCharsIntroLeft(maxIntroLength - inputText.length);
    }
  };

  const onSelectTag = (selectedList: [], selectedItem: {}) => {
    setTagList(selectedList);
  };

  const onRemoveTag = (selectedList: [], selectedItem: {}) => {
    setTagList(selectedList);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const content = editor?.getHTML();
    const tags = tagList;

    if (!content) {
      toast.error("Merci de saisir du contenu pour votre article");
      return;
    }

    try {
      await updateArticle(article.id, formData, content, tags, authorRole);
      toast.success("Article modifié avec succès");
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Une erreur inconnue est survenue";
      toast.error(errorMessage);
    }
  };

  return (
    <>
      <div className="col-lg-8 col-md-12">
        <div className="content-details">
          <div className="article-content">
            <form onSubmit={handleSubmit}>
              <div className="contact-form-box">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="title" className="form-label">
                        Titre de l&apos;article ({charsTitleLeft} caractères
                        restants)
                      </label>
                      <input
                        value={titleText}
                        onChange={handleTitleChange}
                        id="title"
                        type="text"
                        name="title"
                        placeholder="Titre de l'article"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="url" className="form-label">
                        URL de l&apos;image principale (créez la depuis
                        &quot;Médiathèque&quot;)
                      </label>
                      <input
                        defaultValue={article.image_url}
                        type="text"
                        id="url"
                        name="url"
                        placeholder="URL de l'image principale (800x600px)"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="category" className="form-label">
                        Catégorie
                      </label>
                      <select
                        id="category"
                        name="category"
                        className="form-control"
                        defaultValue={article.category_id}
                      >
                        {categories.map((d) => (
                          <option key={d.id} value={d.id}>
                            {d.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label htmlFor="tagsSelect" className="form-label">
                        Tags
                      </label>
                      <Multiselect
                        id={"tagsSelect"}
                        style={customCss}
                        options={tags} // Options to display in the dropdown
                        selectedValues={article.tags} // Preselected value to persist in dropdown
                        onSelect={onSelectTag} // Function will trigger on select event
                        onRemove={onRemoveTag} // Function will trigger on remove event
                        displayValue="name" // Property name to display in the dropdown options
                        emptyRecordMsg="Aucun tag disponible"
                        placeholder="Tags"
                        avoidHighlightFirstOption={true}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="ShortIntro" className="form-label">
                        Description courte ({charsIntroLeft} caractères
                        restants)
                      </label>
                      <textarea
                        className="form-control"
                        id="ShortIntro"
                        value={introText}
                        name="intro"
                        onChange={handleIntroChange}
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <Tiptap editor={editor} />

              <button type="submit" className="btn btn-primary mt-10">
                Mettre à jour
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminEditArticle;
