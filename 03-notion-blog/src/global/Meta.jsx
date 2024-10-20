// SEO를 위한 META태그
import { Helmet, HelmetProvider } from "react-helmet-async";

const Meta = ({
    title = "경력기술서 사이트",
    subject = "경력기술서 및 포트폴리오",
    description = "이 사이트는 Notion API를 이용한 사이트입니다. 저의 경력기술을 보여줍니다!",
    author = "castle-bird",
    keyword = "개발, 블로그, 개인, 기술, Notion, API, React",
    copy = "Copyright © 2024 castle-bird. All rights reserved.",
}) => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* SEO관련 */}
                <meta name="description" content={description} />
                <meta name="keywords" content={keyword} />
                <meta name="author" content={author} />
                <meta name="subject" content={subject} />
                <meta name="copyright" content={copy} />
                <meta name="content-language" content="ko" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />

                <title>{title}</title>

                <link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet" />
            </Helmet>
        </HelmetProvider>
    );
};

export default Meta;
