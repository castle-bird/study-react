// SEO를 위한 META태그
import { Helmet, HelmetProvider } from "react-helmet-async";

const Meta = ({
    title = "작업 목록 사이트",
    subject = "개인 블로그 및 기술 공유",
    description = "이 사이트는 Notion API를 이용한 사이트입니다. 저의 작업경력을 보여줍니다!",
    author = "castle-bird",
    keyword = "개발, 블로그, 개인, 기술, Notion, API, React",
    copy = "Copyright © 2024 코딩 잘하고 싶은 사람. All rights reserved.",
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
            </Helmet>
        </HelmetProvider>
    );
};

export default Meta;
