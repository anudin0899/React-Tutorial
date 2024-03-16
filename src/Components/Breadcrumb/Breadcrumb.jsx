import React from 'react'
import { useLocation, Link } from 'react-router-dom';

const Breadcrumb = () => {

    const { pathname } = useLocation();
    const paths = pathname.split('/').filter((x) => x);
    console.log(paths);
    let breadcrumb = "";

    return (
        <div style={{ padding: '20px', display: 'flex' }}>
            {paths.length > 0 && <Link to='/'>Home</Link>}
            {paths.map((path, index) => {
                breadcrumb += `/${path}`;
                const isLast = index === paths.length - 1;
                return isLast ? (
                    <span style={{ paddingLeft: '10px' }} key={breadcrumb}>/ {" "} {path}</span>
                ) : (
                    <span style={{ paddingLeft: '10px' }} key={breadcrumb}>/ {" "}
                        <Link to={breadcrumb}>{path}</Link>
                    </span>
                );
            })}
        </div>
    )
}

export default Breadcrumb