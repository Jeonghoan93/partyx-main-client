import { useLocation } from "react-router-dom";

interface IsCertainPageOptions {
  exact?: boolean;
  startWith?: boolean;
  regex?: RegExp;
}

export const useIsCertainPage = (
  pageName: string,
  options: IsCertainPageOptions = {}
) => {
  const { exact = true, startWith = false, regex } = options;
  const location = useLocation();
  const pathname = location.pathname;

  if (startWith) {
    return pathname.startsWith(pageName);
  }

  if (regex) {
    return regex.test(pathname);
  }

  return exact && pathname === pageName;
};
