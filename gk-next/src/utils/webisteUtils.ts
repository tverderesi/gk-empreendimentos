import { useEffect } from "react";
export function generateLink(name: string) {
  //TODO: Test edge cases and implement solution
  const baseUrl = "/";
  const safeName = name
    .split(" ")[0]
    .replace(/[^\w\s]/gi, "") // remove non-alphanumeric characters
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .toLowerCase();

  return `${baseUrl}${safeName}`;
}

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, []);
}

export function splitString(text, separator) {
  return text ? text.split(separator) : [];
}
