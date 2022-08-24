import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { deepPurple } from "@mui/material/colors";
import React from "react";
import "./index.css";

const enum ArticleType {
    Blog = "Blog",
    Github = "Github",
    StackOverflow = "StackOverflow",
}

interface ArticleItem {
    url: string;
    title: string;
    subtitle?: string;
    type: ArticleType;
}
const buttonList: ArticleType[] = [ArticleType.Blog, ArticleType.Github];
const articleList: ArticleItem[] = [
    {
        url: "https://redyin.notion.site/Who-is-this-445c3a1a87184f4cb18d116a6a28a1ae",
        title: "Who is “this” ?",
        type: ArticleType.Blog,
        subtitle:
            "在 JavaScript 函数中 this 指的是什么？有以下五种情景规则去判断",
    },
    {
        url: "https://redyin.notion.site/ed849bc4ddb44157bc811e134111b830",
        title: "前端入门指南",
        type: ArticleType.Blog,
        subtitle: "简单入门指南....",
    },
];

/**
 * Home Page
 * @return {React.ReactNode}
 */
function App() {
    const [activeType, setActiveType] = React.useState(ArticleType.Blog);

    return (
        <div className="app">
            <header>
                <h2>Red Yin</h2>
            </header>
            <section className="avatar-view">
                <Avatar sx={{ bgcolor: deepPurple[400] }}>RY</Avatar>
                <div>
                    <p>
                        This is a website about <a href="#">Red.Yin</a>.
                    </p>
                    <p>Wish you can get something in here.</p>
                </div>
            </section>
            <section className="button-list">
                {buttonList.map((v) => (
                    <Button
                        key={v}
                        variant={activeType === v ? "contained" : "text"}
                        onClick={() => setActiveType(v)}
                    >
                        {v}
                    </Button>
                ))}
            </section>
            <section>
                {articleList
                    .filter((v) => v.type === activeType)
                    .map((v) => (
                        <div
                            className="article"
                            key={v.url}
                            onClick={() => window.open(v.url)}
                        >
                            <div className="article-title">{v.title}</div>
                            <div className="subtitle">{v.subtitle}</div>
                        </div>
                    ))}
            </section>
        </div>
    );
}

export default App;
