import React from "react";
import Link from "next/link";
import {
  fetchAllCategoriesWithCount,
  fetchAllTagsWithCount,
} from "../../../libs/data/public/blog";
import BlogSearch from "../Common/BlogSearch";

const BlogSidebar: React.FC<{ onArticle?: boolean }> = async ({
  onArticle = false,
}) => {
  const categories = await fetchAllCategoriesWithCount();
  const tags = await fetchAllTagsWithCount();
  return (
    <>
      <div className="widget-area" id="secondary">
        <BlogSearch placeholder="Rechercher..." onArticle={onArticle} />

        {/* Categories */}
        <div className="widget widget_categories">
          <h3 className="widget-title">Catégories</h3>
          <ul>
            {categories &&
              categories.map((value, i) => (
                <li key={i}>
                  <Link href={`/blog/categorie/${value.slug}`}>
                    {value.name}{" "}
                    <span className="post-count">({value.articleCount})</span>
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">Tags</h3>

          <div className="tagcloud">
            {tags &&
              tags.map((value, i) => (
                <Link key={i} href={`/blog/tag/${value.slug}`}>
                  {value.name}{" "}
                  <span className="tag-link-count">({value.articleCount})</span>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
