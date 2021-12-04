import React from 'react';
import '../styles/paginate.css'

const Paginate = ({ currentPage, setCurrentPage, totalPosts, pageSize }) => {
    const totalPages = Math.ceil(totalPosts / pageSize);
    let pages = [];

    for (let p = 1; p <= totalPages; p++) {
        pages.push(p);
    }

    return (
        <ul className="paginate">
            <li className={`page-item ${currentPage === 1 && `disabled`}`}>
                <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>
                    &laquo;
                </button>
            </li>
            {pages.map((page) => (
               <li
                 key={page}
                 className={`page-item ${page === currentPage && `active`}`}
                 onClick={() => setCurrentPage(page)}
               >
                 <button className="page-link">{page}</button>
               </li>
            ))}
            <li className={`page-item ${currentPage === totalPages && `disabled`}`}>
                <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>
                   &raquo;
                </button>
            </li>
        </ul>
    )

}

export default Paginate;