import React, {useState, useEffect} from 'react'; 
import PostCard from './PostCard';
import Loader from './Loader';
import Paginate from './Paginate';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions/PostActions';

const Posts = () => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const {posts, loading} = useSelector((state) => state.PostReducers);

    useEffect(() => {
       dispatch(fetchPosts());
    }, [dispatch])

    const pageSize = 15;
    const totalPosts = posts.length;

    const indexOfLastPost = currentPage * pageSize;
    const indexOfFirstPost = indexOfLastPost - pageSize;
    const filterPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    return (
       <> 
           {loading ? (
               <Loader />
           ) : (
               <div className="container">
                   <div className="posts">
                       {filterPosts.map((post) => (
                           <PostCard post={post} />
                       ))}
                   </div>
                   {totalPosts > pageSize && (
                       <Paginate 
                          currentPage={currentPage}
                          setCurrentPage={setCurrentPage}
                          totalPosts={totalPosts}
                          pageSize={pageSize}
                       />
                   )}
               </div>
           )}
       </>
    )
}

export default Posts;