import { useEffect, useState } from "react";

export const AdminPage = () => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    fetch("https://pnuece.pnu.app/admin/products")
      .then((response) => response.text())
      .then((html) => setHtmlContent(html));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};
