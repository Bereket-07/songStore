import React, { Component } from 'react';
import http from '../../services/httpService';
import config  from '../../config.json';
import 'react-toastify/dist/ReactToastify.css';
import Table from '../../components/table';
import Grid from '../../components/Grid';
import Pagination from '../../common/pagination';
import { paginate } from '../../utils/paginate';
import ListGroup from '../../components/listGroup';
import NewPost from '../../components/newPost';
import '../../App.css';


class Main extends Component {
  state = { 
      posts:[],
      showAddForm:false,
      newItem: { title: '', body: '' , id:''},
      chooseDisplay:true,
      pageSize:8,
      currentPage:1,
      editidedPost:null
   } 
   async componentDidMount() {
      const {data:posts} = await http.get(config.apiEndPoint);
      for(let i=0;i<posts.length;i++){
        posts[i].liked=false;
        posts[i].boom=false;
        posts[i].wantUpdate=false;
      }
      this.setState({posts});
   }
    formPopUp=()=>{
      this.setState({showAddForm:!this.state.showAddForm});
    }
   handelUpdate=id=>{
    const { posts } = this.state;
    const itemToEdit = posts.find((post) => post.id === id);
    this.setState({ editidedPost: itemToEdit });
   }
   handleSave=async(post)=>{
    const orginalState = [...this.state.posts];
    const { posts, editidedPost } = this.state;
    const updatedItems = posts.map((post) =>
      post.id === editidedPost.id ? { ...post, title: editidedPost.title } : post
    );
    this.setState({ posts: updatedItems, editidedPost: null });
    try{
      await http.put(config.apiEndPoint+`/${post.id}`,post);
    }
    catch (ex) {
     if(ex.response&&ex.response.status===404)
        alert('the post can not be updated');
       this.setState({posts:orginalState});
    }
   }
   handelchangeUpdate=(e)=>{
    const { editidedPost } = this.state;
    this.setState({
      editidedPost: { ...editidedPost, title: e.target.value },
    });
   
   }
   handleDelete=async post=>{
     const orginalState = [...this.state.posts];
     const posts = this.state.posts.filter(p=>p.id!==post.id);
     this.setState({posts}); 
     try{
       await http.delete(config.apiEndPoint+`/${post.id}`);
     }
     catch (ex) {
      if(ex.response&&ex.response.status===404)
         alert('the post is already deleted');
        this.setState({posts:orginalState});
     }
   }
   handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      newItem: { ...prevState.newItem, [name]: value },
    }));
  };

   addNewItem = async() => {
    const {newItem , posts} = this.state
    if (newItem.title && newItem.body) {
      const orginalState = [...posts];
      const size= posts.length;
      const length = posts[size-1].id>=posts[0].id?(posts[size-1].id)+1:(posts[0].id)+1;
      const newItem2 = {...newItem};
      newItem2.id=length;
      this.setState({newItem:newItem2});
      this.setState((prevState) => ({
        posts: [prevState.newItem,...prevState.posts],
        newItem: { title: '', body: '' },
        showAddForm:false
      }));
      try{
        await http.post(config.apiEndPoint,this.state.newItem);
      }
      catch (ex) {
       if(ex.response&&ex.response.status===404)
          alert('can not add this post');
         this.setState({posts:orginalState});
      }
       } else {
      alert('Please provide both title and body');
    }
  }
  handleDisplay=()=>{
    this.setState({chooseDisplay:!this.state.chooseDisplay});
  }
  labelHandler=()=>{
    return this.state.chooseDisplay===true?'Table View':'Grid View';
  }
  pagChangeHandler=(page)=>{
    this.setState({currentPage:page});
  }
  likeHandler=(data)=>{
     const posts = [...this.state.posts];
     const index = posts.indexOf(data);
     posts[index].liked=!data.liked;
    this.setState({posts});
  }
  boomHandler=(data)=>{
    const posts = [...this.state.posts];
    const index = posts.indexOf(data);
    posts[index].boom=!data.boom;
    this.setState({posts});
  }
  render() { 
    const posts = paginate(this.state.posts, this.state.currentPage,this.state.pageSize);
    return (
      <div className='back'>
        <main className='container mt-3 row'>
          <div className='col-2'>
          <ListGroup
            onPopUp={this.formPopUp}
            onLablleChange={this.labelHandler}
            onDisplay={this.handleDisplay}
          />
          {this.state.showAddForm&&
            <NewPost
              newItem={this.state.newItem}
              onInputChange={this.handleInputChange}
              onAddtionOfNewItem={this.addNewItem}
            />
          }
          </div>
          <div className='col'>
            {!this.state.chooseDisplay&&   
              <Table
                 posts={posts}
                 onDelete={this.handleDelete}
                 onUpdate={this.handelUpdate}
                 data={this.state.posts}
                 onLike={this.likeHandler}
                 onBoom={this.boomHandler}
                 editidedPost={this.state.editidedPost}
                 onChangeUpdate={this.handelchangeUpdate}
                 onSave={this.handleSave}
              />
            }    
            {this.state.chooseDisplay&&
               <Grid
                 posts={posts}
                 onDelete={this.handleDelete}
                 onUpdate={this.handelUpdate}
                 data={this.state.posts}
                 onLike={this.likeHandler}
                 onBoom={this.boomHandler}
                 editidedPost={this.state.editidedPost}
                 onChangeUpdate={this.handelchangeUpdate}
                 onSave={this.handleSave}
               />
            }
             <Pagination
              pageSize={this.state.pageSize}
              currentPage={this.state.currentPage}
              countPosts={this.state.posts.length}
              onpagChange={this.pagChangeHandler}
              />
            </div>
        </main>
      </div>
      );
  }
}
export default Main;

