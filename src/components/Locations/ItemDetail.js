import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import classes from './ItemDetail.module.css';

import CommentOutput from '../Comments/CommentOutput';
import AddComment from '../Comments/AddComment';

import DUMMY_LOCATIONS from '../../database/locations';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';

const ItemDetail = (props) => {
  const [commentLists, setCommentList] = useState([]);
  const [newComment, setNewComment] = useState(false);
  const params = useParams();
  const { itemId } = params;

  const location = DUMMY_LOCATIONS.filter((item) => {
    return item.id === itemId;
  });
  const { name, id, description } = location[0];

  const newCommentHandler = () => {
    setNewComment(true);
  };

  const commentCollectionRef = collection(db, `${itemId}Comments`);
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(commentCollectionRef);
      setCommentList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
    setNewComment(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newComment]);

  const sortedComments = commentLists.sort(function (a, b) {
    return new Date(b.date.seconds) - new Date(a.date.seconds);
  });

  return (
    <div className={classes.container}>
      <h1>{id}</h1>
      <img
        src={require('../../images/' + name + '.png')}
        alt={name}
        className={classes.image}
      />
      <p className={classes.description}>{description}</p>
      {props.isLoggedIn ? (
        <AddComment id={itemId} newComment={newCommentHandler} />
      ) : (
        <h4 className={classes.notLoggedIn}>Please login to comment</h4>
      )}
      <CommentOutput comments={sortedComments} />
    </div>
  );
};

export default ItemDetail;
