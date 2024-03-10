"use client";

import { ChangeEvent, useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import { MinimalArticle } from "../../../../libs/utils/definitions";
import { toast } from "react-toastify";
import { createCirculaire } from "../../../../libs/action";
import axios, { AxiosRequestConfig } from "axios";
import { useRouter } from "next/navigation";

const customCss = {
  searchBox: {
    minHeight: "55px",
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

const AdminCreateCirculaire: React.FC<{
  articles: MinimalArticle[];
}> = ({ articles }) => {
  const maxTitleLength = 60;
  const [titleText, setTitleText] = useState("");
  const [charsTitleLeft, setCharsTitleLeft] = useState(maxTitleLength);
  const [articlesList, setArticleList] = useState([]);
  const [isSending, setIsSending] = useState(false);
  const router = useRouter();

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;
    if (inputText.length <= maxTitleLength) {
      setTitleText(inputText);
      setCharsTitleLeft(maxTitleLength - inputText.length);
    }
  };

  const onSelectTag = (selectedList: [], selectedItem: {}) => {
    setArticleList(selectedList);
  };

  const onRemoveTag = (selectedList: [], selectedItem: {}) => {
    setArticleList(selectedList);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const articles = articlesList;
    setIsSending(true);

    try {
      const res = await createCirculaire(formData, articles);

      const options: AxiosRequestConfig = {
        headers: { "Content-Type": "text/html" },
      };
      const response = await axios.post(
        "/api/newsletter",
        { slug: res },
        options
      );
      if (response.status !== 200) {
        throw new Error("Une erreur est survenue pendant l'envoi du mail");
      }

      toast.success("Circulaire créée et envoyée !");
      router.push("/admin/circulaires");
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Une erreur inconnue est survenue";
      toast.error(errorMessage);
    } finally {
      setIsSending(false);
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
                        Titre de la circulaire ({charsTitleLeft} caractères
                        restants)
                      </label>
                      <input
                        id="title"
                        type="text"
                        name="title"
                        value={titleText}
                        onChange={handleTitleChange}
                        placeholder="Titre de la circulaire"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="tagsSelect" className="form-label">
                        Articles de la circulaire
                      </label>
                      <Multiselect
                        id={"tagsSelect"}
                        style={customCss}
                        options={articles} // Options to display in the dropdown
                        onSelect={onSelectTag} // Function will trigger on select event
                        onRemove={onRemoveTag} // Function will trigger on remove event
                        displayValue="title" // Property name to display in the dropdown options
                        emptyRecordMsg="Aucun article disponible"
                        placeholder="Articles..."
                        avoidHighlightFirstOption={true}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className={
                  isSending
                    ? "btn btn-secondary mt-10 disabled"
                    : "btn btn-primary mt-10"
                }
                disabled={isSending}
              >
                {isSending
                  ? "Envoi en cours..."
                  : "Créer et envoyer aux adhérents newsletter"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCreateCirculaire;
