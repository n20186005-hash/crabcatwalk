import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getTranslationsForLocale } from "@/i18n/translations";

export const metadata: Metadata = {
  title: "Crab Catwalk | Passarela do Caranguejo",
  description:
    "Crab Catwalk (Passarela do Caranguejo) - Famous seaside promenade in Aracaju, Brazil. Guide to crab restaurants and sunset views.",
};

export default function RootPage() {
  // 不再强制重定向到特定语言，而是显示一个语言选择页面
  // 搜索引擎爬虫可以抓取这个页面并发现所有语言版本的链接
  return (
    <div style={{ 
      minHeight: "100vh", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "#fff",
      fontFamily: "system-ui, -apple-system, sans-serif"
    }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Crab Catwalk</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem", opacity: 0.9 }}>Passarela do Caranguejo</p>
      <p style={{ fontSize: "1rem", marginBottom: "3rem", opacity: 0.8 }}>请选择您的语言 / Select your language / Selecione seu idioma</p>
      
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
        <a 
          href="/pt" 
          style={{ 
            padding: "1rem 2rem", 
            background: "rgba(255,255,255,0.2)", 
            borderRadius: "8px", 
            color: "#fff", 
            textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.3)",
            backdropFilter: "blur(10px)"
          }}
        >
          🇧🇷 Português
        </a>
        <a 
          href="/en" 
          style={{ 
            padding: "1rem 2rem", 
            background: "rgba(255,255,255,0.2)", 
            borderRadius: "8px", 
            color: "#fff", 
            textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.3)",
            backdropFilter: "blur(10px)"
          }}
        >
          🇺🇸 English
        </a>
        <a 
          href="/zh" 
          style={{ 
            padding: "1rem 2rem", 
            background: "rgba(255,255,255,0.2)", 
            borderRadius: "8px", 
            color: "#fff", 
            textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.3)",
            backdropFilter: "blur(10px)"
          }}
        >
          🇨🇳 中文
        </a>
      </div>
      
      <p style={{ marginTop: "3rem", fontSize: "0.9rem", opacity: 0.7 }}>
        Aracaju, Brazil · Seaside Promenade · Crab Restaurants
      </p>
    </div>
  );
}
