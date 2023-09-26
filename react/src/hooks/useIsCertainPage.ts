import { useLocation } from "react-router-dom";

interface IsCertainPageOptions {
  exact?: boolean;
  startsWith?: boolean;
  regex?: RegExp;
}

export const useIsCertainPage = (
  pageName: string,
  options: IsCertainPageOptions = {}
) => {
  const { exact = true, startsWith = false, regex } = options;
  const location = useLocation();
  const pathname = location.pathname;

  if (startsWith) {
    return pathname.startsWith(pageName);
  }

  if (regex) {
    return regex.test(pathname);
  }

  return exact && pathname === pageName;
};
