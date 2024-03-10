"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // Debouncing...
  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 300);
  return (
    <>
      <div className="pt-40">
        <div className="container">
          <div className="widget-area" id="secondary">
            <div className="widget widget_search">
              <form
                className="search-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <label>
                  <input
                    type="search"
                    className="search-field"
                    placeholder={placeholder}
                    onChange={(e) => {
                      handleSearch(e.target.value);
                    }}
                    defaultValue={searchParams.get("query")?.toString()}
                  />
                </label>
                <button type="submit" className="search-submit">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
