import { db } from '../lib/firebase';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy
} from 'firebase/firestore';

// Products CRUD operations
export const getProducts = async () => {
  const productsRef = collection(db, 'products');
  const q = query(productsRef, orderBy('title'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addProduct = async (product) => {
  const productsRef = collection(db, 'products');
  return await addDoc(productsRef, product);
};

export const updateProduct = async (id, product) => {
  const productRef = doc(db, 'products', id);
  return await updateDoc(productRef, product);
};

export const deleteProduct = async (id) => {
  const productRef = doc(db, 'products', id);
  return await deleteDoc(productRef);
};

// Blogs CRUD operations
export const getBlogs = async () => {
  const blogsRef = collection(db, 'blogs');
  const q = query(blogsRef, orderBy('date', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addBlog = async (blog) => {
  const blogsRef = collection(db, 'blogs');
  return await addDoc(blogsRef, blog);
};

export const updateBlog = async (id, blog) => {
  const blogRef = doc(db, 'blogs', id);
  return await updateDoc(blogRef, blog);
};

export const deleteBlog = async (id) => {
  const blogRef = doc(db, 'blogs', id);
  return await deleteDoc(blogRef);
};
