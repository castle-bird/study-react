import { forwardRef } from "react";

const Footer = forwardRef((prop,ref) =>{
    return(
        <footer ref={ref}>
            <h1>푸터</h1>
        </footer>
    )
});

// display name 설정
// forwardRef 에러 해결 위함
Footer.displayName = 'Footer'

export default Footer;