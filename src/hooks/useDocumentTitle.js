import { useEffect } from "react";

export const useDocumentTitle = (titleText) => {
  useEffect(() => {
    document.title = `Beads & Beyonds | ${titleText}`;
  }, [titleText]);
};
