import _ from 'lodash';

const Pagination = (props) => {
 const {pageSize , currentPage , countPosts}  = props;
 const size = Math.ceil(countPosts / pageSize);
 const pages = _.range(1, size+1);
    return ( 
        <nav>
            <ul className="pagination">
                {pages.map(page=>
                    <li key={page}
                    className={currentPage===page?'page-item active':'page-item'}
                    onClick={()=>props.onpagChange(page)}
                    ><button className="page-link" >{page}</button></li>
                    )}
            </ul>
        </nav>
    );
}
 
export default Pagination;