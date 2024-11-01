import styled from "styled-components";

const Items = styled.div`
    display: flex;
    flex-direction: column;

    height: 100%;
    padding: 1rem;
    border-radius: 15px;
    box-shadow: 0 0 5px rgba(0 0 0 / 25%);

    strong {
        padding: 0 0 0.75rem;
        font-size: 0.875rem;
        font-weight: 700;
    }

    .title {
        padding: 0.5rem 0 0.75rem;
        font-size: 1.125rem;
        letter-spacing: -1px;
    }

    .thumb {
        padding-top: 10rem;
        background-repeat: no-repeat;
        background-position: center;
        background-size: auto 100%;
    }

    .date {
        padding-bottom: 0.5rem;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 6px 8px;

        span {
            padding: 2px 8px;
            border-radius: 5px;
            letter-spacing: -0.5px;

            &.yellow {
                background-color: rgb(253, 236, 200);
                color: rgb(64, 44, 27);
            }

            &.blue {
                background-color: rgb(211, 229, 239);
                color: rgb(24, 51, 71);
            }

            &.purple {
                background-color: rgb(232, 222, 238);
                color: rgb(65, 36, 84);
            }

            &.green {
                background-color: rgb(219, 237, 219);
                color: rgb(28, 56, 41);
            }

            &.red {
                background-color: rgb(255, 226, 221);
                color: rgb(93, 23, 21);
            }

            &.brown {
                background-color: rgb(238, 224, 218);
                color: rgb(68, 42, 30);
            }

            &.pink {
                background-color: rgb(245, 224, 233);
                color: rgb(76, 35, 55);
            }

            &.gray {
                background-color: rgb(227, 226, 224);
                color: rgb(50, 48, 44);
            }

            &.orange {
                background-color: rgb(250, 222, 201);
                color: rgb(73, 41, 14);
            }
        }
    }
`;

const HomeItems = ({ title, image, roles, timelinesStarts, timelinesEnds, tags }) => {
    return (
        <Items>
            <strong>{roles}</strong>
            <div className="thumb" style={{ backgroundImage: `url(${image})` }}></div>
            <h4 className="title">{title}</h4>
            <p className="date">
                기간 : {timelinesStarts}
                {/* 끝나는 날짜 없으면 안나옴 */}
                {timelinesEnds ? `~ ${timelinesEnds}` : ``}
            </p>
            <div className="tags">
                {tags.map((tag, idx) => (
                    <span key={idx} className={tag.color}>
                        {`#${tag.name}`}
                    </span>
                ))}
            </div>
        </Items>
    );
};

export default HomeItems;
