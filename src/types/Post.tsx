//temp implementation, will convert userID to name via the DB in the future.
type Post = {
    postid: number;
    userid: number;
    reputation: number;
    title: string;
    content: string;
};

export default Post;
